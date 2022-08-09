import { RichTextBlock } from 'prismic-reactjs'

export interface RichTextProps {
  data: RichTextBlock[]
  fieldMapOverwrite?: FieldRenderMap
}

export interface FieldRenderFunctionInput {
  element: any // FIXME: Add proper type for this element
  content: string
  children: React.ReactNode[]
  key: string
}

export type FieldRenderMap = Record<
  string,
  (values: FieldRenderFunctionInput) => JSX.Element | null | false
>
