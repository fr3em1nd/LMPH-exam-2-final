<script>
   import { employee } from './stores.js';
 
 
  </script>
  
 
    <div class="employee-editor">
      <h2>Edit Employee: {$employee.firstName} {$employee.lastName}</h2>
      <label>
        First Name:
        <input bind:value={$employee.firstName} />
      </label>
      <label>
        Last Name:
        <input bind:value={$employee.lastName} />
      </label>
      <label>
        Middle Name:
        <input bind:value={$employee.middleName} />
      </label>

      <label>
        Birth Date:
        <input bind:value={$employee.birthDate} />
      </label>

      <label>
        Gender:
        <input bind:value={$employee.gender} />
      </label>

      <label>
        Marital Status:
        <input bind:value={$employee.maritalStatus} />
      </label>

      <label>
        Position:
        <input bind:value={$employee.position} />
      </label>

      <label>
        Date Hired:
        <input bind:value={$employee.dateHired} />
      </label>

  


      
      <h3>Contacts</h3>
      <ul>
  
      </ul>
      <button on:click={() => {
        console.log("add contact")
      }
    }>Add Contact</button>
      
      <h3>Addresses</h3>
      <ul>
   
      </ul>
      <button on:click={() => {
        console.log("add address");
      }}>Add Address</button>
  
      <button on:click={()=>{
        console.log("save changes")
      }}>Save Changes</button>
    </div>
 
  