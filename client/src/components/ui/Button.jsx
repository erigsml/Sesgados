function Button({ children, variant = 'primary', className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 disabled:cursor-not-allowed disabled:opacity-50'

  const variants = {
    primary: 'bg-neutral-50 text-neutral-900 hover:bg-neutral-200',
    outline:
      'border border-neutral-700 bg-transparent text-neutral-100 hover:border-neutral-500 hover:bg-neutral-900',
  }

  const styles = `${base} ${variants[variant]} ${className}`.trim()

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  )
}

export default Button

