<template functional>
    <footer>
        <div class="foot">
            <p v-if="props.missingCount">本次有 {{props.missingCount}} 名玩家的数据被企鹅吃掉了 &gt;w&lt;</p>
            <p>Made with ❤ by KPCC</p>
        </div>
    </footer>
</template>

<script>
  export default {
    name: "foot"
  }
</script>