<template functional>
    <div class="New-Player">
        <div class="block">
            <strong>欢迎新萌</strong>
            <span>昨日入服的玩家(0点之后入服的于次日显示)</span>
            <ul>
                <li v-for="(v,k) in props.newbies" :key="k">
                    <code>
                        {{v}}
                    </code>
                </li>
            </ul>
            <p>共 {{props.playerCount}} 名有效玩家中，有 {{props.yesterdayCount}} 名在过去24小时内登录过</p>
        </div>
        <div class="block">
            <strong>生日快乐</strong>
            <span>N 年前的今天，你们来到了毛线</span>
            <ul>
                <li v-for="(v,k) in props.birthdays" :key="k">
                    <code>
                        {{v}}
                    </code>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
    name: "newPlayer"
  }
</script>
