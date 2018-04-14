const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');


const LogType = new GraphQLObjectType({
    name: 'Log',
    fields: () => ({
        ID: { type: GraphQLInt },
        activity_id: { type: GraphQLInt },
        status: { type: GraphQLInt },
        date: { type: GraphQLString },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString },

        activity: { type: ActivityType }
    })
});

const ActivityType = new GraphQLObjectType({
    name: 'Activity',
    fields: () => ({
        ID: { type: GraphQLInt },
        name: { type: GraphQLString },
        weight: { type: GraphQLInt },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString }
    })
});


module.exports = { LogType, ActivityType };