import React from "react";

export const WarningMessage = () => {
  return (
    <div
      className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
      role="alert"
    >
      <p className="font-bold">Precaucion!</p>
      <p>Esta funcionalidad esta en desarrollo.</p>
    </div>
  );
};
