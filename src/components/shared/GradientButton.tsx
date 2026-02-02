import type{ ReactNode } from "react";

interface GradientButtonProps {
  type?: "button" | "submit";
  w1_full? : boolean;
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  isDisable?: boolean;
}

const GradientButton = ({ children, onClick, type="button", className = "", w1_full=false, isDisable=false }: GradientButtonProps) => {
  return (
    <div
      className={`${w1_full && "w-full"} rounded-full p-[2px] ${!isDisable && "hover:scale-105"} bg-gradient-to-br from-pink-500 via-pink-500 to-purple-500 
                   transition-transform duration-300 inline-block`}
    >
      <button
        disabled={isDisable}
        type={type}
        onClick={onClick}
        className={` ${className ? className:"py-3"} w-full  px-6 rounded-full font-semibold bg-white ${!isDisable && "hover:scale-99"}
                    transition-transform duration-300`}
      >
        {isDisable ? (
          <div className="btn-loader mx-auto"></div>
        ) : (
          children
        )}
      </button>
    </div>
  );
}

export default GradientButton;