<template>
	<div class="loginWindow">
		<div class="rowCenter">
			<img height="100" src="https://s3.timeweb.com/cd58536-mhand-bucket/crm/лого горизонт НЕАКТУАЛЬНО-01.png">
		</div>
		<div class="rowCenter">
			<TextField :type="'email'" placeholder="Login/email" width="350" height="50"/>
		</div>
		<div class="rowCenter"  style="margin-top: 15px;">
			<TextField :type="'password'" placeholder="Password" width="350" height="50"/>
		</div>
		<div class="rowCenter" style="margin-top: 15px;">
			<Button text="Войти" width="100" typeClass="default"></Button>
		</div>
	</div>
</template>

<script>
import TextField from "./items/TextField.vue";
import Button	 from "./items/Button.vue";
export default {
	name: "LoginWindow",
	components:{
		TextField, Button
	}
}
</script>

<style scoped>
.loginWindow{
	width: 480px;
	padding: 17px;
	height: auto;
	border: solid 1px;
	border-radius: 15px;
	border-color: var(--color-border-windows);
	background-color: var(--color-background-soft);
}
.rowCenter{
	display: flex;
	justify-content: center;
}

</style>