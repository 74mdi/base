import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
}

export default withMDX(nextConfig)
