// index.js
const { ApolloServer, gql, AuthenticationError } = require('apollo-server');
const jwt = require('jsonwebtoken');
const SECRET = 'SOLOMON_AMAZING';
const typeDefs = gql`
  type User {
    id: ID!
    type: String!
    token: String!
  }
  type Employee {
    id: ID!
    name: String!
    position: String!
  }
  type Query {
    employees: [Employee]
    employee(id: ID!): Employee
  }
  type Mutation {
    addEmployee(name: String!, position: String!): Employee
    updateEmployee(id: ID!, name: String!, position: String!): Employee
    deleteEmployee(id: ID!): Boolean
    login(username: String!, password: String!): User
  }
`;

const employees = [
    // Sample employees here
];

const users = [
    { id: '1', username: 'admin', password: 'admin', type: 'Admin' },
    { id: '2', username: 'standard', password: 'standard', type: 'Standard' }
];


const resolvers = {
    Query: {
        employees: () => employees,
        employee: (_, { id }) => employees.find(emp => emp.id === id),
    },
    Mutation: {
        addEmployee: (_, { name, position }) => {
            const newEmployee = { id: Date.now().toString(), name, position };
            employees.push(newEmployee);
            return newEmployee;
        },
        updateEmployee: (_, { id, name, position }) => {
            const index = employees.findIndex(emp => emp.id === id);
            if (index !== -1) {
                employees[index] = { id, name, position };
                return employees[index];
            }
            return null;
        },
        deleteEmployee: (_, { id }) => {
            const index = employees.findIndex(emp => emp.id === id);
            if (index !== -1) {
                employees.splice(index, 1);
                return true;
            }
            return false;
        },
        login: (_, { username, password }) => {
            const user = users.find(u => u.username === username && u.password === password);
            if (!user) throw new AuthenticationError('Invalid credentials');

            const token = jwt.sign({ id: user.id, type: user.type }, SECRET);
            return { ...user, token };
        }
    }
}


const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
