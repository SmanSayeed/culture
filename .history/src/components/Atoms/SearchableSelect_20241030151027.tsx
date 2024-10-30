// components/SearchableSelect.tsx

'use client'
import React, { useState } from 'react';

interface Option {
  label: string;
  value: string;
}

interface SearchableSelectProps {
  options: Option[];
  onSelect: (option: Option) => void;
}

const SearchableSelect: React.FC<SearchableSelectProps> = ({ options, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setIsOpen(true);
  };

  const handleSelect = (option: Option) => {
    onSelect(option);
    setSearchTerm(option.label); // Set selected option as search term
    setIsOpen(false);
  };

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-xs">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        onClick={() => setIsOpen(true)}
        placeholder="Select an option"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {isOpen && filteredOptions.length > 0 && (
        <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded shadow-lg z-10 max-h-48 overflow-y-auto">
          {filteredOptions.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option)}
              className="cursor-pointer p-2 hover:bg-blue-500 hover:text-white"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchableSelect;
