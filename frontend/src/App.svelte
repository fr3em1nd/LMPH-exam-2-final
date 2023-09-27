<!-- src/App.svelte -->
<script>
	import Login from './Login.svelte';
  
	let isLoggedIn = false;
  
	function handleLogin() {
	  isLoggedIn = true;
	}
  </script>
  
  {#if !isLoggedIn}
	<Login on:logged-in={handleLogin} />
  {:else}
	<h2>Welcome!</h2>
	<p>You're now logged in.</p>
  {/if}
  