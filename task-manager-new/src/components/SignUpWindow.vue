<template>
	<div class="signUpWindow">
		<div class="rowCenter">
			<h1 style="font-family: Arial, sans-serif">Регистрация</h1>
		</div>
		<div class="rowCenter">
			<TextField :type="'email'" style="margin-top: 15px;"  placeholder="Введите email" width="350" height="50"/>
		</div>
		<div class="rowCenter">
			<TextField :type="'password'" style="margin-top: 15px;" placeholder="Введите пароль" width="350" height="50" />
		</div>
		<div class="rowCenter">
			<TextField :type="'password'" style="margin-top: 15px;" placeholder="Повторите пароль" width="350" height="50"/>
		</div>
		<div class="rowCenter">
			<Button text="Зарегистрироваться"  style="margin-top: 30px;" width="350" typeClass="default"/>
		</div>
		<div class="rowCenter" style="align-items: center">
			<span>Уже есть аккаунт?</span>
			<Button :typeClass="'text'" :text="'Войти в систему'" width="150" @click="$router.push('/login')" />
		</div>
	</div>
</template>

<script>
import TextField from "./items/TextField.vue";
import Button	 from "./items/Button.vue";
export default {
	name: "SignUpWindow",
	components:{
		TextField, Button
	}
}
</script>

<style scoped>
	.signUpWindow{
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
	h1{
		color: var(--color-border-windows)
	}
</style>