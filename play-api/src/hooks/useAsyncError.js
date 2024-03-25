import { useState } from "react";

const useAsyncError = () => {
  const [_, setError] = useState(null);

  const catchAsyncError = (err) => {
    setError(() => {
      throw err;
    });
  };
  return { catchAsyncError };
};
export default useAsyncError;
