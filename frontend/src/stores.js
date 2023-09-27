import { writable } from 'svelte/store';
import { client } from './apolloClient';
import { gql } from '@apollo/client';

const initialState = [];

export const userType = writable(null);
export const employees = writable(initialState);
export const employee = writable(initialState);




// Function to fetch employees and set them in the store
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
            contacts {
              id
              detail
              isDefault
            }
            addresses {
              id
              detail
              detail2
              isDefault
            }
          }
        }
      `,
      fetchPolicy: 'network-only',
      variables: { id: employeeId }
    });
    employee.set(data.employee); 
  }

  export async function addAddress(employeeId,detail,detail2, isDefault) {
  const { data } = await client.mutate({
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