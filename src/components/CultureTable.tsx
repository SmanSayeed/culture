'use client'
interface CultureItem {
    key: string;
    value: string;
  }
  
  interface CultureTableProps {
    cultureData: CultureItem[];
    onEdit: (index: number) => void;
    onDelete: (index: number) => void;
  }
  
  const CultureTable: React.FC<CultureTableProps> = ({ cultureData, onEdit, onDelete }) => (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2">Key</th>
          <th className="py-2">Value</th>
          <th className="py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {cultureData.map((item, index) => (
          <tr key={index}>
            <td className="p-2 border">{item.key}</td>
            <td className="p-2 border">{item.value}</td>
            <td className="p-2 border">
              <button onClick={() => onEdit(index)} className="text-blue-500">Edit</button>
              <button onClick={() => onDelete(index)} className="text-red-500 ml-2">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  
  export default CultureTable;
  