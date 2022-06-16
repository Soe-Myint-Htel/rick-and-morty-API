import { ref } from "vue";

let getCharacters = () => {
    let characters = ref([]);
    let error = ref("");
    let load = async() => {
        try{
            let response = await fetch("https://rickandmortyapi.com/api/character");
            if(response.status === 404){
                throw new Error("not found URL");
            }
            let datas = await response.json();
            characters.value = datas.results;
        }catch(err){
            error.value = err.message;
        }
    }
    return {characters, error, load}
}
export default getCharacters;