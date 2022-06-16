<template>
  <div class="head">
    <img src="../assets/rick.png" alt="">
  </div>

  <FilterNav @filterValue="current=$event" :current="current"/>

  <div class="container">
  <main class="grid">
    <article v-for="(character, index) in filterStatus" :key="index">
      <router-link :to="{name: 'Details', params: {id: character.id}}">
      <img :src="character.image">
      <div class="text">
        <h3>{{ character.name }}</h3>
        <p>{{ character.gender }}</p>
        <div v-if="character.status === 'Alive'">
          <p class="alive">{{ character.status }}</p>
        </div>
        <div v-if="character.status === 'Dead'">
          <p class="dead">{{ character.status }}</p>
        </div>
        <div v-if="character.status === 'unknown'">
          <p class="unknown">{{ character.status }}</p>
        </div>
        <p>{{ character.species }}</p>
      </div>
      </router-link>
    </article>
    
  </main>
</div>
</template>

<script>
import FilterNav from '@/components/FilterNav.vue';
import getCharacters from "../composables/getCharacters"
import { ref } from '@vue/reactivity';
export default {
  components: { FilterNav },
  setup(){
    let current = ref("all");
    let {characters, error, load} = getCharacters();
    load();

    return {characters, error, current};
  },
  computed: {
    filterStatus(){
      if(this.current === "alive"){
        return this.characters.filter((character) => {
         return character.status === "Alive";
        })
      }
      if(this.current === "dead"){
        return this.characters.filter((character) => {
          return character.status === "Dead";
        })
      }
      if(this.current === "unknown"){
        return this.characters.filter((character) => {
          return character.status === "unknown";
        })
      }
      return this.characters;
    }
  }
}
</script>

<style scoped>
body {
  padding:0;
}
/* .head > img{
  width: 80%;
} */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
}

.grid > article {
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
}

.grid > article img {
  max-width: 70%;
  margin-top: 1rem;
  border-radius: 13px;
}

.grid .text {
  padding: 20px;
}
a{
  text-decoration: none;
  color: black;
}
.alive{
  display: inline;
  padding: 5px;
  border-radius: 9px;
  background-color: green;
}
.dead{
  display: inline;
  padding: 5px;
  border-radius: 9px;
  background-color: red;
}
.unknown{
  display: inline;
  padding: 5px;
  border-radius: 9px;
  background-color: yellow;
}
@media screen and (max-width: 850px) {
  .head > img{
    width: 100%;
  }
}
@media screen and (max-width: 450px) {
  .filter-nav {
    margin-left: 3rem;
  } 
}
@media screen and (max-width: 300px) {
  .filter-nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } 
}
</style>