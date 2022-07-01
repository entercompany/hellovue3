<template>
  <div class="flex flex-wrap">
  <div class="text-center m-auto w-full">DcHeroes {{heroesCount}}</div>
  <div class="w-full">
    <ul>
      <li v-for="(item,index) in dcHeroes" :key="item">{{item.name}} <button @click="remove(index)">x</button></li>
    </ul>
  </div>
  <input class="border rounded" v-model="newHero" ref="newHeroRef">
  <button type="button" @click="addHero()" class="border rounded px-2">Add</button>
  </div>

</template>

<script>
import { computed, onMounted, ref } from 'vue'
export default {
  setup(){
    const newHeroRef = ref("")
    const newHero = ref("")
    const dcHeroes = ref([
      {name: 'SuperGirl'},
      {name: 'Flash'},
      {name: 'Batman'},
      {name: 'Arrow'},
      {name: 'Superman'},
    ])
    
    const heroesCount = computed( {
      get:()=>dcHeroes.value.length,

    })

    onMounted(()=>{
      newHeroRef.value.focus();
    })

    function remove(index){
      dcHeroes.value = dcHeroes.value.filter((hero,i)=>i != index)
    }

    function addHero() {
      if(newHero.value !== "") { 
        dcHeroes.value.unshift({name: newHero.value});
        newHero.value = ""
      }
    }

    return {dcHeroes, newHero, remove, addHero,newHeroRef, heroesCount}
  },
  mounted() {

  }

}
</script>

<style>

</style>