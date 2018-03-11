<template functional>
    <div id="New-Player">
        <div class="New-Player">
            <div>
                <strong>欢迎新萌</strong>
                <span>昨日入服的玩家(0点之后入服的于次日显示)</span>
                <ul>
                    <li v-for="(v,k) in props.newbies" :key="k">{{v}}</li>
                </ul>
                <p>共 {{props.playerCount}} 名有效玩家中，有 {{props.yesterdayCount}} 名在过去24小时内登录过</p>
            </div>
            <div>
                <strong>生日快乐</strong>
                <span>N 年前的今天，你们来到了毛线</span>
                <ul>
                    <li v-for="(v,k) in props.birthdays" :key="k">{{v}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "newPlayer"
    }
</script>
