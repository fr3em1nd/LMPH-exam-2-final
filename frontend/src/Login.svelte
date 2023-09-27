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
 if(data.login.type){
  localStorage.setItem('userType', data.login.type);
    userType.set(data.login.type);
    push('/employees');
 }
  
  }

  if($userType){
    push('/employees');
  }
</script>

<div class="container">
  <div class="row justify-content-center align-items-center vh-100">
    <div class="col-md-4" />
    <div class="col-md-4">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title text-center">Login</h4>

          <div class="form-group">
            <label for="email">Username:</label>
            <input
              bind:value={username}
              type="text"
              class="form-control"
              id="text"
              placeholder="Enter Username"
              name="username"
              required
            />
          </div>
          <div class="form-group">
            <label for="pwd">Password:</label>
            <input
              type="password"
              bind:value={password}
              class="form-control"
              id="pwd"
              placeholder="Enter password"
              name="password"
              required
            />
          </div>

          <button
            type="button"
            on:click={login}
            class="btn btn-primary btn-block">Login</button
          >
        </div>
      </div>
    </div>
    <div class="col-md-4" />
  </div>
</div>
