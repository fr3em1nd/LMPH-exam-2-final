<script>
  import { onMount } from 'svelte';
  import { employees, fetchEmployees,deleteEmployee,fetchEmployee,userType } from './stores.js';
  import { calculateAge,calculateYearsMonthsHired } from './utils/string.js';
  import { push } from 'svelte-spa-router';
  import Swal from 'sweetalert2';
  onMount( () => {
    fetchEmployees()
    jQuery(document).ready(function() {
      new DataTable('#employeeListView');
	 })
});

if($userType===null){
    push('/');
  }

</script>

<div class="container mt-5">
<table id="employeeListView" class="table table-striped table-bordered display" style="width:100%">
 
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
        <td>{calculateAge(employee.birthDate)}</td>
        <td>{calculateYearsMonthsHired(employee.dateHired).years}y {calculateYearsMonthsHired(employee.dateHired).months}m</td>
        <td> 

          {#if $userType === 'Admin'}
          <button 
                    
          on:click={() => {
        Swal.fire({
        title: 'Are you sure?',
        text: "Delete Employee",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete!',
        }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'The employee has been deleted.',
          'success'
        )
        deleteEmployee(employee.id);

        }
        })

          }}>Delete
          </button>

          {/if}
          <button 
          on:click={() => {
            
          fetchEmployee(employee.id);
          push('/edit-employees')


          }}>{$userType ==='Standard'? 'View':'Edit'}
          </button>



        </td>
      </tr>
    {/each}
  </tbody>
</table>
 </div>