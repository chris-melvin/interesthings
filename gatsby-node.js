const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const Post = path.resolve("./src/templates/categories-sanity.js");
  const result = await graphql(
    `
      {
        allSanityCategory {
          edges {
            node {
              title
              slug {
                current
              }
            }
          }
        }
      }
    `
  );
  if (result.errors) {
    throw result.errors;
  }
  const posts = result.data.allSanityCategory.edges;

  posts.forEach((post) => {
    createPage({
      path: `categories/${post.node.slug.current}`,
      component: Post,
      context: {
        slug: post.node.slug.current,
      },
    });
  });
};
