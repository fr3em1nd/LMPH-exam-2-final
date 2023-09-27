<script>
  
    import {  createEmployee,addAddress } from './stores.js';
let id  = Math.floor(Math.random() * (999999999999 - 1 + 1) + 1);
let firstName  = '';
let lastName = '';
let middleName = '';
let birthDate = '';
let gender = '';
let maritalStatus = '';
let position = '';
let dateHired = '';
let detail = '';
let detail2 = '';
let isDefault = false;
 

  </script>
  
  <input bind:value={id} hidden/>
  <input bind:value={firstName} placeholder="First Name" />
  <input bind:value={lastName} placeholder="Last Name" />
  <input bind:value={middleName} placeholder="Middle Name" />
  <input bind:value={birthDate} placeholder="Birth Date" />
  <input bind:value={gender} placeholder="Gender" />
  <input bind:value={maritalStatus} placeholder="Marital Status" />
  <input bind:value={position} placeholder="Position" />
  <input bind:value={dateHired} placeholder="Date Hired" />


  <div class="add-address">
    <h3>Add Address to Employee</h3>
 
      <input type="text" bind:value={id} hidden />
   
    <label>
      Address 1 Detail:
      <input type="text" bind:value={detail} />
    </label>

    <label>
      Address 2 Detail:
      <input type="text" bind:value={detail2} />
    </label>
    
    <label>
      <input type="checkbox" bind:checked={isDefault} />
      Set as default
    </label>
    <button on:click={addAddress(id,detail, detail2,isDefault)}>Add Address</button>
  </div>




  <button on:click={createEmployee(id,firstName,lastName,middleName,birthDate,gender,maritalStatus,position,dateHired)}>Add Employee</button>
  