import React, { useState } from "react";
import Modal from "./Modal";

type TableProps = {
  data: { key: string; value: string; description?: string }[];
  country: string;
};

const Table: React.FC<TableProps> = ({ data, country }) => {
  const [description,setDescription]=useState<String>('');
    // State to manage modal visibility
    const [isModalOpen, setModalOpen] = useState(false);

      // Function to open the modal
  const openModal = () => setModalOpen(true);

  // Function to close the modal
  const closeModal = () => setModalOpen(false);
  const showDetails = (details: string ) => {
    setDescription(details)
    setModalOpen(true);
  };
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Cultural Influences on RE activities for {country}
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Confidence Level
            </th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 text-sm text-gray-800 break-words max-w-xs md:max-w-none">
                {item.key}
              </td>
              <td className="px-4 py-2 text-sm text-gray-800 break-words max-w-xs md:max-w-none">
                {item.value}
              </td>
              <td className="px-4 py-2 text-sm text-gray-800 break-words max-w-xs md:max-w-none flex justify-center items-center">
                {item?.description !== undefined &&
                  item?.description &&
                  (() => {
                    const description = item.description;
                    return (
                      <button className="bg-emerald-600 text-white p-2 rounded" onClick={() => showDetails(description)}>
                        Details
                      </button>
                    );
                  })()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {/* Modal contents */}
        <div className="p-4">
          <h2 className="mb-2 text-lg font-bold">Details</h2>
          <p className="mb-4">
            {description}
          </p>
          <button
            onClick={closeModal}
            className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Table;
