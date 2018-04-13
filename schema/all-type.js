const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');


const ActivityType = new GraphQLObjectType({
    name: 'Activity',
    fields: () => ({
        ID: { type: GraphQLInt },
        name: { type: GraphQLString },
        status: { type: GraphQLInt },
        date: { type: GraphQLString },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString }
    })
});


module.exports = { ActivityType };