import { useState, useEffect, useCallback } from "react";
import { useAsyncError } from ".";

const _CACHE = {};

const useFetch = (fetch, params, config, cacheTtl = 10000) => {
  const { throwAsyncError } = useAsyncError();

  const [_promise, _setPromise] = useState();
  const [_status, _setStatus] = useState("pending");
  const [_result, _setResult] = useState(null);

  const resolve = useCallback(
    (result) => {
      _setStatus("fulfilled");
      _setResult(result);
      _CACHE[params] = result;
      // _CACHE[params] = {
      //   datas: result,
      //   ttl: new Date(),
      // };
    },
    [params],
  );

  useEffect(() => {
    _setStatus("pending");

    // 단점은 DB에 인서트 박히면, get 요청 왔을 때 사용자는 기존에 있던 데이터만 보게 된다.
    // 이거 개선하는게 중요: >> 보통 2개를 지정해야함, staleTime, cacheTime << 리액트쿼리 (ts때 도입)
    if (_CACHE[params]) {
      // if (new Date().getSeconds() - _CACHE[params].ttl < cacheTtl)
      _setResult(_CACHE[params]);
    } else {
      _setPromise(
        fetch(params, config)
          .then(resolve)
          .catch((err) => throwAsyncError(err)),
      );
    }
  }, [params]);

  if (_status === "pending" && _promise) {
    throw _promise;
  }

  return _result;
};
export default useFetch;
