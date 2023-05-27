import { z, ZodObject } from 'zod';

type CollectionType = 'content' | 'data';

interface Collection {
  type: CollectionType;
  schema: ZodObject<any>;
}

type Schema = { [key: string]: Collection };

export function createSchema<T extends Schema>(schema: T): T {
  return schema;
}

function object(obj: any) {
  return z.object(obj);
}
function text({ label }: { label: string }) {
  return { label, value: z.string() };
}

function url({ label }: { label: string }) {
  return { label, value: z.string().url() };
}

function ref({ label, collection, isArray = false }: { label: string; collection: string; isArray?: boolean }) {
  return { label, collection, value: z.string(), isArray };
}

function markdown({ label }: { label: string }) {
  return { label, value: z.string() };
}

const blog = {
  type: 'content' as const,
  schema: object({
    title: text({ label: 'Title' }),
    body: markdown({ label: 'Title' }),
    author: ref({ label: 'authors', collection: 'authors' }),
    relatedPosts: ref({ label: 'Related posts', collection: 'blog' }),
  }),
};

const authors = {
  type: 'data' as const,
  schema: object({
    name: text({ label: 'Name' }),
    portfolio: url({ label: 'Portfolio' }),
  }),
};

export const collections = createSchema({ authors, blog });
