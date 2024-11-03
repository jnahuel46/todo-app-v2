import React from "react";

export const UserIcon = ({ handleOpen }: { handleOpen: () => void }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer text-middleGrey hover:text-customGreen transition-colors duration-200"
      onClick={handleOpen}
    >
      <path
        d="M16.4203 14.6835C18.6244 13.3415 20.0622 10.9457 20.0622 8.16682C20.0622 3.95009 16.6121 0.5 12.3954 0.5C8.17866 0.5 4.72857 3.95009 4.72857 8.16682C4.72857 10.9448 6.16641 13.3415 8.37043 14.6835C4.53725 16.1208 1.66202 19.475 0.895386 23.5H2.8122C3.77061 19.0915 7.69968 15.8332 12.3954 15.8332C17.0911 15.8332 21.0202 19.0915 21.9786 23.5H23.8954C23.1287 19.3792 20.254 16.025 16.4203 14.6835ZM6.64539 8.16682C6.64539 5.00438 9.23295 2.41682 12.3954 2.41682C15.5578 2.41682 18.1458 5.00438 18.1458 8.16682C18.1458 11.3292 15.5578 13.9168 12.3954 13.9168C9.23295 13.9168 6.64539 11.3292 6.64539 8.16682Z"
        fill="currentColor"
      />
    </svg>
  );
};
