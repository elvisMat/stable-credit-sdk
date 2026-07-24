// import React from "react";
import type { StableCreditButtonProps } from "./types";
/**
 * 
 * @param props - Generic button props plus currency and amount.
 * @returns JSX.Element - A button element with the provided props.
 */
function StableCreditButton({ children, ...props }: StableCreditButtonProps) {
  return (
    <button id="stable-credit-button" {...props}>
      {children || "Stable Credit Button"} 
      
    </button>
  );
}
     
export default StableCreditButton;
