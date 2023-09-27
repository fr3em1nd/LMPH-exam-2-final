<script>
 import { userType,deleteEmployee,employee,updateEmployee } from './stores.js';
 import { push } from 'svelte-spa-router';
 import Swal from 'sweetalert2';

 

let LocalfirstName =$employee.firstName;
let LocallastName = $employee.lastName
let LocalmiddleName = $employee.middleName
let LocalbirthDate = $employee.birthDate
let Localgender = $employee.gender
let LocalmaritalStatus= $employee.maritalStatus
let Localposition= $employee.position
let LocaldateHired= $employee.dateHired


function handleInput(event) {
    switch (event.target.name) {
        case 'firstName':
        LocalfirstName = event.target.value;
        break;
        case 'lastName':
        LocallastName = event.target.value;
        break;
        case 'middleName':
        LocalmiddleName = event.target.value;
        break;
        case 'birthDate':
        LocalbirthDate = event.target.value;
        break;  
        case 'gender':
        Localgender = event.target.value;
        break;  
        case 'maritalStatus':
        LocalmaritalStatus = event.target.value;
        break;  
        case 'position':
        Localposition = event.target.value;
        break;  
        case 'dateHired':
        LocaldateHired = event.target.value;
        break;
    }
  }


  function addInputField() {
    inputCount++;

    const inputContainer = document.getElementById('inputContainer');

    // Create new input group
    const inputGroup = document.createElement('div');
    inputGroup.className = 'input-group mt-3';

    // Create new input element
    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.className = 'form-control';
    inputElement.placeholder = `Input ${inputCount}`;

    // Create input group append element (optional, for additional styling or buttons/icons)
    const inputGroupAppend = document.createElement('div');
    inputGroupAppend.className = 'input-group-append';

    // Create a button to remove the input field (optional)
    const removeButton = document.createElement('button');
    removeButton.className = 'btn btn-outline-danger';
    removeButton.innerText = 'X';
    removeButton.onclick = function() {
        inputContainer.removeChild(inputGroup);
    };

    // Append everything together
    inputGroupAppend.appendChild(removeButton);
    inputGroup.appendChild(inputElement);
    inputGroup.appendChild(inputGroupAppend);
    inputContainer.appendChild(inputGroup);
}

</script>

