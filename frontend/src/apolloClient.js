// src/apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const client = new ApolloClient({
    link: new HttpLink({
      uri: 'http://localhost:4000',
      headers: {
        authorization: localStorage.getItem('authToken') || ""
      }
    }),
    cache: new InMemoryCache()
})  

 
