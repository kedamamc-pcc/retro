<template>
    <div id="app">
        <Headers :update="update"></Headers>
        <NewPlayer :birthdays="data.birthdays" :yesterdayCount="data.yesterdayCount" :playerCount="data.playerCount"
                   :missingCount="data.missingCount" :newbies="data.newbies"></NewPlayer>
        <router-view :data="data.ranks"></router-view>
        <Footer :missingCount="data.missingCount"></Footer>
    </div>
</template>

<script>
	import Headers from './components/Header.vue'
	import NewPlayer from './components/New-Player.vue'
	import Footer from './components/Footer.vue'
	import './assets/style.css'
	export default {
		name: "app",
		data() {
			return {
				data: [],
				update: '正在从企鹅嘴里抢夺数据...'
			}
		},
		components: {
			Headers,
			NewPlayer,
			Footer
		},
		mounted: function () {
			const url = './json/ranks.json'
			const t = this
			this.$ajax.get(url).then(function (res) {
				console.log(res.data)
				t.data = res.data
				t.update = res.data.update
			})
		}
	}
</script>