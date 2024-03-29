import cn from 'classnames'

type Props = {
  double?: boolean
  className?: string
}

const Seperator = ({ double, className = 'text-green-blue' }: Props) => {
  return (
    <div
      className={cn('w-full grid gap-1 md:gap-3 absolute bottom-0', className)}
    >
      {double && (
        <span className="h-[6px] md:h-[20px] block bg-current w-full" />
      )}
      <span className="h-[2px] md:h-[7px] block bg-current w-full" />
    </div>
  )
}

export default Seperator
