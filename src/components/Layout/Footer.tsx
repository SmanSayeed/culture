import { siteInfo } from '@/utils/siteInfo'
import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <>
      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4 text-center flex justify-center items-center flex-col">
        <p>&copy; {new Date().getFullYear()} {siteInfo.siteTitle}</p>
        <div className="p-1 rounded-md shadow-lg bg-blue-800 my-3">
          <p className="font-semibold">Framework developed by: Chowdhury Shahriar Muzammel, Dr. Maria Spichkova, Dr. James Harland</p>
          <p>School of Computing Technologies, RMIT University, Australia</p>
          <p>Contact: s3987367@student.rmit.edu.au</p>
        </div>
      </footer>
    </>
  )
}
