import { useState } from "react";

const useAsyncError = () => {
  const [_, setError] = useState(null);

  const throwAsyncError = (error) => {
    setError(() => {
      throw error;
    });
  };

  return { throwAsyncError };
};
export default useAsyncError;
