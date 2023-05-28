import { collection, object, text, markdown, ref, url, createSchema } from 'cms-admin';

const blog = collection({
  label: 'Blog',
  type: 'content',
  fields: object({
    title: text({ label: 'Title' }),
    body: markdown({ label: 'Body' }),
    author: ref({ label: 'Authors', collection: 'authors' }),
    relatedPosts: ref({ label: 'Related posts', collection: 'blog' }),
  }),
});

const authors = collection({
  label: 'Authors',
  type: 'data',
  fields: object({
    name: text({ label: 'Name' }),
    portfolio: url({ label: 'Portfolio' }),
  }),
});

const portfolio = collection({
  label: 'Portfolio',
  type: 'data',
  fields: object({
    author: ref({ label: 'Authors', collection: 'authors' }),
  }),
});

const pages = collection({
  label: 'Pages',
  type: 'data',
  fields: object({
    name: text({ label: 'Name' }),
    heading: text({ label: 'Heading' }),
  }),
});

export const schema = createSchema({ authors, blog, portfolio, pages });
