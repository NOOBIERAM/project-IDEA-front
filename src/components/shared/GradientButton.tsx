import type{ ReactNode } from "react";

interface GradientButtonProps {
  type?: "button" | "submit";
  w1_full? : boolean;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const GradientButton = ({ children, onClick, type="button", className = "", w1_full=false }: GradientButtonProps) => {
  return (
    <div
      className={`w${w1_full && "w-full"} rounded-full p-[2px] bg-gradient-to-br from-pink-500 via-pink-500 to-purple-500 
                  hover:scale-105 transition-transform duration-300 inline-block`}
    >
      <button
        type={type}
        onClick={onClick}
        className={` ${className ? className:"py-3"} w-full bg-white px-6 rounded-full font-semibold hover:scale-99 
                    transition-transform duration-300`}
      >
        {children}
      </button>
    </div>
  );
}

export default GradientButton;