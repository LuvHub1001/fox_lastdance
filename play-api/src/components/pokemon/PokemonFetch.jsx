import { get } from "../../apis/useFetcher";
import useFetch from "../../hooks/useFetch";
import RenderComponent from "../common/RenderComponent";
import PokemonItem from "./PokemonItem";

function PokemonFetch() {
  const pokemons = useFetch(get,"pokemon/");
  console.log(pokemons)
  

  return (
    <div>
      {pokemons && (
        <RenderComponent
          className="pokemonRenderComponent"
          items={pokemons.data.results || []}
          render={(item) => {
            return (
              <div>
                <PokemonItem item={item} />
              </div>
            );
          }}
        />
      )}
    </div>
  );
}
export default PokemonFetch;
