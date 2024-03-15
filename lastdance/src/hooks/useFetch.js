import { useState, useEffect, useCallback } from "react";
import { get } from "../apis/userFetcher";

const useFetch = (fetch, param, config) => {
  const CACHE = {};

  const [_promise, _setPromise] = useState();
  const [_status, _setStatus] = useState("pending");
  const [_result, _setResult] = useState(null);

  const resolve = useCallback(
    (result) => {
      _setStatus("fulfilled");
      if (CACHE[param]) {
        _setResult(CACHE[param]);
      } else {
        CACHE[param] = result;
        _setResult(result);
      }
    },
    [param]
  );

  // API Error 기능 추가는 아직...
  useEffect(() => {
    _setStatus("pending");
    if (CACHE[param]) {
      resolve(CACHE[param]);
    }
  }, [param]);

  if (_status === "pending" && _promise) {
    throw _promise;
  }

  return _result;
};

export default useFetch;
