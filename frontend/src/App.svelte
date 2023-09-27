 

  <script>
 
	 import Router,{ push } from 'svelte-spa-router';
	import { userType } from './stores.js';
	import Login from './Login.svelte';
	import EmployeeList from './EmployeeList.svelte';
	import EditEmployee from './EditEmployee.svelte';
	import { employees, fetchEmployees,deleteEmployee } from './stores.js';
  import CreateEmployee from './CreateEmployee.svelte';


   const routes = {
    '/': Login,
    '/employees': EmployeeList,
    '/edit-employees': EditEmployee,
 
    '/create': CreateEmployee,
  }

  let LocalUserType = localStorage.getItem('userType');

  if(LocalUserType){
	userType.set(LocalUserType); // set local user if defined.
  }

	function logout() {
	  localStorage.removeItem('authToken');
	  localStorage.removeItem('userType');
	  userType.set(null);
	  push('#/')
	}
  </script>
  
  <nav>
	{#if $userType}
	  <button on:click={logout}>Logout</button>
	{/if}
	{#if $userType === 'Standard'}
	<button on:click={() => push('/employees')}>View Employees</button>
	{/if}
	{#if $userType === 'Admin'}
	<a href="#/create">Add Employee</a>
 
	<a href="#/employees"> View Employees</a>
	{/if}

 
	
  </nav>

  <Router {routes} />