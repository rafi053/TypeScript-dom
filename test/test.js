const addPersonnelForm = document.querySelector('.create-scooter');
const personnelTable = document.querySelector('#personnel-table');
const editPage = document.querySelector("#editpage") || document.getElementById("editpage");
const mainPage = document.querySelector('#mainpage');
const editPersonnelForm = document.querySelector('#edit-personnel-form');
let orderFlag = true;
let editIndex:null = null;
const addingtd = (value: string | number) : HTMLTableColElement =>
{
    const element = document.createElement('td') !;
    element.textContent = value ;
    return element
}
// Function to display personnel in the table
const displayScooter = () => void{
    personnelTable.innerHTML = ''; // Clear existing table rows
    personnel.forEach((person, index) => {
        const row = document.createElement('tr');
        row.appendChild(addingtd(person.fullName))
         row.appendChild(addingtd(person.rank))
        const positionCell = document.createElement('td');
        positionCell.textContent = person.position;
        row.appendChild(positionCell);
        const platoonCell = document.createElement('td');
        platoonCell.textContent = person.platoon;
        row.appendChild(platoonCell);
        const statusCell = document.createElement('td');
        statusCell.textContent = person.status;
        row.appendChild(statusCell);
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
    displayScooter(); // Refresh the table
    addPersonnelForm.reset(); // Clear the form
});
// Remove personnel from the table
function removePersonnel(index) {
    personnel.splice(index, 1); // Remove from array
    saveToLocalStorage(); // Save updated personnel data
    displayScooter(); // Refresh the table
}
// Open the edit form and load the selected personnel data
const openEditForm = (index: number) : void =>{
    editIndex = index;
    const scooter = personnel[index];
    document.querySelector('#model').value = person.fullName;
    document.querySelector('#batteryLevel').value = person.rank;
    document.querySelector('#imageUrl').value = person.position;
    document.querySelector('#color').value = person.platoon;
    document.querySelector('#status').value = person.status;
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
    displayScooter(); // Refresh the table
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

window.onload = function() {
    displayScooter(); 
}
// function orderByName() {
//     if (orderflag) {
//         personnel.sort((a, b) => a.fullName.localeCompare(b.fullName)); // Ascending
//     } else {
//         personnel.sort((a, b) => b.fullName.localeCompare(a.fullName)); // Descending
//     }
//     orderflag = !orderflag;
    
//     displayScooter(); 
// }