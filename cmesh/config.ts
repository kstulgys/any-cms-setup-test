import { document, collection, f, createSchema } from 'cms-admin';

const blogs = collection({
  label: 'Blogs',
  format: 'md', // will be multiple files i.e content/collection/blogs/*.md
  fields: f.object({
    title: f.text({ label: 'Title' }),
    isDraft: f.toggle({ label: 'Draft' }),
    author: f.select({ label: 'Authors', document: 'authors', multiple: true }),
    relatedPosts: f.select({ label: 'Related posts', collection: 'blogs' }),
    tags: f.checkbox({ label: 'Tags', document: 'tags' }),
    body: f.markdown({ label: 'Body' }),
  }),
});

const pages = collection({
  label: 'Pages',
  format: 'md', // will be multiple files i.e content/collection/pages/*.md
  fields: f.object({
    slug: f.slug({ label: 'Slug' }),
    name: f.text({ label: 'Name' }),
    heading: f.text({ label: 'Heading' }),
    body: f.markdown({ label: 'Body' }),
  }),
});

const authors = document({
  format: 'json', // will be single file i.e content/document/tags.json
  label: 'Authors',
  fields: f.object({
    name: f.text({ label: 'Name' }),
    portfolio: f.url({ label: 'Portfolio' }),
  }),
});

const tags = document({
  format: 'json', // will be single file i.e content/document/tags.json
  label: 'Tags',
  fields: f.object({
    name: f.text({ label: 'Name' }),
  }),
});

export const schema = createSchema({ authors, blogs, pages, tags });
