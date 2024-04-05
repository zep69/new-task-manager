<template>
	<div class="birthdayBlock">
		<div style="display: flex; justify-content: center;">
			<h2 style="color:var(--color-border-windows)">Ближайшие дни рождения в коллективе</h2>
		</div>
		<br>
		<div v-for="item in $props.arrBirthDay">
			<div class="birthdayRow" style="display: flex; justify-content: space-between;padding: 5px; align-items: center">
				<div style="display: flex; justify-content: start; align-items: center">
					<div style="height: 95px">
						<Avatar :srcImg="item.img"/>
					</div>
					<h3 style="color:var(--color-border-windows); margin-left: 15px;">{{item.name}}</h3>
				</div>
				<div>
					<span style="margin-right: 10px;">{{item.birthDay}}</span>
				</div>

			</div>
			<br>
		</div>
	</div>
</template>

<script>
import Avatar from "./items/Avatar.vue";
export default {
	name: "BirthDayWindow",
	components:{
		Avatar
	},
	props:{
		arrBirthDay:{
			type:Array,
			default(){
				return [
					{
						name:'Tempa Tempa',
						img:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500',
						birthDay:'07.04.1998'
					},
					{
						name:'Turururu Test',
						img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500',
						birthDay:'21.04.1988'
					},
				]
			}
		}
	}
}
</script>

<style scoped>
.birthdayBlock{
	padding: 15px;
	width: 580px;
	background-color: var(--color-background-softmute);
	border-radius: 15px;
	-webkit-box-shadow: 0px 3px 10px -1px rgba(0,0,0,0.48);
	-moz-box-shadow: 0px 3px 10px -1px rgba(0,0,0,0.48);
	box-shadow: 0px 3px 10px -1px rgba(0,0,0,0.48);
	transition: 0.5s;
}
.birthdayRow{
	padding: 10px;
	background-color: var(--color-background-softmute);
	border-radius: 15px;
	-webkit-box-shadow: 0px 3px 10px -1px rgba(0,0,0,0.48);
	-moz-box-shadow: 0px 3px 10px -1px rgba(0,0,0,0.48);
	box-shadow: 0px 3px 10px -1px rgba(0,0,0,0.48);
	transition: 0.5s;
}
.birthdayRow:hover{
	transform: scale(1.01);
}
</style>