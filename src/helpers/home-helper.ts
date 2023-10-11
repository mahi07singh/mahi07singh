import React, { useState } from "react";

export const HomeHelper = () => {
  const [showPopover, setShowPopover] = useState(false);

  const handleButtonClick = () => {
    setShowPopover(!showPopover);
  };
  return {
    handleButtonClick,
    showPopover,
  };
};
