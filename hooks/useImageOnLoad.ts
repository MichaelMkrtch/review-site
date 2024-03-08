import { useState } from "react";

const useImageOnLoad = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleImageOnLoad = () => setIsLoaded(true);

  const transitionStyles = {
    lowRes: {
      opacity: isLoaded ? 0 : 1,
      transition: "opacity 300ms ease-out 90ms",
    },
    highRes: {
      opacity: isLoaded ? 1 : 0,
      transition: "opacity 300ms ease-in 90ms",
    },
  };

  return { handleImageOnLoad, setIsLoaded, transitionStyles };
};

export default useImageOnLoad;
