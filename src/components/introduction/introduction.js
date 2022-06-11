import React, { useEffect } from 'react';
import Paragraphs from '../paragraphs/paragraphs';
import ExternalLink from '../external-link/external-link';
import ReactReplace from 'react-string-replace';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';
import './introduction.css';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../layout';

function Introduction() {
  useEffect(() => {
    document.title = 'Richard Liu';
  }, []);

  const processLinks = records => {
    const processed_links = {};
    records.forEach(record => {
      processed_links[record.Name] = {
        text: record.Text,
        url: record.URL,
        color: record.Highlight_color,
      };
    });
    return processed_links;
  };

  const title = ['Hey,', "I'm Richard."];

  const allLinks = useStaticQuery(graphql`
    query {
      allAirtable(filter: { table: { eq: "Hyperlinks" } }) {
        edges {
          node {
            data {
              Name
              URL
              Text
              Highlight_color
              Logo {
                url
              }
            }
          }
        }
      }
    }
  `).allAirtable.edges.map(edge => edge.node.data);

  const links = processLinks(allLinks);

  const externalLinks = [...allLinks.filter(l => !!l.Logo)].reverse();

  const parseParagraphForLinks = paragraph => {
    const brackets = /\[(.+?)\]/g;
    return ReactReplace(paragraph, brackets, match => {
      const link = links[match] || {
        url: 'http://google.com',
        text: '[broken link 😭]',
      };

      const Hyperlink = styled.a`
        color: rgb(10, 10, 10);
        :after {
          background: ${link.color};
        }
        :hover {
          color: rgb(10, 10, 10);
          text-decoration: none;
        }
      `;

      return (
        <span className="hyper">
          <Hyperlink
            className="underline_link"
            href={link.url}
            target="_blank"
            rel="noreferrer noopener"
          >
            {link.text}
          </Hyperlink>
        </span>
      );
    });
  };

  const parseTitle = () => {
    const name = 'Richard';
    return title.map(sentence => (
      <span className="title_sentence">
        {ReactReplace(sentence, name, match => {
          console.log(`match: ${match}`);
          return <span id="title_name">{match}</span>;
        })}
        &nbsp;
      </span>
    ));
  };

  return (
    <Layout>
      <Container className="intro-container h-100" fluid>
        <Row className="justify-content-md-center align-items-center">
          <Col className="title">{parseTitle()}</Col>
        </Row>

        <Row className="justify-content-md-center align-items-center">
          <Col className="paragraphs">
            <Paragraphs parseParagraphForLinks={parseParagraphForLinks} />
          </Col>
        </Row>

        <Row className="justify-content-md-center align-items-center">
          <Col className="logos-section">
            {externalLinks.map(link => (
              <ExternalLink
                url={link.URL}
                logoUrl={link.Logo[0].url}
                text={link.Text}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Introduction;
