import { createPage } from 'soya-next';
import { urlShape } from 'soya-next/prop-types';
import Layout from '../components/Layout/Layout';

const PostPage = ({ url }) => (
  <Layout>
    <h1>{url.query.title || url.query.id}</h1>
    <p>This is the blog post content.</p>
  </Layout>
);

PostPage.propTypes = {
  url: urlShape.isRequired,
};

export default createPage()(PostPage);