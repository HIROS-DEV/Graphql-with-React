const { ApolloServer, gql } = require('apollo-server');
const { mainCards, animals, categories } = require('./db');
const typeDefs = require('./schema');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const Category = require('./resolvers/Category');
const Animal = require('./resolvers/Animal');

const server = new ApolloServer({
	typeDefs,
	resolvers: {
        Query,
        Mutation,
		Category,
		Animal,
    },
    context: {
        mainCards,
        animals,
        categories
    }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
