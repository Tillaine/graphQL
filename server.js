const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema.js');
const Port = process.env.PORT || 5000;
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();




//allow cross origin
app.use(cors())

// use qraphQL
app.use('/graphql', graphqlHTTP({
    schema:schema,
    graphiql:true
}));

app.listen(Port, () => {
    console.log('Server is running on port 4000..');
});