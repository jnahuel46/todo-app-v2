import { useCartStore } from "@/store/cart-store";
import React from "react";

export const CartICon = ({ handleOpen }: { handleOpen: () => void }) => {
  const products = useCartStore((state) => state.products);
  const itemCount = products.length;
  return (
    <div className="relative cursor-pointer mt-[2px]" onClick={handleOpen}>
      <svg
        width="28"
        height="22"
        viewBox="0 0 28 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer text-middleGrey hover:text-customGreen transition-colors duration-200"
        onClick={handleOpen}
      >
        <g clipPath="url(#clip0_2217_50)">
          <path
            d="M9.01984 16.4141H23.3942C23.7509 16.4141 24.065 16.1778 24.1608 15.8287L27.3551 4.54946C27.4244 4.30777 27.3764 4.04458 27.2274 3.84048C27.0783 3.63638 26.8387 3.51822 26.5885 3.51822H7.07132L6.50166 0.924006C6.41648 0.564146 6.09173 0.300964 5.71906 0.300964H0.927604C0.485726 0.300964 0.129028 0.660825 0.129028 1.10662C0.129028 1.55242 0.485726 1.91228 0.927604 1.91228H5.0802C5.18135 2.37419 7.81665 14.314 7.96572 15.0015C8.18932 16.065 8.67912 16.4141 9.01984 16.4141ZM25.4226 5.19399L22.7181 14.7437H9.63741L7.53449 5.19399H25.4226Z"
            fill="currentColor"
          />
          <path
            d="M21.7224 21.6885C22.8955 21.6885 23.8466 20.729 23.8466 19.5454C23.8466 18.3618 22.8955 17.4024 21.7224 17.4024C20.5492 17.4024 19.5981 18.3618 19.5981 19.5454C19.5981 20.729 20.5492 21.6885 21.7224 21.6885Z"
            fill="currentColor"
          />
          <path
            d="M10.7181 21.6885C11.8913 21.6885 12.8424 20.729 12.8424 19.5454C12.8424 18.3618 11.8913 17.4024 10.7181 17.4024C9.54497 17.4024 8.59393 18.3618 8.59393 19.5454C8.59393 20.729 9.54497 21.6885 10.7181 21.6885Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_2217_50">
            <rect
              width="27.2581"
              height="21.8065"
              fill="white"
              transform="translate(0.129028 0.193542)"
            />
          </clipPath>
        </defs>
      </svg>
      {itemCount > 0 && (
        <span className="absolute top-1 right-1 transform translate-x-1/2 -translate-y-1/2 bg-customRed2 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-semibold">
          {itemCount}
        </span>
      )}
    </div>
  );
};
