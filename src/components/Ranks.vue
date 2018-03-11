<template functional>
 <div class="rank">
   <div v-for="(v,k) in props.data" :key="k" class="ranks">
    <strong>{{v.title}}</strong>
   <ol>
    <li v-for="(it,key) of v.players" :key="key">
     <code>{{it[0]}}</code>
     <span>{{it[1]}} {{v.unit}}</span>
    </li>
   </ol>
   <p>{{v.description}}</p>
  </div>
 </div>
</template>

<script>
export default {
    name: 'Ranks'
}
</script>