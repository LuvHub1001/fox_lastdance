import {useState,useEffect} from "react";
import {get} from "../../apis/useFetcher";

function TempItem(){
    const [pokeItem,setPokeItem] = useState();
    const [pokeItemDetail,setPokeItemDetail] = useState();
    useEffect(()=>{
        (async()=>{
            const tempItems = await get("pokemon/");
            setPokeItem(tempItems);
        })()
    },[]);

    const pokeArr = (pokeItem && pokeItem.data.results);

    console.log(pokeArr);
    
        useEffect(()=>{
            (async()=>{
                const tempUrl = await get(pokeArr[0].url);
                setPokeItemDetail(tempUrl);
            })();
        },[]);
    // console.log(pokeItemDetail && pokeItemDetail)
    
    return(
        <div>123</div>
    )
}
export default TempItem;