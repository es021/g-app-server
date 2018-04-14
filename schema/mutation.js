//import all type
const { LogType, ActivityType } = require('./all-type.js');
const { LogExec } = require('../model/log-query.js');
const { ActivityExec } = require('../model/activity-query.js');

const graphqlFields = require('graphql-fields');
const DB = require('../model/DB.js');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLFloat,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');


//------------------------------------------------------------------------------
// START CREATE FIELDS
var fields = {};

/*******************************************/
/* log ******************/
fields["add_log"] = {
    type: LogType,
    args: {
        activity_id: { type: new GraphQLNonNull(GraphQLInt) },
        status: { type: new GraphQLNonNull(GraphQLInt) },
        date: { type: new GraphQLNonNull(GraphQLInt) }
    },
    resolve(parentValue, arg, context, info) {
        return DB.insert(LogExec.TABLE, arg).then(function (res) {
            return res;
        });
    }
};

fields["edit_log"] = {
    type: LogType,
    args: {
        ID: { type: new GraphQLNonNull(GraphQLInt) },
        status: { type: new GraphQLNonNull(GraphQLInt) }
    },
    resolve(parentValue, arg, context, info) {
        return DB.update(LogExec.TABLE, arg).then(function (res) {
            return res;
        });
    }
};

fields["delete_log"] = {
    type: GraphQLInt,
    args: {
        ID: { type: new GraphQLNonNull(GraphQLInt) }
    },
    resolve(parentValue, arg, context, info) {
        return DB.delete(LogExec.TABLE, arg.ID);
    }
};


/*******************************************/
/* activity ******************/
fields["add_activity"] = {
    type: ActivityType,
    args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        weight: { type: new GraphQLNonNull(GraphQLInt) }
    },
    resolve(parentValue, arg, context, info) {
        return DB.insert(ActivityExec.TABLE, arg).then(function (res) {
            return res;
        });
    }
};

fields["edit_activity"] = {
    type: ActivityType,
    args: {
        ID: { type: new GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLString },
        weight: { type: GraphQLInt }
    },
    resolve(parentValue, arg, context, info) {
        return DB.update(ActivityExec.TABLE, arg).then(function (res) {
            return res;
        });
    }
};

fields["delete_activity"] = {
    type: GraphQLInt,
    args: {
        ID: { type: new GraphQLNonNull(GraphQLInt) }
    },
    resolve(parentValue, arg, context, info) {
        return DB.delete(ActivityExec.TABLE, arg.ID);
    }
};


//------------------------------------------------------------------------------
// EXPORT TYPE
//Mutations
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: fields
});


module.exports = { Mutation };