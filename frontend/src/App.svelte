<script>
import Router,{ push } from 'svelte-spa-router';
import { userType } from './stores.js';
import Login from './Login.svelte';
import EmployeeList from './EmployeeList.svelte';
import EditEmployee from './EditEmployee.svelte';
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

	if($userType===''){
		push('#/')
	}
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
	<div class="container">
		<a class="navbar-brand" href="/">SPA</a>
	 
	 
		 
		<div class=" " id="navbarNav">
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link" href="/">Home</a>
				</li>

				{#if $userType === "Admin"}
					<li class="nav-item">
						<a class="nav-link" href="#/create">Add Employee</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#/employees">
							View Employees</a
						>
					</li>
				{/if}

				<li class="nav-item">
					{#if $userType === "Standard"}
						<!-- svelte-ignore a11y-missing-attribute -->
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<a
							class="nav-link"
							on:click={() => push("/employees")}
							>View Employees</a
						>
					{/if}
				</li>
				<li class="nav-item">
					{#if $userType}
				 
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-missing-attribute -->
						<a class="nav-link" on:click={()=>{
							logout()
							}}>Logout</a>
					{/if}
				</li>
			</ul>
		</div>
	</div>
</nav>

<Router {routes} />
