import { allDocs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { DocsPageClient } from './page-client'

interface PageProps {
  params: {
    slug: string[]
  }
}

export async function generateStaticParams() {
  return allDocs.map((doc) => ({
    slug: doc.url.split('/').filter(Boolean)
  }))
}

export default async function DocsPage({ params }: PageProps) {
  const { slug } = await params
  const path = `/${slug?.join('/') || ''}`
  const doc = allDocs.find((doc) => doc.url === path)
  
  if (!doc) {
    notFound()
  }

  return <DocsPageClient doc={doc} />
}
