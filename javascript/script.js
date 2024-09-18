var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import DataApi from "./data.js";
const editPage = document.querySelector("#edit-page");
const mainPage = document.querySelector('#main-page');
const addScooter = document.querySelector('#add-scooter');
const tableBody = document.querySelector("#table-body");
const editScooter = document.querySelector('#edit-scooter');
const saveChanges = document.querySelector('#save-changes');
let orderFlag = true;
let editIndex = null;
const scooters = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield getAllScootersFromDB();
});
const displayScooter = () => __awaiter(void 0, void 0, void 0, function* () {
    tableBody.innerHTML = '';
    const scooters = yield DataApi.getAllScooters();
    if (scooters) {
        scooters.forEach((scooter) => {
            const row = document.createElement('tr');
            for (const element in scooter) {
                const td = document.createElement('td');
                td.textContent = scooter[element];
                row.appendChild(td);
            }
            const actionsCell = document.createElement('td');
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => removeScooter(scooter.id));
            actionsCell.appendChild(removeButton);
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', () => openEditForm(scooter.id));
            actionsCell.appendChild(editButton);
            row.appendChild(actionsCell);
            tableBody.appendChild(row);
        });
    }
});
function getAllScootersFromDB() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield DataApi.getAllScooters();
    });
}
function openEditForm(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const scooter = yield DataApi.getScooter(id);
        if (scooter) {
            document.querySelector('#edit-model').value = scooter.model;
            document.querySelector('#edit-batteryLevel').value = scooter.batteryLevel;
            document.querySelector('#edit-imageUrl').value = scooter.imageUrl;
            document.querySelector('#edit-color').value = scooter.color;
            document.querySelector('#edit-status').value = scooter.status;
        }
        const newScooter = {
            serialNumber: scooter.serialNumber,
            model: document.querySelector('#edit-model').value = scooter.model,
            batteryLevel: document.querySelector('#edit-batteryLevel').value = scooter.batteryLevel,
            imageUrl: document.querySelector('#edit-imageUrl').value = scooter.imageUrl,
            color: document.querySelector('#edit-color').value = scooter.color,
            status: document.querySelector('#edit-status').value = scooter.status,
        };
        saveChanges.addEventListener('click', () => DataApi.editScooter(id, newScooter));
        switchToEditPage();
    });
}
function removeScooter(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield DataApi.getAllScooters();
        displayScooter();
    });
}
function switchToEditPage() {
    mainPage.style.display = 'none';
    editPage.style.display = 'block';
}
function switchToMainPage() {
    mainPage.style.display = 'block';
    editPage.style.display = 'none';
}
window.onload = function () {
    displayScooter();
};
// const ex = async()=>{
// const print = await DataApi.addScooter({
//     serialNumber: Scooter.generateId(),
//     model: 'model 5',
//     batteryLevel: 23,
//     imageUrl: 'imageUrl 1',
//     color: 'color 1',
//     status: Status.available,
//   });
// console.log(print);
// }
// ex();
// const ex = async()=>{
// const print = await DataApi.editScooter("2", {
//     serialNumber: Scooter.generateId(),
//     model: 'model 7',
//     batteryLevel: 23,
//     imageUrl: 'imageUrl 1',
//     color: 'color 1',
//     status: Status.available,
//   });
// console.log(print);
// }
// ex();
// const ex = async()=>{
//     const print = await DataApi.deleteScooter("1");
//     console.log(print);
//     }
//     ex();
// const ex = async()=>{
//         const print = await DataApi.getAllScooters();
//         console.log(print);
//         }
//         ex();
// tableBody.innerHTML = ''; 
// const scooters = await DataApi.getAllScooters();
// if (scooters) {
//     scooters.forEach((scooter, index) => {
//     const row = document.createElement('tr');
//      for (const element in scooter) {
//         row.appendChild(addInTd(scooter[element]))
//     }
//      // Action buttons
//     const actionsCell = document.createElement('td');
//     // Remove button
//     const removeButton = document.createElement('button');
//     removeButton.textContent = 'Remove';
//     removeButton.addEventListener('click', () => removePersonnel(index));
//     actionsCell.appendChild(removeButton);
//     // Mission button (only if status isnt Retired)
//     if (person.status != 'Retired') {
//         const missionButton = document.createElement('button');
//         missionButton.textContent = 'Mission';
//         missionButton.addEventListener('click', () => startMission(index, missionButton));
//         actionsCell.appendChild(missionButton);
//     }
//     // Edit button
//     const editButton = document.createElement('button');
//     editButton.textContent = 'Edit';
//     editButton.addEventListener('click', () => openEditForm(index));
//     actionsCell.appendChild(editButton);
//     row.appendChild(actionsCell);
//     tableBody.appendChild(row);
// });
// static getAllScooters = async (): Promise<Scooter[] | void> => {
// const scooter:Scooter = new Scooter(
//     serialNumber: =  Scooter.generateId(),
//     model: 'model 5',
//     batteryLevel: 23,
//     imageUrl: 'imageUrl 1',
//     color: 'color 1',
//     status: Status.available,
// );
