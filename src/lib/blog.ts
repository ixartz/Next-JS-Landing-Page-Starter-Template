import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  coverImage?: string | null;
  tags?: string[];
}

export interface BlogPost {
  meta: BlogMeta;
  content: string;
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const files = fs.readdirSync(postsDirectory);
  return files
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((file) => file.replace(/\.(mdx|md)$/, ''));
}

export function getPostBySlug(slug: string): BlogPost {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  let fileContents: string;

  try {
    fileContents = fs.readFileSync(fullPath, 'utf8');
  } catch {
    // Try .md extension as fallback
    const mdPath = path.join(postsDirectory, `${slug}.md`);
    fileContents = fs.readFileSync(mdPath, 'utf8');
  }

  const { data, content } = matter(fileContents);

  const meta: BlogMeta = {
    slug,
    title: data.title || '',
    date: data.date || '',
    excerpt: data.excerpt || '',
    author: data.author || '',
    coverImage: data.coverImage || null,
    tags: data.tags || [],
  };

  return {
    meta,
    content,
  };
}

export function getAllPostsMeta(): BlogMeta[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug).meta)
    .sort((a, b) => {
      // Sort by date descending (newest first)
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return posts;
}

export function getLatestPostMeta(): BlogMeta | null {
  const posts = getAllPostsMeta();
  return posts.length > 0 ? posts[0]! : null;
}

export function getPostsByTag(tag: string): BlogMeta[] {
  const allPosts = getAllPostsMeta();
  return allPosts.filter((post) => post.tags?.includes(tag));
}
