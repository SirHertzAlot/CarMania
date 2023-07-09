import { MouseEventHandler } from "react";


export interface customButtonProps {
    title: string;
    btnType?: "button" | "submit";
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface searchManufacturerProps {
    setManufacturer: (manufacturer: string) => void;
    manufacturer: string;
}