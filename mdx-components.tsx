import type { TableHTMLAttributes } from 'react'
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  const Table =
    components.table ??
    ((props: TableHTMLAttributes<HTMLTableElement>) => (
      <table {...props} />
    ))

  return {
    ...components,
    table: (props) => (
      <div className='table-wrap'>
        <Table {...props} />
      </div>
    ),
  }
}
