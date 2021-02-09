import React from 'react';

import './paragraphs.css';
import { useStaticQuery, graphql } from 'gatsby';

const Paragraphs = ({ parseParagraphForLinks }) => {
  const paragraphs = useStaticQuery(graphql`
    query {
      allAirtable(
        filter: { table: { eq: "Introduction" } }
        sort: { fields: data___Order, order: ASC }
      ) {
        edges {
          node {
            data {
              Text
              Order
            }
          }
        }
      }
    }
  `).allAirtable.edges.map(edge => edge.node.data.Text);

  return paragraphs.map(paragraph => (
    <p>{parseParagraphForLinks(paragraph)}</p>
  ));
};

export default Paragraphs;
