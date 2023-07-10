import { MouseEventHandler } from "react";

export interface customButtonProps {
  title: string;
  btnType?: "button" | "submit";
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface filterProps {
  manufacturer: string,
  year: number,
  fuel: string,
  limit: number,
  model: string,
}

export interface CustomFilterProps {
  title: string;
  options: OptionsProps[];
  setFilter: string;
}

export interface OptionsProps {
  title: string;
  value: string;
}

export interface searchManufacturerProps {
  setManufacturer: (manufacturer: string) => void;
  manufacturer: string;
}

export interface carProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}