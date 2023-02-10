import cn from 'classnames'

export default function Arrow({
  className = 'text-green-blue',
}: {
  className?: string
}) {
  return (
    <svg
      width="154"
      height="169"
      viewBox="0 0 154 169"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('mx-auto', className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M92 124.5V0H102V124.5H92Z"
        className="fill-current"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47 124.5V0H87V124.5H47Z"
        className="fill-current"
      />
      <path
        d="M78.9584 169L0 109L154 109L78.9584 169Z"
        className="fill-current"
      />
    </svg>
  )
}
