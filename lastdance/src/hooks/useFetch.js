import { useState, useEffect, useCallback } from "react";
import useAsyncError from "./useAsyncError";

const useFetch = (fetch, params, config) => {
  const { throwAsyncError } = useAsyncError();

  const [_promise, _setPromise] = useState();
  const [_status, _setStatus] = useState("pending");
  const [_result, _setResult] = useState(null);

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
        .catch((err) => throwAsyncError(err)),
    );
  }, [params]);

  if (_status === "pending" && _promise) {
    throw _promise;
  }

  return _result;
};
export default useFetch;
