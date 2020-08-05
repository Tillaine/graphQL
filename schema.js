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
const id = 203;


// Root Query

const commentType = new GraphQLObjectType({
    name: "Comment",
    fields: () => ({
        id: {type: GraphQLInt},
        body: {type: GraphQLString},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        post: {type: GraphQLString},
    })
})

const userAddressType = new GraphQLObjectType({
    name: "Address",
    fields: () => ({
        street: {type: GraphQLString},
        suite: {type: GraphQLString},
        city: {type: GraphQLString},
        zipcode: {type: GraphQLString},
    })
})

const postType = new GraphQLObjectType({
    name: "Post",
    fields: () => ({
        id: {type: GraphQLInt},
        body: {type: GraphQLString},
        title: {type: GraphQLString},
        userId: {type: GraphQLString},
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
        comment: {
            type: new GraphQLList(commentType),
            args:{
                id:{type: GraphQLInt}
            }, 
            resolve(parentValue, args) {
                return axios.get(`https://jsonplaceholder.typicode.com/comments/${args.id}` )
                .then(res => {
                    return res.data
                })
            }
        }, 
        posts: {
            type: new GraphQLList(postType), 
            resolve(parentVaules, args){
                return axios.get(`https://jsonplaceholder.typicode.com/posts/` )
                .then(res => {
                    return res.data
                })
            }
        }, 
        postComments: {
            type: new GraphQLList(commentType),
            args:{
                id:{type: GraphQLInt}
            }, 
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
        updatePost: {
            type: postType,
            args:{
                id: {type: GraphQLInt},
                body: {type: GraphQLString},
                title: {type: GraphQLString},
                postId: {type: new GraphQLNonNull(GraphQLInt)}
            },
            resolve(parentValue, args){
                const postObj = args;
                delete postObj.postId;
                return axios.patch(`https://jsonplaceholder.typicode.com/posts/${args.postId}`, postObj)
                .then(res => res.data)
            }
        },
        deletePost: {
            type: userType,
            args:{
                id: {type: new GraphQLNonNull(GraphQLInt)},
            },
            resolve(parentValue, args){
                return axios.delete(`https://jsonplaceholder.typicode.com/posts/${args.id}`)
                .then(res => res.data)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery, 
    mutation
});