// Select form elements and table
const addPersonnelForm = document.querySelector('#add-personnel-form');
const personnelTable = document.querySelector('#personnel-table');
const editPage = document.querySelector("#editpage") || document.getElementById("editpage");
const mainPage = document.querySelector('#mainpage');
const editPersonnelForm = document.querySelector('#edit-personnel-form');
let orderflag = true;



// Initialize personnel data (from localStorage or empty array)
let personnel = JSON.parse(localStorage.getItem('personnel')) || [];
// Variable to track the index of personnel being edited
let editIndex = null;
function addingtd(value)
{
    const element = document.createElement('td');
    element.textContent = value;
    return element
}
// Function to display personnel in the table
const displayPersonnel = () => {
    personnelTable.innerHTML = ''; // Clear existing table rows
    personnel.forEach((person, index) => {
        const row = document.createElement('tr');
        
        for (const element in person) {
            if(element != 'missionLength')
            row.appendChild(addingtd(person[element]))
        }


        // Action buttons
        const actionsCell = document.createElement('td');
        
        // Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removePersonnel(index));
        actionsCell.appendChild(removeButton);

        // Mission button (only if status isnt Retired)
        if (person.status != 'Retired') {
            const missionButton = document.createElement('button');
            missionButton.textContent = 'Mission';
            missionButton.addEventListener('click', () => startMission(index, missionButton));
            actionsCell.appendChild(missionButton);
        }

        // Edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => openEditForm(index));
        actionsCell.appendChild(editButton);
        
        row.appendChild(actionsCell);
        personnelTable.appendChild(row);
    });
}

// Add new personnel
addPersonnelForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const fullName = document.querySelector('#full-name').value;
    const rank = document.querySelector('#rank').value;
    const position = document.querySelector('#position').value;
    const platoon = document.querySelector('#platoon').value;
    const status = document.querySelector('#status').value;
    const missionLength = document.querySelector("#missionLength").value;

    // Ensure all fields are filled in
    if (!fullName || !rank || !position || !platoon || !status || !missionLength) {
        alert("Please fill in all fields.");
        return;
    }

    // Add new person to personnel array
    personnel.push({ fullName, rank, position, platoon, status,missionLength });

    saveToLocalStorage(); // Save personnel data to localStorage
    displayPersonnel(); // Refresh the table
    addPersonnelForm.reset(); // Clear the form
});

// Remove personnel from the table
function removePersonnel(index) {
    personnel.splice(index, 1); // Remove from array
    saveToLocalStorage(); // Save updated personnel data
    displayPersonnel(); // Refresh the table
}

// Function to start mission countdown
function startMission(index, missionButton) {
    let countdown = personnel[index].missionLength || 10; // Use custom mission length or default to 10
    let countdownInterval;

    // Disable the button and start countdown
    missionButton.disabled = true;
    missionButton.textContent = `Mission (${countdown})`;

    countdownInterval = setInterval(() => {
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            missionButton.textContent = 'Mission Completed';
            missionButton.disabled = false; // Re-enable button after mission is completed
        } else {
            missionButton.textContent = `Mission (${countdown})`;
            countdown--;
        }
    }, 1000);
}

// Open the edit form and load the selected personnel data
function openEditForm(index) {
    editIndex = index;
    const person = personnel[index];

    document.querySelector('#edit-full-name').value = person.fullName;
    document.querySelector('#edit-rank').value = person.rank;
    document.querySelector('#edit-position').value = person.position;
    document.querySelector('#edit-platoon').value = person.platoon;
    document.querySelector('#edit-status').value = person.status;
    document.querySelector('#edit-missionLength').value = person.missionLength || '';

    switchToEditPage(); // Switch to edit form view
}

// Save changes made to personnel
editPersonnelForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const fullName = document.querySelector('#edit-full-name').value;
    const rank = document.querySelector('#edit-rank').value;
    const position = document.querySelector('#edit-position').value;
    const platoon = document.querySelector('#edit-platoon').value;
    const status = document.querySelector('#edit-status').value;
    const missionLength = document.querySelector('#edit-missionLength').value;

    // Update personnel array with edited data
    personnel[editIndex] = { fullName, rank, position, platoon, status, missionLength };

    saveToLocalStorage(); // Save updated personnel data
    displayPersonnel(); // Refresh the table
    switchToMainPage(); // Switch back to main view
});

// Save the personnel array to localStorage
function saveToLocalStorage() {
    localStorage.setItem('personnel', JSON.stringify(personnel));
}

// Function to switch to edit page
function switchToEditPage() {
    mainPage.style.display = 'none';
    editPage.style.display = 'block';
}

// Function to switch to main page
function switchToMainPage() {
    mainPage.style.display = 'block';
    editPage.style.display = 'none';
}

// Load personnel data from localStorage when the page loads
window.onload = function() {
    displayPersonnel(); // Display personnel data
}
function orderByName() {
    if (orderflag) {
        personnel.sort((a, b) => a.fullName.localeCompare(b.fullName)); // Ascending
    } else {
        personnel.sort((a, b) => b.fullName.localeCompare(a.fullName)); // Descending
    }

    orderflag = !orderflag; // Toggle order flag for next sort
    saveToLocalStorage();
    displayPersonnel(); // Refresh the table after sorting
}