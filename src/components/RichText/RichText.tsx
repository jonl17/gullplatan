import type { HTMLSerializer } from 'prismic-reactjs'
import { Elements, RichText as PrismicRichText } from 'prismic-reactjs'

import { linkResolver as prismicLinkResolver } from '@root/prismicio'

import {
  FieldRenderFunctionInput,
  FieldRenderMap,
  RichTextProps,
} from './types'

import Image from 'next/image'
import Link from 'next/link'
import Text from '~/components/Text'

/**
 * All components should be dynamically imported into this component.
 * All components should be imported with deep imports path (no index files)
 * This is to optimize code splitting since this component is used on almost every page
 */

const renderPrismicHeading1 = ({ children, key }: FieldRenderFunctionInput) => (
  <Text className="my-4" variant="heading1" as="h1" key={key}>
    {children}
  </Text>
)

const renderPrismicHeading2 = ({ key, children }: FieldRenderFunctionInput) => (
  <Text className="my-4" variant="heading2" as="h2" key={key}>
    {children}
  </Text>
)

const renderPrismicHeading3 = ({ key, children }: FieldRenderFunctionInput) => (
  <Text className="my-4" variant="heading3" as="h3" key={key}>
    {children}
  </Text>
)

const renderPrismicParagraph = ({
  key,
  children,
}: FieldRenderFunctionInput) => (
  <Text variant="paragraph2" className="my-4 pb-3" key={key}>
    {children}
  </Text>
)

const renderPrismicImage = ({ key, element }: FieldRenderFunctionInput) => {
  // the image is not provided, don't try and render the image element
  if (!element.url) {
    return false
  }

  return <Image src={element.url} alt={element.alt ?? ''} />
}

const renderPrismicLink = ({
  key,
  element,
  children,
}: FieldRenderFunctionInput) => (
  <Link
    href={element.data.url || prismicLinkResolver(element.data)}
    key={key}
    className="link"
  >
    {children}
  </Link>
)

const renderStrong = ({ key, children }: FieldRenderFunctionInput) => (
  <span className="font-extrabold">{children}</span>
)

const defaultFieldRenderMap: FieldRenderMap = {
  [Elements.heading1]: renderPrismicHeading1,
  [Elements.heading2]: renderPrismicHeading2,
  [Elements.heading3]: renderPrismicHeading3,
  [Elements.paragraph]: renderPrismicParagraph,
  [Elements.image]: renderPrismicImage,
  [Elements.hyperlink]: renderPrismicLink,
  [Elements.span]: () => null,
  [Elements.embed]: () => null,
  [Elements.strong]: renderStrong,
}

/**
 * Converts prismic rich text elements to react components.
 * Based on: https://prismic.io/docs/technologies/html-serializer-reactjs
 */
const htmlSerializer: (
  fieldMapOverwrite?: FieldRenderMap
) => HTMLSerializer<React.ReactNode> =
  (fieldMapOverwrite = {}) =>
  (type, element, content, children, key) => {
    /**
     * Returning null makes prismic RichText use default behaviour for given element.
     * The following elements are not implemented at the time of writing (19-10-2021) is:
     *   Elements.embed
     *   Elements.span
     */
    return (
      { ...defaultFieldRenderMap, ...fieldMapOverwrite }[type]?.({
        children,
        content,
        element,
        key,
      }) ?? null
    )
  }

const RichText = ({ data, fieldMapOverwrite }: RichTextProps) => (
  <PrismicRichText
    render={data}
    htmlSerializer={htmlSerializer(fieldMapOverwrite)}
    linkResolver={prismicLinkResolver}
  />
)

export default RichText
