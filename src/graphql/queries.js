import { gql } from "@apollo/client";

const GET_POSTS = gql`
  query {
    posts {
      id
      slug
      title
      coverPhoto {
        url
      }
      author {
        name
        slug
        avatar {
          url
        }
      }
    }
  }
`;

const GET_POST = gql`
  query getPost($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        name
        slug
        avatar {
          url
        }
      }
      title
      content {
        html
      }
      coverPhoto {
        url
      }
    }
  }
`;

const GET_AUTHORS = gql`
  query {
    authors {
      id
      field
      name
      slug
      avatar {
        url
      }
      posts {
        id
      }
    }
  }
`;

const GET_AUTHOR = gql`
  query getAuthor($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      name
      field
      description {
        html
      }
      posts {
        id
        title
        slug
        coverPhoto {
          url
        }
      }
    }
  }
`;

export { GET_POSTS, GET_POST, GET_AUTHOR, GET_AUTHORS };
