<template>
	<iframe src="http://megahand:muscafe@amnew.muscafe.su/a01" frameborder="0"></iframe>
</template>

<script>
import { VideoPlayer } from '@videojs-player/vue'
import 'video.js/dist/video-js.css'
export default {
	name: "MusikView",
	components:{
		VideoPlayer
	},
	data(){
		return{
			source:{
				src:'http://megahand:muscafe@amnew.muscafe.su/a01',
				type:'audio/x-mpegurl'
			}
		}
	}
}
</script>

<style scoped>

</style>