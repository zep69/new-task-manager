<template>
	<div class="taskCard">
		<div style="display: flex; justify-content: start	; align-items: center">
			<h4 style="color: var(--color-border-windows); margin-left: 4px;">{{$props.nameTask}}</h4>
		</div>
		<div style="display: flex; justify-content: end; align-items: end">
			<span>{{$props.dateStart}}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "TaskCard",
	props:{
		nameTask:{
			type:String,
			default(){
				return 'Test test'
			}
		},
		dateStart:{
			type: String,
			default(){
				return '01.01.2024'
			}
		}
	}
}
</script>

<style scoped>
.taskCard{
	height: 60px;
	padding: 10px;
	border-radius: 15px;
	border: 1px solid var(--color-background-soft);
	background-color: var(--color-background-softmute);
	-webkit-box-shadow: 0px 3px 6px -1px rgba(0,0,0,0.48);
	-moz-box-shadow: 0px 3px 6px -1px rgba(0,0,0,0.48);
	box-shadow: 0px 3px 6px -1px rgba(0,0,0,0.48);
	transition: 0.3s;
}
.taskCard:hover{
	transform: scale(1.02);
}
</style>