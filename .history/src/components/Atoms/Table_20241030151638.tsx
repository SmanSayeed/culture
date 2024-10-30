import React from 'react';

type TableProps = {
  data: { key: string; value: string }[];
  country:{}
};

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Cultural Influences on RE activities for Bangladesh</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 text-sm text-gray-800 break-words max-w-xs md:max-w-none">{item.key}</td>
              <td className="px-4 py-2 text-sm text-gray-800 break-words max-w-xs md:max-w-none">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
