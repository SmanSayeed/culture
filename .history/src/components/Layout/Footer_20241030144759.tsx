import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <>
      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} {siteTitle.}</p>
      </footer>
    </>
  )
}