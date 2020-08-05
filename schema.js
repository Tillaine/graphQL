const { users }  = require("./data.js");
const axios = require("axios");
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
} = require('graphql');
const newComments = [];


// Root Query

const commentType = new GraphQLObjectType({
    name: "Comment",
    fields: () => ({
        id: {type: GraphQLInt},
        body: {type: GraphQLString},
        name: {type: GraphQLString},
    })
})

const userType = new GraphQLObjectType({
    name: "User", 
    fields: () => ({
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        username: {type: GraphQLString},
        email: {type: GraphQLString},
        phone: {type: GraphQLString},
        website: {type: GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType', 
    fields: {
        user: {
            type: userType, 
            args:{
                id:{type: GraphQLInt}
            }, 
            resolve(parentValue, args){
                return axios.get(`https://jsonplaceholder.typicode.com/users/${args.id}` )
                .then(res => {
                    console.log(res.data)
                    return res.data
                })
            }
        },
        users: {
            type: new GraphQLList(userType), 
            resolve(parentVaules, args){
                return axios.get(`https://jsonplaceholder.typicode.com/users/` )
                .then(res => {
                    return res.data
                })
            }
        }, 
        comments: {
            type: new GraphQLList(commentType),
            resolve(parentValue, args) {
                return axios.get(`https://jsonplaceholder.typicode.com/comments/` )
                .then(res => {
                    return res.data
                })
            }
        }
    }
});

const mutation = new GraphQLObjectType({
    name: 'Mutation', 
    fields: {
        addUser: {
            type: userType,
            args:{
                id: {type: new GraphQLNonNull(GraphQLInt)},
                body: {type: new GraphQLNonNull(GraphQLString)},
                name: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parentValue, args){
                commentObj = {
                    id: args.id,
                    body: args.body,
                    name: args.name
                }
                newComments.push(commentObj)
                console.log(newComments)
                return newComments
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery, 
    mutation
});