import type { GetStaticProps } from 'next';

import { type BlogMeta, getLatestPostMeta } from '@/lib/blog';

import { Base } from '../templates/Base';

interface IndexProps {
  latestBlog: BlogMeta | null;
}

const Index = ({ latestBlog }: IndexProps) => <Base latestBlog={latestBlog} />;

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const latestBlog = getLatestPostMeta();

  return {
    props: {
      latestBlog,
    },
  };
};

export default Index;
