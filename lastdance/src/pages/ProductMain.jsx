import { get } from "../apis/userFetcher";
import useFetch from "../hooks/useFetch";

function ProductMain() {
  const productItems = useFetch(get, "/products");

  return <div>asdf</div>;
}
export default ProductMain;
