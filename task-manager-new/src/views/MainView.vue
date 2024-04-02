<template>
	<div class="main">
		<Toolbar :height="'80'">
			<template #content>
				<div style="display: flex; width: 100%; align-items: center; justify-content: center;">
					<button>asdasd</button>
					<button>asdasd</button>
					<button>asdasd</button>
				</div>
			</template>
		</Toolbar>
	</div>

</template>

<script>
import Toolbar from "../components/items/Toolbar.vue";
export default {
	name: "MainView",
	components:{
		Toolbar
	}
}
</script>

<style scoped>
body{
	place-items: start;
}
</style>