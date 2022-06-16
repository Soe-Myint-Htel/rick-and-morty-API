import { ref } from "vue";

let getCharacter = (id) => {
    let character = ref(null);
    let error = ref("");
    let load = async() => {
        try{
            let response = await fetch("https://rickandmortyapi.com/api/character/"+id);
            if(response.status === 404){
                throw new Error("not found URL");
            }
            let datas = await response.json();
            character.value = datas;
        }catch(err){
            error.value = err.message;
        }
    }
    return {character, error, load}
}
export default getCharacter;