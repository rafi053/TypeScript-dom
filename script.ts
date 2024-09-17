const url: string = "https://66e9433f87e417609448b1e3.mockapi.io/api/v1/Storeroom";


const  getData = async() => {
    // const name = document.querySelector("#name");
      const response = await fetch(url);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.error(error);
      }
    }
 
