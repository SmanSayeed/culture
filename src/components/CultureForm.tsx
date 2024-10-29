import { useState, useEffect } from "react";

interface CultureItem {
  key: string;
  value: string;
}

interface CultureFormProps {
  onSubmit: (cultureData: CultureItem[]) => void;
  initialData?: CultureItem[];
}

const CultureForm: React.FC<CultureFormProps> = ({ onSubmit, initialData = [] }) => {
  const [cultureData, setCultureData] = useState<CultureItem[]>(initialData);

  useEffect(() => {
    setCultureData(initialData);
  }, [initialData]);

  const addNewItem = () => setCultureData([...cultureData, { key: "", value: "" }]);
  const updateItem = (index: number, field: string, value: string) => {
    const updatedData = [...cultureData];
    updatedData[index][field as keyof CultureItem] = value;
    setCultureData(updatedData);
  };
  const removeItem = (index: number) => setCultureData(cultureData.filter((_, i) => i !== index));

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(cultureData);
      }}
    >
      {cultureData.map((item, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            type="text"
            placeholder="Key"
            value={item.key}
            onChange={(e) => updateItem(index, "key", e.target.value)}
            className="p-2 border rounded mr-2"
          />
          <input
            type="text"
            placeholder="Value"
            value={item.value}
            onChange={(e) => updateItem(index, "value", e.target.value)}
            className="p-2 border rounded"
          />
          <button type="button" onClick={() => removeItem(index)} className="ml-2 text-red-500">
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={addNewItem} className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
        Add New
      </button>
      <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default CultureForm;
