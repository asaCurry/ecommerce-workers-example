export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'link',
        title: 'Link',
        type: 'url',
      },
      {
        name: 'color',
        title: 'Color',
        type: 'string',
      },
      {
        name: 'screen',
        title: 'screen',
        type: 'image',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'blockContent',
      },
    ],
    preview: {
      select: {
        title: 'title',
        media: 'logo',
      },
    },
  }
  