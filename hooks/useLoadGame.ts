import React, { FC } from "react";

const useKeyPress = (targetKey: string): boolean => {
  const [keyPressed, setKeyPressed] = React.useState<boolean>(false);

  function downHandler({ key }): void {
    if (key === targetKey) setKeyPressed(true);
  }

  function upHandler({ key }): void {
    if (key === targetKey) setKeyPressed(false);
  }

  React.useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);

  return keyPressed;
};

export default useKeyPress;
