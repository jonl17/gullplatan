import { createElement, ElementType, ReactNode } from 'react'

import cn from 'classnames'

export interface ITextProps {
  /**
   * Type of element to render.
   */
  as?: ElementType
  /**
   * Predefined text appearance.
   */
  variant?: keyof typeof variants
  children?: ReactNode
  className?: string
}

const sizes: Record<keyof typeof variants, string> = /*tw*/ {
  /**
   * Define mobile and desktop text sizes
   */
  heading1: 'text-20/24 md:text-60/72',
  heading2: 'text-14/16.8 md:text-40/48',
  heading3: 'text-20/24',
  paragraph1: 'text-20/24 md:text-30/141%',
  paragraph2: 'text-14/16.8 md:text-20/24',
  paragraph3: 'text-14/16.8',
  logo: 'text-20/24 md:text-30/40',
  pageHeading: 'text-41/49.2 md:text-120/151.2',
}

export type GetTextStylesProps = Pick<ITextProps, 'variant'>

const variants = {
  heading1: 'font-buenos-black font-black uppercase',
  heading2: 'font-buenos-black font-black uppercase',
  heading3: 'font-buenos-black font-black uppercase',
  paragraph1: 'font-buenos-light font-light',
  paragraph2: 'font-buenos-light font-light',
  paragraph3: 'font-buenos-light font-light',
  logo: 'font-buenos-black font-black lowercase',
  pageHeading: 'font-buenos-black font-black lowercase',
}

export const getTextStyles = (
  { variant = 'paragraph1' }: GetTextStylesProps,
  className = ''
) => cn(sizes[variant], variants[variant], className)

export const Text = ({
  as = 'p',
  className,
  variant,
  ...restProps
}: ITextProps) =>
  createElement(as, {
    className: getTextStyles({ variant }, className),
    ...restProps,
  })

export default Text
