<template>
	<div class="profileCard">
		<div style=" padding: 15px;">
			<div style="display: flex; justify-content: center;">
				<div style=" height:300px ">
					<Avatar/>
				</div>
			</div>


			<br>
			<div style="display: flex; justify-content: center; margin: 15px 10px 0 10px; align-items: center; ">
				<span style="font-family: Arial, sans-serif; ">Имя:</span>
				<h2 style="color:var(--color-border-windows);margin-left: 10px; ">Name Name</h2>
			</div>
			<div style="display: flex; justify-content: center; margin: 15px 10px 0 10px; align-items: center; ">
				<span style="font-family: Arial, sans-serif; ">Должность:</span>
				<h3 style="color:var(--color-border-windows);margin-left: 10px; ">Тестировщик всякой всячины</h3>
			</div>
			<div style="display: flex; justify-content: center; margin: 15px 10px 0 10px; align-items: center; ">
				<span style="font-family: Arial, sans-serif; ">email:</span>
				<h3 style="color:var(--color-border-windows);margin-left: 10px; ">test@test.test</h3>
			</div>
			<div style="display: flex; justify-content: center		; margin: 15px 10px 0 10px; align-items: center; ">
				<span style="font-family: Arial, sans-serif; ">Дата приема:</span>
				<h3 style="color:var(--color-border-windows);margin-left: 10px; ">04.04.2024</h3>
			</div>
			<div style="display: flex; justify-content: center		; margin: 15px 10px 0 10px; align-items: center; ">
				<span style="font-family: Arial, sans-serif; ">День рождения:</span>
				<h3 style="color:var(--color-border-windows);margin-left: 10px; ">01.01.2000 (24 года)</h3>
			</div>
			<div style="display: flex; justify-content: center		; margin: 15px 10px 0 10px; align-items: center; ">
				<TelegramIcon style="height: 35px; width: 40px"/>
				<VkIcon style="height: 35px; width: 40px"/>
			</div>

		</div>


	</div>

</template>

<script>
import VkIcon from "./icons/VkIcon.vue";
import TelegramIcon from "./icons/TelegramIcon.vue";
import Avatar from "./items/Avatar.vue";
export default {
	name: "ProfileWindow",
	components:{
		Avatar, TelegramIcon, VkIcon
	}
}
</script>

<style scoped>
.profileCard{
	width: 580px;
	border-radius: 15px;
	background-color: var(--color-background-softmute);
	-webkit-box-shadow: 0px 3px 10px -1px rgba(0,0,0,0.48);
	-moz-box-shadow: 0px 3px 10px -1px rgba(0,0,0,0.48);
	box-shadow: 0px 3px 10px -1px rgba(0,0,0,0.48);
}
</style>