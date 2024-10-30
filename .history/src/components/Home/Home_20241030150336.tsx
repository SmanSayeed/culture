import React from 'react'
import SearchableSelect from '../Atoms/SearchableSelect'

type Props = {}

export default function Home({}: Props) {
    const options = [
        { label: 'Albania', value: 'AL' },
        { label: 'United States', value: 'US' },
        { label: 'Canada', value: 'CA' },
        // Add more options as needed
        const handleSelect = (option: { label: string; value: string }) => {
            alert(`Selected: ${option.label}`);
          };
      ];
  return (
    <>
        <h2>Select country</h2>
        <SearchableSelect/>
    </>
  )
}