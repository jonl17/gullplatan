import slugify from 'slugify'

export const page = {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'top_image',
      title: 'Top image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: 'rich_text',
      title: 'Rich text',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Heading 1', value: 'heading1' },
            { title: 'Heading 2', value: 'heading2' },
            { title: 'Heading 3', value: 'heading3' },
            { title: 'Paragraph 1', value: 'paragraph1' },
            { title: 'Paragraph 2', value: 'paragraph2' },
          ],
        },
      ],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        onCreate: (value) => slugify(value, { lower: true }),
      },
    },
  ],
}
