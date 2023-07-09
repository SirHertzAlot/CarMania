import Hero from '@/components/Hero'
import Image from 'next/image'
import SearchBar from '@/components/SearchBar'
import CustomFilter from '@/components/CustomFilter'
import { fetchCars } from '@/utils'

export default async function Home() {
 const allCars = await fetchCars(); 

console.log(allCars);

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
            <SearchBar />
            <div className="home__filter-container">
              <CustomFilter title="fuel" />
              <CustomFilter title="year" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