<div class="container mt-5">
    <h2>
        {#if $userType === "Admin"}Edit{:else}View{/if} Employee: {$employee.firstName}
        {$employee.lastName}
    </h2>
    <!-- First Name -->
    <div class="form-group">
        <label for="firstName">First Name:</label>

        <input
            on:input={handleInput}
            disabled={$userType === "Standard"}
            value={$employee.firstName}
            type="text"
            class="form-control"
            id="firstName"
            name="firstName"
            placeholder="Enter First Name"
        />
    </div>

    <!-- Last Name -->
    <div class="form-group">
        <label for="lastName">Last Name:</label>
        <input
            on:input={handleInput}
            disabled={$userType === "Standard"}
            value={$employee.lastName}
            type="text"
            class="form-control"
            id="lastName"
            name="lastName"
            placeholder="Enter Last Name"
        />
    </div>

    <!-- Middle Name -->
    <div class="form-group">
        <label for="middleName">Middle Name:</label>
        <input
            on:input={handleInput}
            disabled={$userType === "Standard"}
            value={$employee.middleName}
            type="text"
            class="form-control"
            id="middleName"
            name="middleName"
            placeholder="Enter Middle Name"
        />
    </div>

    <!-- Birth Date -->
    <div class="form-group">
        <label for="birthDate">Birth Date:</label>
        <input
            on:input={handleInput}
            disabled={$userType === "Standard"}
            value={$employee.birthDate}
            type="date"
            class="form-control"
            id="birthDate"
            name="birthDate"
        />
    </div>

    <!-- Gender -->
    <div class="form-group">
        <label for="gender">Gender:</label>
        <select
            on:input={handleInput}
            disabled={$userType === "Standard"}
            value={$employee.gender}
            class="form-control"
            id="gender"
            name="gender"
        >
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
    </div>

    <!-- Marital Status -->
    <div class="form-group">
        <label for="maritalStatus">Marital Status:</label>
        <select
            on:input={handleInput}
            disabled={$userType === "Standard"}
            value={$employee.maritalStatus}
            class="form-control"
            id="maritalStatus"
            name="maritalStatus"
        >
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
        </select>
    </div>

    <!-- Position -->
    <div class="form-group">
        <label for="position">Position:</label>
        <input
            on:input={handleInput}
            disabled={$userType === "Standard"}
            value={$employee.position}
            type="text"
            class="form-control"
            id="position"
            name="position"
            placeholder="Enter Position"
        />
    </div>

    <!-- Date Hired -->
    <div class="form-group">
        <label for="dateHired">Date Hired:</label>
        <input
            on:input={handleInput}
            disabled={$userType === "Standard"}
            value={$employee.dateHired}
            type="date"
            class="form-control"
            id="dateHired"
            name="dateHired"
        />
    </div>

        <!-- Contact Info -->
        <div class="form-group">
            <div class="row">
                <div class="col-12 mt-3">
                    <h3>Contact Info:</h3>
                </div>
                <div class="col-5">
                    <label for="details">Address 1:</label>
                    <input
                        disabled={$userType === "Standard"}
                        value={"test"}
                        type="text"
                        class="form-control"
                        id="details[]"
                        name="details[]"
                    />
                </div>
          
    
                <div class="col-2">
                    Primary?
                    <br />
                    <input
                    disabled={$userType === "Standard"}
                        class="form-check-input  mt-2"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                    />
                   
                </div>
            </div>
            <div class="row">
            <div class="col-12">

                <button  disabled={$userType === "Standard"} class='btn btn-info'>Update Contact Info</button>  <button  disabled={$userType === "Standard"} class='btn btn-info'>Add</button>
            </div>

            </div>
        </div>

    <!-- Address Info -->
    <div class="form-group">
        <div class="row">
            <div class="col-12 mt-3">
                <h3>Address Info:</h3>
            </div>
            <div class="col-5">
                <label for="details">Address 1:</label>
                <input
                    disabled={$userType === "Standard"}
                    value={"test"}
                    type="text"
                    class="form-control"
                    id="details[]"
                    name="details[]"
                />
            </div>
            <div class="col-5">
                <label for="details2">Address 2:</label>
                <input
                    disabled={$userType === "Standard"}
                    value={"test"}
                    type="text"
                    class="form-control"
                    id="details2[]"
                    name="details2[]"
                />
            </div>

            <div class="col-2">
                Primary?
                <br />
                <input
                disabled={$userType === "Standard"}
                    class="form-check-input  mt-2"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                />
                
                
            </div>
            
        </div>
        <div class="col-12">

            <button class='btn btn-info'  disabled={$userType === "Standard"}>Update Address Info</button>  <button  disabled={$userType === "Standard"} class='btn btn-info'>Add</button>
        </div>
    </div>

    <!-- Submit Button -->
    <button
        disabled={$userType === "Standard"}
        class="btn btn-primary mt-3"
        on:click={async () => {
            await updateEmployee(
                $employee.id,
                LocalfirstName || $employee.firstName,
                LocallastName || $employee.lastName,
                LocalmiddleName || $employee.middleName,
                LocalbirthDate || $employee.birthDate,
                Localgender || $employee.gender,
                LocalmaritalStatus || $employee.maritalStatus,
                Localposition || $employee.position,
                LocaldateHired || $employee.dateHired
            );
            Swal.fire("Employee Data updated!");
            push("/employees");

            LocalfirstName = null;
            LocallastName = null;
            LocalmiddleName = null;
            LocalbirthDate = null;
            Localgender = null;
            LocalmaritalStatus = null;
            Localposition = null;
            LocaldateHired = null;
        }}>Save Changes</button
    >

    {#if $userType === "Admin"}
        <button
            class="btn btn-warning mt-3"
            on:click={() => {
                Swal.fire({
                    title: "Are you sure?",
                    text: "Delete Employee",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete!"
                }).then(result => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            "Deleted!",
                            "The employee has been deleted.",
                            "success"
                        );
                        deleteEmployee($employee.id);
                        push("/employees");
                    }
                });
            }}
            >Delete
        </button>
    {/if}
</div>
