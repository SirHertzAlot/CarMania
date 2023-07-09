"use client"

import { customButtonProps } from "@/types";
import Image from "next/image";

const customButton = ({title, containerStyles, handleClick, btnType}  : customButtonProps) => {
  return (
    <button 
        disabled={false} 
        type={btnType || "button"} 
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}>
        <span className={'flex-1'}>
            {title}
        </span> 
    </button>  
    )
}

export default customButton