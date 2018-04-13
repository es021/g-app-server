//import all type
const { ActivityType } = require('./all-type.js');
const { ActivityExec } = require('../model/activity-query.js');
const graphqlFields = require('graphql-fields');
const DB = require('../model/DB.js');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');


//------------------------------------------------------------------------------
// START CREATE FIELDS
var fields = {};

fields["activities"] = {
    type: new GraphQLList(ActivityType),
    args: {
        name: { type: GraphQLString },
        date: { type: GraphQLString },
        status: { type: GraphQLInt },
        order_by: { type: GraphQLString }
    },
    resolve(parentValue, arg, context, info) {
        return ActivityExec.activities(arg, graphqlFields(info));
    }
};


//------------------------------------------------------------------------------
// EXPORT TYPE
//Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: fields
});
module.exports = { RootQuery };
