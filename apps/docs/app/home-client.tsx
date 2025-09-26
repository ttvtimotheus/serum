"use client"

import { DocsLayout } from '@/components/layouts/docs-layout'
import { mdxComponents } from '@/components/mdx-components'
import { useMDXComponent } from 'next-contentlayer/hooks'

interface HomeClientProps {
  doc: any
}

export function HomeClient({ doc }: HomeClientProps) {
  const MDXContent = useMDXComponent(doc.body.code)

  return (
    <DocsLayout>
      <MDXContent components={mdxComponents} />
    </DocsLayout>
  )
}
