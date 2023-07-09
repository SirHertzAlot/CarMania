'use client';

import Image from 'next/image';

import { searchManufacturerProps } from '@/types';
import { useState, Fragment } from 'react';
import { Combobox, Transition } from '@headlessui/react';

const SearchManufacturer = ({ manufacturer, setManufacturer}: searchManufacturerProps) => {
  const [query, setQuery] = useState('')  
  return (
    <div className="search-manufacturer">
        <Combobox>
            <div className="relative w-full">
                <Combobox.Button className="absolute top-[14px]">
                    <Image 
                    src="/car-logo.svg"
                    width={20}
                    height={20}
                    className="ml-4"
                    alt="Car Logo"
                    />
                </Combobox.Button>

                <Combobox.Input 
                className="search-manufacturer__input"
                placeholder="Enter make or model."
                displayValue={(manufacturer: string) => manufacturer}
                onChange={(e) => setQuery(e.target.value)}
                />

                <Transition
                as={Fragment}
                Leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                LeaveTo="opacity-0"
                afterLeave={() => setQuery('')}
                >
                    
                </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer