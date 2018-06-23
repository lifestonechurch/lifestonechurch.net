import React from 'react';
import DevotionalCard from '../../components/DevotionalCard';
import Breadcrumbs from '../../components/Breadcrumbs';

const title = 'Devotionals';

const Page = ({ data }) => {
  const sermons = data.allContentfulPost.edges;

  return (
    <div>
      <Breadcrumbs
        path={[{ title: 'Home', url: '/' }, { title: 'Resources' }]}
        title={title}
      />
      <h1>{title}</h1>

      {sermons.map(({ node }) => (
        <DevotionalCard
          key={node.id}
          linkTo={`resources/devotionals/${node.fields.slug}`}
          title={node.title}
          date={node.date}
          author={node.author.map(a => a.name).join(', ')}
        />
      ))}
    </div>
  );
};

export default Page;

export const query = graphql`
  query DevotionalsQuery {
    allContentfulPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          id
          fields {
            slug
          }
          title
          author {
            name
          }
          date
          description
        }
      }
    }
  }
`;
