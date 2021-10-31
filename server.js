const express = require('express');
const {ApolloServer,gql} = require('apollo-server-express');
const app = express();
const PORT = 5000;

const mongoose = require('mongoose');
const { defaultTypeResolver } = require('graphql');
require('dotenv').config({path:'variables.env'});

const Blog = require('./Schemas/Blog');
const Users = require('./Schemas/Users');

const typeDefs = gql`

       type Blog {

         title: String!
         author: String
         body: String
         



        }
       type Users {
         Username:String
         Password: String
         Email: String


        }
        

        type Query  {
        showAllBlogs: [Blog]
         }

         
        `

    const resolvers = {  
        
        
    }



mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true})
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useCreateIndex: true



})
         .then(() => console.log ('connected to Mongoose database'))
         .catch(err => console.error(err));

    const apolloServer = async(typeDefs,resolvers) => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: {
            Blog,
            Users
        }


    });






 await server.start();
 server.applyMiddleware({ app,path:"/" });


  app.listen(PORT|| 5000,() =>{
      console.log("I am listening")
  
       console.log(` Server ready at http://localhost:5000${server.graphqlPath}`)

  });
}

apolloServer(typeDefs,resolvers);