import React from 'react'
import SearchableSelect from '../Atoms/SearchableSelect'

type Props = {}

export default function Home({}: Props) {
    const options = [
        { label: 'Albania', value: 'AL' },
        { label: 'United States', value: 'US' },
        { label: 'Canada', value: 'CA' },
        // Add more options as needed
      ];
  return (
    <>
        <h2>Select country</h2>
        <SearchableSelect/>
    </>
  )
}