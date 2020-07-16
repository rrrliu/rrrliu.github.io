import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

  return (
    <Row className="justify-content-md-center align-items-center">
      <Col className="paragraphs">
        {paragraphs.map(paragraph => (
          <p>{parseParagraphForLinks(paragraph)}</p>
        ))}
      </Col>
    </Row>
  );
};

export default Paragraphs;
