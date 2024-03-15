import { useState, useEffect, useCallback } from "react";

const useFetch = (fetch, params, config) => {
  const [_promise, _setPromise] = useState();
  const [_status, _setStatus] = useState("pending");
  const [_result, _setResult] = useState(null);

  const resolve = useCallback(
    (result) => {
      _setStatus("fulfilled");
      _setResult(result);
    },
    [params]
  );

  useEffect(() => {
    _setStatus("pending");
    _setPromise(
      fetch(params, config)
        .then(resolve)
        .catch((err) => Promise.reject(err))
    );
  }, [params]);

  if (_status === "pending" && _promise) {
    throw _promise;
  }

  return _result;
};
export default useFetch;
