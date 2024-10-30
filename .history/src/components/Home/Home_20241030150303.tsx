import React from 'react'
import SearchableSelect from '../Atoms/SearchableSelect'

type Props = {}

export default function Home({}: Props) {
  return (
    <>
        <h2>Select country</h2>
        <SearchableSelect/>
    </>
  )
}