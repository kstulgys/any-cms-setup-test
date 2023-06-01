import { document, collection, f, createSchema } from 'cms-admin';

const blogs = collection({
  label: 'Blogs',
  type: 'content', // will be multiple files i.e content/collection/blogs/*.md
  schema: f.schema({
    title: f.text({ label: 'Title' }),
    isDraft: f.toggle({ label: 'Draft' }),
    author: f.select({ label: 'Authors', document: 'authors', multiple: true }),
    relatedPosts: f.select({ label: 'Related posts', collection: 'blogs' }),
    tags: f.checkbox({ label: 'Tags', document: 'tags' }),
    body: f.markdown({ label: 'Body' }),
  }),
});

const authors = collection({
  label: 'Authors',
  type: 'data', // will be single file i.e content/document/authors.json
  schema: f.schema({
    name: f.text({ label: 'Name' }),
    portfolio: f.url({ label: 'Portfolio' }),
  }),
});

const tags = collection({
  label: 'Tags',
  type: 'data', // will be single file i.e content/document/tags.json
  schema: f.schema({
    name: f.text({ label: 'Name' }),
  }),
});

const portfolios = collection({
  label: 'Portfolio',
  type: 'data', // will be single file i.e content/document/authors.json
  schema: f.schema({
    name: f.text({ label: 'Name' }),
    url: f.url({ label: 'Url' }),
  }),
});

// will be single file i.e content/collection/pages/home.json
const home = document({
  label: 'Home Page',
  type: 'data', // will be raw .json object. If collection then will be .md file with gray-matter
  schema: f.schema({
    headline: f.text({ label: 'Headline' }),
    description: f.url({ label: 'Description' }),
    services: f.fieldset({
      label: 'Services',
      fields: f.fields({
        name: f.text({ label: 'Name' }),
        description: f.description({ label: 'Description' }),
      }),
    }),
    portfolio: f.select({
      label: 'Portfolio',
      collection: 'portfolios',
      multiple: true,
    }),
  }),
});

const about = document({
  label: 'About Page',
  type: 'data', // will be raw .json object. If collection then will be .md file with gray-matter
  schema: f.schema({
    headline: f.text({ label: 'Headline' }),
    description: f.url({ label: 'Description' }),
    services: f.fieldset({
      label: 'Services',
      fields: f.fields({
        name: f.text({ label: 'Name' }),
        description: f.description({ label: 'Description' }),
      }),
    }),
    portfolio: f.select({
      label: 'Portfolio',
      collection: 'portfolios',
      multiple: true,
    }),
  }),
});

const settings = document({
  label: 'Setting Page',
  type: 'data', // will be raw .json object. If collection then will be .md file with gray-matter
  schema: f.schema({
    theme: f.text({ label: 'Theme' }),
  }),
});

const pages = collection({
  label: 'Pages',
  schema: f.schema({
    // common fields for every document
    seo: f.fieldset({
      label: 'SEO',
      fields: f.fields({
        name: f.text({ label: 'Name' }),
        description: f.description({ label: 'Description' }),
      }),
    }),
    slug: f.slug({ label: 'Slug' }),
  }),
  documents: [home, about, settings],
});

export default createSchema({ authors, blogs, pages, tags, portfolios, settings });
