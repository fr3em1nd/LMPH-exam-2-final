<script>
 import { userType,deleteEmployee,employee } from './stores.js';
 import { push } from 'svelte-spa-router';
</script>
  
 
  
  

      <div class="container mt-5">
        <h2> {#if $userType === 'Admin'}Edit{:else}View{/if} Employee: {$employee.firstName} {$employee.lastName}</h2>
        <!-- First Name -->
        <div class="form-group">
            <label for="firstName">First Name:</label>
            <input disabled={$userType === 'Standard'}  bind:value={$employee.firstName} type="text" class="form-control" id="firstName" name="firstName" placeholder="Enter First Name">
        </div>

        <!-- Last Name -->
        <div class="form-group">
            <label for="lastName">Last Name:</label>
            <input disabled={$userType === 'Standard'} bind:value={$employee.lastName} type="text" class="form-control" id="lastName" name="lastName" placeholder="Enter Last Name">
        </div>

        <!-- Middle Name -->
        <div class="form-group">
            <label for="middleName">Middle Name:</label>
            <input disabled={$userType === 'Standard'} bind:value={$employee.middleName} type="text" class="form-control" id="middleName" name="middleName" placeholder="Enter Middle Name">
        </div>

        <!-- Birth Date -->
        <div class="form-group">
            <label for="birthDate">Birth Date:</label>
            <input disabled={$userType === 'Standard'} bind:value={$employee.birthDate} type="date" class="form-control" id="birthDate" name="birthDate">
        </div>

        <!-- Gender -->
        <div class="form-group">
            <label for="gender">Gender:</label>
            <select disabled={$userType === 'Standard'} bind:value={$employee.gender} class="form-control" id="gender" name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>

        <!-- Marital Status -->
        <div class="form-group">
            <label for="maritalStatus">Marital Status:</label>
            <select disabled={$userType === 'Standard'} bind:value={$employee.maritalStatus} class="form-control" id="maritalStatus" name="maritalStatus">
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
            </select>
        </div>

        <!-- Position -->
        <div class="form-group">
            <label for="position">Position:</label>
            <input disabled={$userType === 'Standard'} bind:value={$employee.position} type="text" class="form-control" id="position" name="position" placeholder="Enter Position">
        </div>

        <!-- Date Hired -->
        <div class="form-group">
            <label for="dateHired">Date Hired:</label>
            <input disabled={$userType === 'Standard'}  bind:value={$employee.dateHired} type="date" class="form-control" id="dateHired" name="dateHired">
        </div>

        <!-- Submit Button -->
        <button  disabled={$userType === 'Standard'} class="btn btn-primary">Save Changes</button>
         
        {#if $userType === 'Admin'}
        <button 
        class="btn btn-warning"
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
      deleteEmployee($employee.id);
      push('/employees')
      }
      })

        }}>Delete
        </button>

        {/if}

    
</div>



 