import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string' },
    order: { type: 'number' }
  },
  computedFields: {
    url: { 
      type: 'string', 
      resolve: (post) => {
        if (post._raw.sourceFileName === 'introduction.mdx') {
          return '/'
        }
        // For files in root directory (like installation.mdx)
        if (post._raw.sourceFileDir === '.') {
          return `/${post._raw.flattenedPath}`
        }
        // For files in subdirectories (like components/button.mdx)
        return `/${post._raw.flattenedPath}`
      }
    },
    slug: {
      type: 'string',
      resolve: (post) => post._raw.sourceFileName.replace(/\.mdx$/, '')
    }
  }
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: []
  }
})
