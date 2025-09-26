import { allDocs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { HomeClient } from './home-client'

export default function Home() {
  const doc = allDocs.find((doc) => doc.slug === 'introduction')
  
  if (!doc) {
    notFound()
  }

  return <HomeClient doc={doc} />
}
