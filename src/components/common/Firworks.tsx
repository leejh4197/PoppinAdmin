import React, { useEffect } from "react";
import Snowfall from "react-snowfall";

type FireworkBtnType = {
  setShowFireworks: React.Dispatch<React.SetStateAction<boolean>>;
  showFireworks: boolean;
};

const Fireworks = ({ showFireworks, setShowFireworks }: FireworkBtnType) => {
  useEffect(() => {
    if (showFireworks) {
      setShowFireworks(true);
      setTimeout(() => setShowFireworks(false), 10000);
    }
  }, [showFireworks]);

  return (
    <div className="flex w-full items-center justify-center">
      {showFireworks && (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <Snowfall
            color="#0EB5F9"
            snowflakeCount={500}
            style={{ zIndex: 1000 }}
          />
          <Snowfall
            color="white"
            snowflakeCount={500}
            style={{ zIndex: 1000 }}
          />
        </div>
      )}
    </div>
  );
};

export default Fireworks;
