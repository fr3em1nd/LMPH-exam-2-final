<script>
  import { userType } from './stores'
  import { client } from './apolloClient';
  import { gql } from '@apollo/client';
  import { push } from 'svelte-spa-router';
  let username = '';
  let password = '';

  async function login() {
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

    push('/employees');
  }
</script>

<input bind:value={username} placeholder="Username" />
<input type="password" bind:value={password} placeholder="Password" />
<button on:click={login}>Login</button>
