import { carProps } from '@/types';
import fetch from 'node-fetch';


export async function fetchCars(){
      const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera', {
        headers: {
            'X-RapidAPI-Key': '3d60fa0d1cmsh7a994393c5af280p1c13f7jsn3311a51dc811',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
          },
      }); 

      const result = await response.json();

   return result;   
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };

  export const generateCarImageUrl = (car: carProps, angle? : string) => {
    
  }