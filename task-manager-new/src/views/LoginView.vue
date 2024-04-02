<template>
	<div class="mainLogin">
		<LoginWindow  />
	</div>

</template>

<script>

import LoginWindow from "../components/LoginWindow.vue";
export default {
	name: "LoginView",
	components:{
		LoginWindow
	}
}
</script>

<style scoped>
.main{
	display: flex;
	width: 100%;
	height: 100%;
	justify-content: center	;
}



</style>