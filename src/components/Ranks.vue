<template functional>
    <div class="ranks">
        <div class="block">
            <div v-for="(v,k) in props.data" :key="k" class="rank">
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
    </div>
</template>

<script>
  export default {
    name: 'Ranks'
  }
</script>