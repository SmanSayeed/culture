'use client'
import React from 'react'
import {importCountries} from '../actions/countryController'
export default function CountryInputButton() {
    const handleInput = async ()=>{
        const res = await importCountries();
        console.log("res  = ",res)
    }
  return (
    <>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={()=>handleInput()}>
        Import country
    </button>
    </>
  )
}
