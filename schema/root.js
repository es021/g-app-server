//import all type
const { LogType, ActivityType } = require('./all-type.js');
const { LogExec } = require('../model/log-query.js');
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

fields["logs"] = {
    type: new GraphQLList(LogType),
    args: {
        activity_id: { type: GraphQLInt },
        date: { type: GraphQLInt },
        month: { type: GraphQLInt },
        year: { type: GraphQLInt },
        status: { type: GraphQLString },
        order_by: { type: GraphQLString },
        page: { type: GraphQLInt },
        offset: { type: GraphQLInt },
    },
    resolve(parentValue, arg, context, info) {
        return LogExec.logs(arg, graphqlFields(info));
    }
};


fields["activities"] = {
    type: new GraphQLList(ActivityType),
    args: {
        name: { type: GraphQLInt },
        order_by: { type: GraphQLString }
    },
    resolve(parentValue, arg, context, info) {
        return ActivityExec.activities(arg, graphqlFields(info));
    }
};

fields["activity"] = {
    type: ActivityType,
    args: {
        ID: { type: new GraphQLNonNull(GraphQLInt) }
    },
    resolve(parentValue, arg, context, info) {
        return ActivityExec.activities(arg, graphqlFields(info), { single: true });
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
