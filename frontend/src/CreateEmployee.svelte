<script>
  
    import {  createEmployee } from './stores.js';
    import { push } from 'svelte-spa-router';
let firstName  = '';
let lastName = '';
let middleName = '';
let birthDate = '';
let gender = '';
let maritalStatus = '';
let position = '';
let dateHired = '';
 

  </script>
 
 

  <div class="container mt-5">
    
        <!-- First Name -->
        <div class="form-group">
            <label for="firstName">First Name:</label>
            <input  bind:value={firstName} type="text" class="form-control" id="firstName" name="firstName" placeholder="Enter First Name">
        </div>

        <!-- Last Name -->
        <div class="form-group">
            <label for="lastName">Last Name:</label>
            <input  bind:value={lastName} type="text" class="form-control" id="lastName" name="lastName" placeholder="Enter Last Name">
        </div>

        <!-- Middle Name -->
        <div class="form-group">
            <label for="middleName">Middle Name:</label>
            <input bind:value={middleName} type="text" class="form-control" id="middleName" name="middleName" placeholder="Enter Middle Name">
        </div>

        <!-- Birth Date -->
        <div class="form-group">
            <label for="birthDate">Birth Date:</label>
            <input bind:value={birthDate} type="date" class="form-control" id="birthDate" name="birthDate">
        </div>

        <!-- Gender -->
        <div class="form-group">
            <label for="gender">Gender:</label>
            <select bind:value={gender} class="form-control" id="gender" name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>

        <!-- Marital Status -->
        <div class="form-group">
            <label for="maritalStatus">Marital Status:</label>
            <select  bind:value={maritalStatus} class="form-control" id="maritalStatus" name="maritalStatus">
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
            </select>
        </div>

        <!-- Position -->
        <div class="form-group">
            <label for="position">Position:</label>
            <input bind:value={position} type="text" class="form-control" id="position" name="position" placeholder="Enter Position">
        </div>

        <!-- Date Hired -->
        <div class="form-group">
            <label for="dateHired">Date Hired:</label>
            <input  bind:value={dateHired} type="date" class="form-control" id="dateHired" name="dateHired">
        </div>

        <!-- Submit Button -->
        <button on:click={()=>{
            
          


            Swal.fire({
        title: 'Are you sure?',
        text: "Proceed Creating the Employee?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        }).then(async (result) => {
        if (result.isConfirmed) {
        Swal.fire(
        'Created!',
        'The employee has been created.',
        'success'
        )
        await createEmployee(firstName,lastName,middleName,birthDate,gender,maritalStatus,position,dateHired)}

        await push('/employees');
        })
    
    }
        
        } class="btn btn-primary">Submit</button>
    
</div>
