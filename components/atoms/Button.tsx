import React from "react";

interface Props {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
  customColor?: boolean;
  customLabel?: boolean;
}

export const Button = ({
  title,
  onClick,
  disabled,
  customColor,
  customLabel
}: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full h-[46px] text-white rounded-[5px] font-semibold flex-1 ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : customColor
          ? "bg-neutral00"
          : "bg-[#639605] hover:bg-[#4d7304]"
      }`}
    >
      <span className={customLabel ? "text-neutral20" : "text-white"}>
        {title}
      </span>
    </button>
  );
};
