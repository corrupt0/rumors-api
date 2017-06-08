import { GraphQLString } from 'graphql';

import Article from 'graphql/models/Article';

export default {
  type: Article,
  args: {
    id: { type: GraphQLString },
  },
  resolve: async (rootValue, { id }, { loaders }) =>
    loaders.docLoader.load({ index: 'data', type: 'articles', id }),
};
