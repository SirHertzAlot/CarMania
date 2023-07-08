"use client"

import { customButtonProps } from "@/types";
import Image from "next/image";

const customButton = ({title, containerStyles, handleClick}  : customButtonProps) => {
  return (
    <button disabled={false} type={"button"} className={`custom-btn ${containerStyles}`}
    onClick={handleClick}>
        <span className={'flex-1'}>
            {title}
        </span> 
    </button>  
    )
}

export default customButton