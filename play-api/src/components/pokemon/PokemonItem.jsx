import styled from "styled-components";
import { get } from "../../apis/useFetcher";
import useFetch from "../../hooks/useFetch";

const PokemonHeader = styled.div`
  display: flex;
  width: 200px;
  height: 100%;
`;

const PokemonBody = styled.img`
  width: 200px;
  height: 100px;
`;

function PokemonItem({ item }) {
  const PokeImgIdx = item?.url.replace(/[^0-9]/g, "").slice(1);
  const PokeImgData = useFetch(get, `pokemon/${PokeImgIdx}`);
  return (
    <div>
      <PokemonHeader>{item?.name}</PokemonHeader>
      <PokemonBody
        src={`${PokeImgData?.data.sprites.front_default}`}
      ></PokemonBody>
    </div>
  );
}
export default PokemonItem;
