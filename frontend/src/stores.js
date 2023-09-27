import { writable } from 'svelte/store';
import { client } from './apolloClient';
import { gql } from '@apollo/client';

const initialState = [];
export const userType = writable(null);
export const employees = writable(initialState);
export const employee = writable(initialState);
export async function fetchEmployees() {
 
    const { data } = await client.query({
        query: gql`
          query GetEmployees {
            employees {
              id
              firstName
              lastName
              middleName
              birthDate
              gender
              maritalStatus
              position
              dateHired
            }
          },
        `,
        fetchPolicy: 'network-only' 
      });
      employees.set(data.employees); 
}


export async function login(username,password) {
    const { data } = await client.mutate({
      mutation: gql`
        mutation Login($username: String!, $password: String!) {
          login(username: $username, password: $password) {
            token
            type
          }
        }
      `,
      variables: { username, password }
    });

    // Save the token somewhere (e.g., in local storage) and use it for subsequent requests.
    localStorage.setItem('authToken', data.login.token);
    localStorage.setItem('userType', data.login.type);
    userType.set(data.login.type);
    console.log("data.login.type",data.login.type)
}

export async function fetchEmployee(employeeId) {
    const { data } = await client.query({
      query: gql`
        query GetEmployee($id: ID!) {
          employee(id: $id) {
            id
            firstName
            lastName
            middleName
            birthDate
            gender
            maritalStatus
            position
            dateHired
          }
        }
      `,
      fetchPolicy: 'network-only',
      variables: { id: employeeId }
    });
    employee.set(data.employee); 
  }

  export async function addAddress(employeeId,detail,detail2, isDefault) {
await client.mutate({
    mutation: gql`
      mutation AddAddressToEmployee($employeeId: String!, $detail: String!,  $detail2: String!, $isDefault: Boolean!) {
        addAddressToEmployee(employeeId: $employeeId, detail: $detail,detail2: $detail2, isDefault: $isDefault) 
        {
            employeeId
            detail
            detail2
            isDefault
        }
      }
    `,
    variables: {
        employeeId,
        detail,
        detail2, 
        isDefault
    }
  });
}

 
  export async function deleteEmployee(id) {
    await client.mutate({
      mutation: gql`
        mutation DeleteEmployee($id: ID!) {
          deleteEmployee(id: $id)
        }
      `,
      variables: { id }
    });
    await fetchEmployees();
  }

    
  export async function createEmployee(firstName,lastName,middleName,birthDate,gender,maritalStatus,position,dateHired) {
    await client.mutate({
      mutation: gql`
        mutation AddEmployee( $firstName: String!, $lastName: String!, $middleName: String!, $birthDate: String!, $gender: String!, $maritalStatus: String!, $position: String!, $dateHired: String!) {
          addEmployee( firstName: $firstName, lastName: $lastName,middleName: $middleName, birthDate: $birthDate, gender: $gender, maritalStatus: $maritalStatus, position: $position, dateHired: $dateHired) 
          {
            id
            firstName
            lastName
            middleName
            birthDate
            gender
            maritalStatus
            position
            dateHired
          }
        }
      `,
      variables: { firstName,lastName,middleName,birthDate,gender,maritalStatus,position,dateHired }
    });
    await fetchEmployees();
  }

  export async function updateEmployee(id, firstName, lastName, middleName, birthDate, gender, maritalStatus, position, dateHired) {
    await client.mutate({
        mutation: gql`
            mutation UpdateEmployee($id: ID!, $firstName: String!, $lastName: String!, $middleName: String!, $birthDate: String!, $gender: String!, $maritalStatus: String!, $position: String!, $dateHired: String!) {
                updateEmployee(id: $id, firstName: $firstName, lastName: $lastName, middleName: $middleName, birthDate: $birthDate, gender: $gender, maritalStatus: $maritalStatus, position: $position, dateHired: $dateHired) {
                    id
                    firstName
                    lastName
                    middleName
                    birthDate
                    gender
                    maritalStatus
                    position
                    dateHired
                }
            }
        `,
        variables: { id, firstName, lastName, middleName, birthDate, gender, maritalStatus, position, dateHired }
    });
    await fetchEmployees();
}
