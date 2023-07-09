const fetch = require('node-fetch');

export async function fetchCars(){
      const headers = {
        headers: {
            'X-RapidAPI-Key': '3d60fa0d1cmsh7a994393c5af280p1c13f7jsn3311a51dc811',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
          } 
      }

      const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {
        headers: headers,
      }); 

      const result = await response.json();

   return result;   
}