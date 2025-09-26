// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string" },
    order: { type: "number" }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => {
        if (post._raw.sourceFileName === "introduction.mdx") {
          return "/";
        }
        if (post._raw.sourceFileDir === ".") {
          return `/${post._raw.flattenedPath}`;
        }
        return `/${post._raw.flattenedPath}`;
      }
    },
    slug: {
      type: "string",
      resolve: (post) => post._raw.sourceFileName.replace(/\.mdx$/, "")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: []
  }
});
export {
  Doc,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-ZQXU5PXY.mjs.map
