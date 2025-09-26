"use client"

import { DocsLayout } from '@/components/layouts/docs-layout'
import { mdxComponents } from '@/components/mdx-components'
import { useMDXComponent } from 'next-contentlayer/hooks'

interface DocsPageClientProps {
  doc: any
}

export function DocsPageClient({ doc }: DocsPageClientProps) {
  const MDXContent = useMDXComponent(doc.body.code)

  return (
    <DocsLayout>
      <MDXContent components={mdxComponents} />
    </DocsLayout>
  )
}
