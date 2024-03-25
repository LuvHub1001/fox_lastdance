import { useState, useCallback, useEffect } from "react";
import { useAsyncError } from "../hooks";

const useFetch = (fetch, params, config) => {
  const [_promise, _setPromise] = useState();
  const [_status, _setStatus] = useState("pending");
  const [_result, _setResult] = useState(null);

  const { catchAsyncError } = useAsyncError();

  const resolve = useCallback(
    (result) => {
      _setStatus("fulfilled");
      _setResult(result);
    },
    [params],
  );

  useEffect(() => {
    _setStatus("pending");
    _setPromise(
      fetch(params, config)
        .then(resolve)
        .catch((err) => catchAsyncError(err)),
    );
  }, [params]);

  if (_status === "pending" && _promise) {
    throw _promise;
  }

  return _result;
};

export default useFetch;
