<template>
  <nav class="filter-nav">
    <button @click="filterBy('all')" :class="{ active: current==='all' }">All</button>
    <button @click="filterBy('alive')" :class="{ active: current==='alive' }">Alive</button>
    <button @click="filterBy('dead')" :class="{ active: current==='dead' }">Dead</button>
    <button @click="filterBy('unknown')" :class="{ active: current==='unknown' }">Unknown</button>
  </nav>
</template>

<script>
export default {
    props: ["current"],
    methods: {
    filterBy(value){
        this.$emit("filterValue", value)
    }
 }
}
</script>

<style>
.filter-nav button {
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  font-size: 1.5rem;
  text-transform: uppercase;
  margin-right: 50px;
  letter-spacing: 1.5px;
  font-weight: bold;
  cursor: pointer;
}
button.active {
  color: #333;
}
</style>