import React from 'react';

import Layout from '../layout';
import SEO from '../seo';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'react-bootstrap/Container';
import './shelf.css';

const Shelf = () => {
  const query = useStaticQuery(graphql`
    query {
      books: allAirtable(
        filter: {
          table: { eq: "Shelf" }
          data: {
            Stage: { eq: "Completed" }
            Rating: { gte: 4 }
            Medium: { eq: "Book" }
          }
        }
        sort: { fields: id, order: DESC }
      ) {
        edges {
          node {
            data {
              Title
              Artist
              Link
            }
          }
        }
      }
      music: allAirtable(
        filter: {
          table: { eq: "Shelf" }
          data: {
            Stage: { eq: "Completed" }
            Rating: { gte: 3 }
            Medium: { eq: "Album" }
          }
        }
        sort: { fields: id, order: DESC }
      ) {
        edges {
          node {
            data {
              Title
              Artist
              Link
            }
          }
        }
      }
      films: allAirtable(
        filter: {
          table: { eq: "Shelf" }
          data: {
            Stage: { eq: "Completed" }
            Rating: { gte: 4 }
            Medium: { eq: "Film" }
          }
        }
        sort: { fields: id, order: DESC }
      ) {
        edges {
          node {
            data {
              Title
              Artist
              Link
            }
          }
        }
      }
    }
  `);

  const { books, music, films } = getAirtableRows(query);

  return (
    <Layout>
      <SEO title="Shelf" />
      <Container className="intro-container shelf" fluid>
        <h1 className="title">Shelf</h1>
        <p>
          An unordered virtual library of books, music, films, and other works
          of art that I would recommend to others. Somewhat inspired by Patrick
          Collision's{' '}
          <a
            className="plain-link"
            href="https://patrickcollison.com/bookshelf"
            target="_blank"
            rel="noreferrer"
          >
            bookshelf
          </a>
          .
        </p>
        {renderNameAndList('Books:', books)}
        {renderNameAndList('Music:', music)}
        {renderNameAndList('Films:', films)}
      </Container>
    </Layout>
  );
};

const getAirtableRows = query => {
  const rows = { ...query };
  Object.entries(rows).forEach(
    ([key, value]) => (rows[key] = value.edges.map(edge => edge.node.data))
  );
  return rows;
};

const renderNameAndList = (name, list) => (
  <>
    <p>{name}</p>
    <ul>
      {list.map((item, i) => (
        <li key={`completed-${i}`}>
          <a
            href={item?.Link}
            target="_blank"
            rel="noreferrer"
            className="plain-link"
          >
            {item.Title}
          </a>
        </li>
      ))}
    </ul>
  </>
);

export default Shelf;
