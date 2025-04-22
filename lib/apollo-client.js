import { ApolloClient, InMemoryCache } from '@apollo/client'

export function createApolloClient() {
  return new ApolloClient({
    uri: 'https://api-ap-northeast-1.hygraph.com/v2/clwassbua00l508w1n2ri3b78/master',
    cache: new InMemoryCache(),
  })
} 