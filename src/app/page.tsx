// 'use client';
// import styles from './page.module.css';
// import { schema } from '../../content/config';
// import React from 'react';
// import { z } from 'zod';
// import { marked } from 'marked';
// import matter from 'gray-matter';

// const fetchBlogPost = async (owner = 'kstulgys', repo = 'any-cms-setup-test', path = 'cms/blog/hello-blog-1.md') => {
//   const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
//   const response = await fetch(url);

//   if (response.ok) {
//     const data = await response.json();
//     const markdownContent = Buffer.from(data.content, 'base64');
//     const parsedData = matter(markdownContent);

//     // const content = atob(data.content); // Decode base64-encoded content
//     // const parsedContent = marked.parse(content);

//     return parsedData;
//   } else {
//     throw new Error('Failed to fetch blog post');
//   }
// };

// // @ts-ignore
// const DynamicForm = ({ schema }) => {
//   const [formData, setFormData] = React.useState({});
//   const [errors, setErrors] = React.useState({});
//   const [html, setHtml] = React.useState(``);
//   // console.log({ html });
//   React.useEffect(() => {
//     fetchBlogPost()
//       .then((res) => {
//         // console.log({ res });
//         // console.log(res.content);
//         setHtml(marked(res.content));
//         // Process the content as needed
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);
//   // @ts-ignore
//   const handleChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   // console.log({ errors });
//   // console.log({ formData });
//   // @ts-ignore
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const sss = Object.entries(schema.shape).reduce((acc, [name, props]) => {
//       // @ts-ignore
//       acc[name] = props.value;
//       return acc;
//     }, {});
//     const result = await z.object(sss).spa(formData);
//     if (!result.success) {
//       setErrors(result.error.formErrors.fieldErrors);
//     } else {
//       console.log(result.data);
//     }
//   };
//   // console.log(schema.shape);
//   return (
//     <form onSubmit={handleSubmit}>
//       {Object.entries(schema.shape).map(([name, props]) => (
//         <div key={name}>
//           {/* @ts-ignore */}
//           <label>{props.label}</label>
//           <input name={name} onChange={handleChange} />
//           {/* {errors[key] && <p>{errors[key]}</p>} */}
//         </div>
//       ))}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default function Home() {
//   // console.log({ collections });
//   // const blogFields = schema.blog.schema.shape;
//   // console.log({ blogFields });
//   // const authorFields = schema.authors.schema.shape;
//   // console.log({ authorFields });
//   return (
//     <main className={styles.main}>
//       <DynamicForm schema={schema.authors.fields} />
//     </main>
//   );
// }

export default function Page() {
  return (
    <main>
      <p>Home Page</p>
    </main>
  );
}
