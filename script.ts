import DataApi from "./data.js";
import Scooter from "./scooter.js";

const editPage = document.querySelector("#edit-page") as HTMLDivElement;
const mainPage = document.querySelector('#main-page') as HTMLDivElement;
const addScooter = document.querySelector('#add-scooter') as HTMLFormElement;
const tableBody = document.querySelector("#table-body") as HTMLTableSectionElement;
const editScooter = document.querySelector('#edit-scooter') as HTMLFormElement;
const saveChanges = document.querySelector('#save-changes') as HTMLFormElement;



let orderFlag:boolean = true;
let editIndex: string |null = null;
const scooters = async (): Promise<Scooter[] | void> => {
   return await getAllScootersFromDB()
};


const displayScooter = async () => {
    tableBody.innerHTML = '';
    const scooters: any= await DataApi.getAllScooters();
    if (scooters) {
        scooters.forEach((scooter:any) => {
            const row = document.createElement('tr') as HTMLTableRowElement;
            for (const element in scooter) {
                const td = document.createElement('td') as HTMLTableCellElement;
                td.textContent = scooter[element];
                row.appendChild(td)
            }
            const actionsCell = document.createElement('td') as HTMLTableCellElement;
            const removeButton = document.createElement('button') as HTMLButtonElement;
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
    

       
}


async function  getAllScootersFromDB () {
    
    return await DataApi.getAllScooters();

}





async function openEditForm(id:string) :Promise<void>{

    const scooter: any = await DataApi.getScooter(id);
    if(scooter){
    

        (document.querySelector('#edit-model') as HTMLInputElement).value = scooter.model;
        (document.querySelector('#edit-batteryLevel')as HTMLInputElement).value = scooter.batteryLevel;
        (document.querySelector('#edit-imageUrl')as HTMLInputElement).value = scooter.imageUrl;
        (document.querySelector('#edit-color')as HTMLInputElement).value = scooter.color;
        (document.querySelector('#edit-status')as HTMLInputElement).value = scooter.status;
    }
    const newScooter = {
            serialNumber: scooter.serialNumber,
            model: (document.querySelector('#edit-model') as HTMLInputElement).value = scooter.model,
            batteryLevel: (document.querySelector('#edit-batteryLevel')as HTMLInputElement).value = scooter.batteryLevel,
            imageUrl: (document.querySelector('#edit-imageUrl')as HTMLInputElement).value = scooter.imageUrl,
            color: (document.querySelector('#edit-color')as HTMLInputElement).value = scooter.color,
            status: (document.querySelector('#edit-status')as HTMLInputElement).value = scooter.status,
           
          };
    saveChanges.addEventListener('click', () => DataApi.editScooter(id, newScooter))



    switchToEditPage(); 
}


async function removeScooter(id:string):Promise<void> {
    await DataApi.getAllScooters(); 
    displayScooter(); 
}









function switchToEditPage():void {
    mainPage.style.display = 'none';
    editPage.style.display = 'block';
}
function switchToMainPage():void {
    mainPage.style.display = 'block';
    editPage.style.display = 'none';
}

window.onload = function() {
    displayScooter(); 
}




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

