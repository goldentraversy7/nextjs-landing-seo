import React from "react"
import Link from "next/link"

interface UrlsProps {
  url: string
  label: string
}

interface FooterSectionProps {
  title: string
  urls: UrlsProps[]
}

const FooterSection = ({ title, urls }: FooterSectionProps) => {
  return (
    <div className="flex flex-col items-start">
      <h3 className="text-gray-900 font-semibold mb-4">{title}</h3>
      <ul className="text-gray-600 text-sm flex flex-col">
        {urls.map((url, index) => (
          <Link className="mb-2" href={url.url} key={index}>
            {url.label}
          </Link>
        ))}
      </ul>
    </div>
  )
}
export default FooterSection
