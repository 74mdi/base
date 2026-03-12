import type { ElementType, TableHTMLAttributes } from 'react'
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents = {}): MDXComponents {
  const Table = ((components?.table ?? 'table') as ElementType<
    TableHTMLAttributes<HTMLTableElement>
  >)

  return {
    ...components,
    table: (props) => (
      <div className='table-wrap'>
        <Table {...props} />
      </div>
    ),
  }
}
