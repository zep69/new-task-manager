<template>
	<div class="task">
		<div style="display: flex; justify-content: space-between;">
			<div>
				<h3 style="color: var(--color-border-windows)">{{$props.title}}</h3>
				<br>
				<span>{{$props.body}}</span>
			</div>
			<div>

			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "TaskRow",
	props:{
		title:{
			type:String,
			default(){
				return 'Test Test'
			}
		},
		body:{
			type:String,
			default() {
				return "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"";
			}
		},
		dateStart:{
			type: String,
			default(){
				return '01.04.2024'
			}
		},
		dateEnd:{
			type:String,
			default(){
				return '01.12.2024'
			}
		}
	},
	data(){
		return{

		}
	}
}
</script>

<style scoped>
.task{
	padding: 10px;
	background-color: var(--color-background-softmute);
	border-radius: 15px;
	-webkit-box-shadow: 0px 3px 10px -1px rgba(0,0,0,0.48);
	-moz-box-shadow: 0px 3px 10px -1px rgba(0,0,0,0.48);
	box-shadow: 0px 3px 10px -1px rgba(0,0,0,0.48);
	transition: 0.5s;
}
.task:hover{
	transform: scale(1.01);
}
</style>