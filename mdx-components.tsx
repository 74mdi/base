import type { ReactNode } from 'react'
import type { MDXComponents } from 'mdx/types'
import cn from 'clsx'

function headingAnchor() {
  return (
    <span
      className='absolute -ml-4 mt-1 hidden select-none text-rurikon-300 transition group-hover:block'
      aria-hidden='true'
    >
      #
    </span>
  )
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ className, ...props }) => (
      <h1
        className={cn(
          'text-3xl sm:text-4xl font-semibold tracking-tight text-rurikon-800',
          'mt-0 mb-4',
          className,
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }) => (
      <h2
        className={cn(
          'group relative text-xl sm:text-2xl font-semibold text-rurikon-800',
          'mt-10 mb-3',
          className,
        )}
        {...props}
      >
        {props.children}
        {headingAnchor()}
      </h2>
    ),
    h3: ({ className, ...props }) => (
      <h3
        className={cn(
          'text-lg font-semibold text-rurikon-800',
          'mt-8 mb-2',
          className,
        )}
        {...props}
      />
    ),
    p: ({ className, ...props }) => (
      <p
        className={cn('text-rurikon-600 leading-7 mt-3', className)}
        {...props}
      />
    ),
    a: ({ className, ...props }) => (
      <a
        className={cn(
          'underline decoration-rurikon-300 underline-offset-4 transition-colors',
          'hover:text-rurikon-800 hover:decoration-rurikon-500',
          className,
        )}
        {...props}
      />
    ),
    ul: ({ className, ...props }) => (
      <ul className={cn('mt-3 list-disc pl-5 text-rurikon-600', className)} {...props} />
    ),
    ol: ({ className, ...props }) => (
      <ol className={cn('mt-3 list-decimal pl-5 text-rurikon-600', className)} {...props} />
    ),
    li: ({ className, ...props }) => (
      <li className={cn('mt-1', className)} {...props} />
    ),
    hr: ({ className, ...props }) => (
      <hr
        className={cn('my-10 border-rurikon-border/60', className)}
        {...props}
      />
    ),
    ...components,
  }
}

export function Callout({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className='mt-6 rounded-lg border border-rurikon-border bg-[var(--surface-soft)] p-4'>
      <div className='text-xs uppercase tracking-[0.2em] text-rurikon-400'>
        {title}
      </div>
      <div className='mt-2 text-rurikon-600'>{children}</div>
    </div>
  )
}

export function Card({
  title,
  children,
  meta,
}: {
  title: string
  meta?: string
  children: ReactNode
}) {
  return (
    <div className='rounded-xl border border-rurikon-border bg-[var(--surface-overlay)] p-4'>
      <div className='flex items-center justify-between gap-3'>
        <h3 className='text-base font-semibold text-rurikon-800'>{title}</h3>
        {meta ? (
          <span className='text-[11px] uppercase tracking-[0.2em] text-rurikon-400'>
            {meta}
          </span>
        ) : null}
      </div>
      <div className='mt-2 text-sm text-rurikon-600'>{children}</div>
    </div>
  )
}
