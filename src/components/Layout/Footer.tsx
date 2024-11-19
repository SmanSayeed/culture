import { siteInfo } from '@/utils/siteInfo'
import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <>
      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} {siteInfo.siteTitle}</p>
        <div>
          <p className="font-bolder">Framework developed by: Chowdhury Shahriar Muzammel</p>
          <p>PhD Researcher (Computer Science), RMIT University, Australia</p>
          <p>Contact: s3987367@student.rmit.edu.au</p>
        </div>
      </footer>
    </>
  )
}
