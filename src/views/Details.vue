<template>
  <main class="grid">
    <article>
      <img :src="character.image" alt="Sample photo">
      <div class="text">
        <h3>{{character.name}}</h3>
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
        <p>{{ character.location.name }}</p>
      </div>
    </article>
  </main>
    <div class="box">
      <div v-for="(episode, index) in filterEpisode" :key="index">
        <div></div>
        <p>Eipsode - {{ index + 1 }}</p>
      </div>
    </div>
  <div class="btn">
    <Button @click="$router.push('/')"/>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';
import getCharacter from "../composables/getCharacter"
export default {
  components: { Button },
    props: ["id"],
    setup(props){
        let {character, error, load} = getCharacter(props.id);
        load();
        return {character, error};
    },
    computed: {
      filterEpisode(){
        return this.character.episode.slice(0, 10);
      }
    }
}
</script>

<style scoped>
body {
  padding: 40px 0;
}

.grid {
  display: flex;
  justify-content: center;
}

.grid > article {
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
}

.grid > article img {
  max-width: 100%;
}

.grid .text {
  padding: 20px;
}
.btn {
  margin-top: 20px;
}
.box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
.box > div > div{
  width: 100px;
  height: 100px;
  margin: 1rem;
  background-image: url("../assets/movie.png");
  background-size: 100px;
  cursor: pointer;
}
.box > div {
  max-width: 600px;
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
</style>