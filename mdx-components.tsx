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
    h4: ({ className, ...props }) => (
      <h4
        className={cn(
          'text-base font-semibold text-rurikon-800',
          'mt-6 mb-2',
          className,
        )}
        {...props}
      />
    ),
    h5: ({ className, ...props }) => (
      <h5
        className={cn(
          'text-sm font-semibold uppercase tracking-[0.16em] text-rurikon-600',
          'mt-5 mb-2',
          className,
        )}
        {...props}
      />
    ),
    h6: ({ className, ...props }) => (
      <h6
        className={cn(
          'text-xs font-semibold uppercase tracking-[0.18em] text-rurikon-500',
          'mt-4 mb-2',
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
      <li className={cn('mt-1 leading-7', className)} {...props} />
    ),
    blockquote: ({ className, ...props }) => (
      <blockquote
        className={cn(
          'mt-4 pl-4 text-rurikon-600',
          'border-l border-rurikon-400/60',
          className,
        )}
        {...props}
      />
    ),
    pre: ({ className, ...props }) => (
      <pre
        className={cn(
          'mt-4 overflow-x-auto rounded-lg border border-rurikon-border',
          'bg-[var(--surface-soft)] p-4 text-[13px] leading-6 text-rurikon-700',
          className,
        )}
        {...props}
      />
    ),
    code: ({ className, ...props }) => {
      const isBlock = className?.includes('language-')
      return (
        <code
          className={cn(
            isBlock
              ? 'text-rurikon-700'
              : 'rounded bg-[var(--surface-soft)] px-1.5 py-0.5 text-[0.85em] text-rurikon-700',
            className,
          )}
          {...props}
        />
      )
    },
    table: ({ className, ...props }) => (
      <div className='mt-6 overflow-x-auto rounded-lg border border-rurikon-border'>
        <table
          className={cn('w-full border-collapse text-left text-sm', className)}
          {...props}
        />
      </div>
    ),
    thead: ({ className, ...props }) => (
      <thead className={cn('bg-[var(--surface-soft)]', className)} {...props} />
    ),
    tbody: ({ className, ...props }) => (
      <tbody className={cn('text-rurikon-600', className)} {...props} />
    ),
    tr: ({ className, ...props }) => (
      <tr className={cn('border-b border-rurikon-border', className)} {...props} />
    ),
    th: ({ className, ...props }) => (
      <th
        className={cn(
          'px-3 py-2 text-[11px] uppercase tracking-[0.2em] text-rurikon-500',
          className,
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }) => (
      <td className={cn('px-3 py-2', className)} {...props} />
    ),
    img: ({ className, alt, ...props }) => (
      <img
        alt={alt ?? ''}
        className={cn(
          'mt-4 max-w-full rounded-lg border border-rurikon-border',
          className,
        )}
        {...props}
      />
    ),
    strong: ({ className, ...props }) => (
      <strong className={cn('font-semibold text-rurikon-800', className)} {...props} />
    ),
    em: ({ className, ...props }) => (
      <em className={cn('text-rurikon-700 italic', className)} {...props} />
    ),
    del: ({ className, ...props }) => (
      <del className={cn('text-rurikon-400', className)} {...props} />
    ),
    sup: ({ className, ...props }) => (
      <sup className={cn('text-[0.7em] align-super', className)} {...props} />
    ),
    sub: ({ className, ...props }) => (
      <sub className={cn('text-[0.7em] align-sub', className)} {...props} />
    ),
    ins: ({ className, ...props }) => (
      <ins className={cn('underline decoration-rurikon-400', className)} {...props} />
    ),
    mark: ({ className, ...props }) => (
      <mark className={cn('rounded px-1', className)} {...props} />
    ),
    kbd: ({ className, ...props }) => (
      <kbd
        className={cn(
          'rounded border border-rurikon-border bg-[var(--surface-soft)] px-1.5 py-0.5 text-[0.75em] text-rurikon-600',
          className,
        )}
        {...props}
      />
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
