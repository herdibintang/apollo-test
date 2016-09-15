import { Meteor } from 'meteor/meteor';

import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from '../imports/api/schema';
import resolvers from '../imports/api/resolvers';


Meteor.startup(() => {
	const schema = makeExecutableSchema({
		typeDefs,
		resolvers,
	});
	createApolloServer({
		schema,
	});
});
