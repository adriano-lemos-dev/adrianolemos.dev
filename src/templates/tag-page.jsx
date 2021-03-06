import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import NoteListContainer from 'theme/containers/NoteListContainer';

import Layout from 'components/Layout';
import Header from 'components/Header';
import SEO from 'components/SEO';


const TagPage = ({ pageContext, data }) => {
  if (!data.allMarkdownRemark) return null;
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } marcado com "${tag}"`;

  return (
    <Layout>
      <SEO title={tag} description={tagHeader} />
      <Header title={tag} subtitle={tagHeader} />
      {edges.map(({ node }) => (
        <NoteListContainer key={node.fields.slug}>
          <h3>
            <Link to={node.fields.slug}>
              {node.frontmatter.title}
            </Link>
          </h3>
        </NoteListContainer>
      ))}
      <Link to="/tags">Todas as tags</Link>
    </Layout>
  );
};

TagPage.defaultProps = {
  pageContext: {
    tag: '',
  },
  data: {
    allMarkdownRemark: {
      edges: [],
    },
  },
};

TagPage.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default TagPage;

// eslint-disable-next-line
export const tagpageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            tagSlugs
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
