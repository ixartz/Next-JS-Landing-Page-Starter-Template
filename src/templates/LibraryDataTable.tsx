import {
  Input,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';

import { useQueryState } from '@/lib/useQueryState';

import data from '../data/library-data.json';
import { LibraryIcon } from './LibraryIcon';

const LibraryDataTable = () => {
  const [search, setSearch] = useQueryState('search');

  const handleSearchChange = (event: any) => {
    const { value } = event.target;
    setSearch(value);
  };

  const filteredData: any = data.filter((item) => {
    const searchValue = search || '';
    return (
      item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.description.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.language.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.level.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  const renderDescription = (item: any) => {
    return (
      <div className="flex flex-col">
        <p className="text-sm capitalize">
          <span className="font-bold">{item.title}</span> - {item.author}
        </p>
        <p className="text-sm capitalize text-default-400">
          {item.description}
        </p>
      </div>
    );
  };

  return (
    <div className="mx-auto w-full px-3 text-slate-700">
      <div className="py-3">
        <Input
          width="100%"
          placeholder="Search..."
          value={search || ''}
          onChange={handleSearchChange}
        />
      </div>

      <Table hideHeader aria-label="Language resources">
        <TableHeader>
          <TableColumn>Type</TableColumn>
          <TableColumn>Title</TableColumn>
          <TableColumn>Language</TableColumn>
          {/* <TableColumn>Author</TableColumn> */}
          <TableColumn>Level</TableColumn>
        </TableHeader>
        <TableBody>
          {filteredData.map((item: any, index: any) => (
            <TableRow key={index}>
              <TableCell>
                <LibraryIcon type={item.type}></LibraryIcon>
              </TableCell>
              <TableCell>{renderDescription(item)}</TableCell>
              <TableCell>{item.language}</TableCell>
              {/* <TableCell>{item.author}</TableCell> */}
              <TableCell>{item.level}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export { LibraryDataTable };
