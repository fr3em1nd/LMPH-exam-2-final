<script>
  import { onMount } from 'svelte';
  import { employees, fetchEmployees,deleteEmployee,fetchEmployee } from './stores.js';
  import { push } from 'svelte-spa-router';
 
  onMount( () => {
 
    fetchEmployees()

});
</script>

<table border=1>
  <thead>
    <tr>
      <th>Name</th>
      <th>Primary Address</th>
      <th>Primary Contact Info</th>
      <th>Age</th>
      <th># of years in the company</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {#each $employees as employee (employee.id)}
      <tr>
        <td>{employee.firstName} {employee.lastName}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td> 
          <button 
          on:click={() => {
          deleteEmployee(employee.id);
          }}>Delete
          </button>
          <button 
          on:click={() => {
          fetchEmployee(employee.id);
          push('/edit-employees')
          }}>Edit
          </button>



        </td>
      </tr>
    {/each}
  </tbody>
</table>
