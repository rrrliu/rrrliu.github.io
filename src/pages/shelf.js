import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ShelfPage = () => (
  <Layout>
    <SEO title="Shelf" />
    <h1>Shelf</h1>
    <p>Coming soon!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default ShelfPage;
