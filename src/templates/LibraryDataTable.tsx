import {
  Input,
  Link,
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import { NextSeo } from 'next-seo';

import { useQueryState } from '@/lib/useQueryState';

import data from '../data/library-data.json';
import { LibraryContentLanguage } from './LibraryContentLanguage';
import { LibraryIcon } from './LibraryIcon';
import { Tag } from './Tags';

const types = [
  { label: 'Video', value: 'video' },
  { label: 'Audio', value: 'audio' },
  { label: 'Podcast', value: 'podcast' },
  { label: 'Docs', value: 'doc' },
  { label: 'Website', value: 'website' },
  { label: 'App', value: 'app' },
  { label: 'Book', value: 'book' },
  { label: 'Game', value: 'game' },
  { label: 'Music', value: 'music' },
];
const categories = [
  { label: 'Lessons', value: 'Lessons' },
  { label: 'Academic', value: 'Academic' },
  { label: 'Immersion', value: 'Immersion' },
  { label: 'Kids', value: 'Kids' },
  { label: 'Reference', value: 'Reference' },
  { label: 'Commentary', value: 'Commentary' },
];

const levels = [
  { label: 'Beginner', value: 'Beginner' },
  { label: 'Intermediate', value: 'Intermediate' },
  { label: 'Advanced', value: 'Advanced' },
];

const contents = [
  { label: 'English', value: 'eng' },
  { label: 'nêhiyawêwin', value: 'crk' },
  { label: 'nîhithawîwin', value: 'cwd' },
  { label: 'ininìmowin', value: 'csw' },
];

const LibraryDataTable = () => {
  const [search, setSearch] = useQueryState('search');
  const [type, setType] = useQueryState('type');
  const [category, setCategory] = useQueryState('category');
  const [level, setLevel] = useQueryState('level');
  const [content, setContent] = useQueryState('content');

  const handleSearchChange = (event: any) => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleTypeChange = (event: any) => {
    const { value } = event.target;
    setType(value);
  };

  const handleCategoryChange = (event: any) => {
    const { value } = event.target;
    setCategory(value);
  };

  const handleLevelChange = (event: any) => {
    const { value } = event.target;
    setLevel(value);
  };

  const handleContentChange = (event: any) => {
    const { value } = event.target;
    setContent(value);
  };

  const filteredData: any = data.filter((item) => {
    const searchValue = search || '';
    const typeValue = type || '';
    const categoryValue = category || '';
    const levelValue = level || '';
    const contentValue = content || '';
    return (
      (item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.author.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.description.toLowerCase().includes(searchValue.toLowerCase())) &&
      (typeValue ? item.type === typeValue : true) &&
      (categoryValue ? item.category === categoryValue : true) &&
      (levelValue ? item.level === levelValue : true) &&
      (contentValue ? item.content.includes(contentValue) : true)
    );
  });

  const renderDescription = (item: any) => {
    let youtube = false;
    if (item.source.includes('www.youtube.com')) {
      youtube = true;
    }
    let facebook = false;
    if (item.source.includes('facebook.com')) {
      facebook = true;
    }
    let paid = false;
    if (item.tags.includes('paid')) {
      paid = true;
    }
    let pdf = false;
    if (item.type === 'doc') {
      pdf = true;
    }

    return (
      <div>
        <div className="flex flex-col">
          <p className="text-sm">
            <a href={item.source} target="_blank">
              <span className="font-bold">{item.title}</span> | {item.author}
            </a>
          </p>
          <p className="text-sm text-default-500">{item.description}</p>
        </div>
        {youtube && <Tag color="red" text="YOUTUBE"></Tag>}
        {facebook && <Tag color="sky" text="FACEBOOK"></Tag>}
        {paid && <Tag color="green" text="$"></Tag>}
        {pdf && <Tag color="pink" text="PDF"></Tag>}
      </div>
    );
  };

  let inCategory = 'All Resources';
  if (category) {
    inCategory = ` ${category}`;
  }

  let inDetails = '';
  if (type || level || content) {
    const all = [type, level, content].filter((item) => item);
    inDetails = ` (${all.join(', ')})`;
  }
  let inSearch = '';
  if (search) {
    inSearch = `"${search}" in ${inCategory}${inDetails}`;
  } else {
    inSearch = `${inCategory}${inDetails}`;
  }

  const meta = {
    title: 'kiyânaw Learner Library',
    description: 'Resources for language learners',
    site_name: 'kiyânaw - all of us',
  };

  return (
    <>
      <NextSeo
        title={meta.title}
        description={meta.description}
        openGraph={{
          title: meta.title,
          description: inSearch,
        }}
      ></NextSeo>
      <div className="mx-auto w-full px-3 text-slate-700">
        <div className="m-auto w-10/12 py-3">
          <Input
            placeholder="Search..."
            color={search ? 'secondary' : 'default'}
            size="lg"
            value={search || ''}
            onChange={handleSearchChange}
          />
        </div>
        <div className="m-auto flex w-10/12 flex-wrap py-3 ">
          <Select
            label="Resource type"
            size="sm"
            color={type ? 'secondary' : 'default'}
            className="mr-2 mt-2 max-w-xs"
            selectedKeys={[`${type}`]}
            onChange={handleTypeChange}
          >
            {types.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </Select>

          <Select
            label="Category"
            size="sm"
            color={category ? 'secondary' : 'default'}
            className="mr-2 mt-2 max-w-xs"
            selectedKeys={[`${category}`]}
            onChange={handleCategoryChange}
          >
            {categories.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </Select>

          <Select
            label="Level"
            size="sm"
            color={level ? 'secondary' : 'default'}
            className="mr-2 mt-2 max-w-xs"
            selectedKeys={[`${level}`]}
            onChange={handleLevelChange}
          >
            {levels.map((level) => (
              <SelectItem key={level.value} value={level.value}>
                {level.label}
              </SelectItem>
            ))}
          </Select>

          <Select
            label="Content Language"
            size="sm"
            color={content ? 'secondary' : 'default'}
            className="mr-2 mt-2 max-w-xs"
            selectedKeys={[`${content}`]}
            onChange={handleContentChange}
          >
            {contents.map((content) => (
              <SelectItem key={content.value} value={content.value}>
                {content.label}
              </SelectItem>
            ))}
          </Select>

          <Link size="sm" href="/library">
            Clear
          </Link>
        </div>

        <Table aria-label="Language resources">
          <TableHeader>
            <TableColumn>Type</TableColumn>
            <TableColumn>Title</TableColumn>
            <TableColumn>Content</TableColumn>
            {/* <TableColumn>Tags</TableColumn> */}
            <TableColumn>Category</TableColumn>
            <TableColumn>Level</TableColumn>
          </TableHeader>
          <TableBody>
            {filteredData.map((item: any, index: any) => (
              <TableRow key={index}>
                <TableCell>
                  <LibraryIcon type={item.type}></LibraryIcon>
                </TableCell>
                <TableCell>{renderDescription(item)}</TableCell>
                <TableCell>
                  <LibraryContentLanguage
                    language={item.content}
                  ></LibraryContentLanguage>
                </TableCell>
                {/* <TableCell>
                  <div className="w-2/12">
                    <Tags tags={item.tags}></Tags>
                  </div>
                </TableCell> */}
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.level}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export { LibraryDataTable };
