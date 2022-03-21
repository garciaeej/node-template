import { ApolloServer } from "apollo-server-express";
import express from "express";
import { resolvers } from "./graphql/resolvers";
import { typeDefs } from "./graphql/typeDefs";

const app = express()

app.get("/",(req,res)=> res.send('Welcome to my graphql api'))

async function start() {
    const apolloServer = new ApolloServer({        
        typeDefs,
        resolvers})
    
    await apolloServer.start()

    await apolloServer.applyMiddleware({app})

    app.use("*", (req,res)=> res.status(404).send("Not Found"))

    app.listen(3000, ()=>{
        console.log("Server is run on port 3000")
    })
}

start()