import { get } from "../../apis/useFetcher";
import useFetch from "../../hooks/useFetch";
import { PokemonFetch, PokemonItem, RenderComponent } from "../../components";

function PokemonFetch() {
  const pokemons = useFetch(get, "pokemon/");
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
