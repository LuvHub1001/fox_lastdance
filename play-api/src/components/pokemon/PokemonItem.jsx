import styled from "styled-components";

const PokemonHeader = styled.div`
  display: flex;
  width: 200px;
  height: 100%;
`;

const PokemonBody = styled.img`
  width : 100%;
  height : 100%;
`;

function PokemonItem({item}) {
  return (
    <div>
      <PokemonHeader>{item.name}</PokemonHeader>
      <PokemonBody src={item.url}></PokemonBody>
    </div>
  );
}
export default PokemonItem;
