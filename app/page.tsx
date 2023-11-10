"use client"

import Hero from '@/components/Hero'
import Image from 'next/image'
import SearchBar from '@/components/SearchBar'
import CustomFilter from '@/components/CustomFilter'
import { fetchCars } from '@/utils'
import CarCard from '@/components/CarCard'
import { fuels, yearsOfProduction } from '@/constants'
import ShowMore from '@/components/showMore'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function Home() {
const [allCars, setAllCars] = useState([]);
const [loading, setLoading] = useState(false);

//Search states

const [manufacturer, setManufacturer] = useState('');
const [model, setmodel] = useState('');

//filter states
const [fuel, setFuel] = useState("");
const [year, setYear] = useState(2020);

//pagination
const [limit, setLimit] = useState(10);

const getCars = async () => {

  setLoading(true);
  
  try {
    const result = await fetchCars({
      manufacturer: manufacturer || '',
      year: year || 2022,
      fuel: fuel || '',
      limit: limit || 10,
      model: model || '',
    });
  
    setAllCars(result);
} catch (error) {
  console.error(error);
} finally {
  setLoading(false);
}

}

useEffect(() => {
  getCars();
  
}, [manufacturer, fuel, year, limit, model]);

  return (
    <main className="overflow-hidden ">
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Pick your rental!
          </h1>
          <p>Explore your make and model below.</p>

          <div className="home__filters">
            <SearchBar setManufacturer={setManufacturer} setModel={setmodel}/>
            <div className="home__filter-container">
              <CustomFilter options={fuels} setFilter={setFuel}/>
              <CustomFilter options={yearsOfProduction} setFilter={setYear}/>
            </div>
          </div>.

          {allCars.length > 0 ? (
            <section>
              <div className="home__cars-wrapper">
                {allCars?.map((car) => (
                  <CarCard car={car} />
                )) }
                </div>

                 {loading && (
                  <div className="mt-16 w-full flex-center">
                    <Image src="/loader.svg" width={50} height={50} className="object-contain" alt={''}/>
                  </div>
                 )} 

                <ShowMore 
                pageNumber={limit / 10}
                isNext={limit > allCars.length}
                setLimit={setLimit}
                />
            </section>
          ): (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Oops, no results</h2>
              <p>{allCars?.message}</p>
            </div>
          )}

        </div>
      </div>
    </main>
  )
}
