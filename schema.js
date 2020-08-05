const { users }  = require("./data.js")
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');


// Root Query



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
                for (let i = 0; i < users.length; i++) {
                   if (users[i].id === args.id) {
                       return users[i]
                   }
                }
            }
        }
    }
});



module.exports = new GraphQLSchema({
    query: RootQuery
});