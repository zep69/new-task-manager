<template>

		<div style="display: flex; justify-content: center; align-items: center">
			<h2 style="color: var(--color-border-windows)">Мои задачи</h2>
		</div>
		<br>
		<div  style="display: flex; justify-content: space-between;padding: 10px">
			<div v-for="item in columns" style=" width: 350px; height: 700px; border-radius: 15px; background-color: var(--color-background-softmute); padding: 10px">
				<div class="columnTask" style="display: flex; justify-content: center;">
					<h4 style="color: var(--color-border-windows); margin-top: 5px;">{{item.name}}</h4>
				</div>
				<div v-for="task in item.tasks" style="margin-top: 5px;">
					<TaskCard :nameTask="task.name" :dateStart="task.date" style="margin-top: 15px;" />
				</div>

			</div>
		</div>

</template>

<script>
import TaskCard from "./items/TaskCard.vue";
export default {
	name: "TaskWindow",
	components:{
		TaskCard
	},
	data(){
		return{
			columns:[
				{
					name:'Новые',
					tasks:[
						{
							name:'Что-то поделать',
							date: '02.02.2022'
						},
						{
							name:'Обновить кассы',
							date: '05.04.2024'
						},
						{
							name:'Починить унитаз',
							date: '08.04.2024'
						},
					]
				},
				{
					name:'В работе',
					tasks:[
						{
							name:'Настрить принтер',
							date: '07.04.2024'
						},

					]
				},
				{
					name:'На согласовнии',
					tasks:[
						{
							name:'Новое решение для складского ПО',
							date: '06.04.2024'
						},
						{
							name:'Согласование бюджета',
							date: '05.04.2024'
						},
						{
							name:'Починить входную дверь в офис',
							date: '08.04.2024'
						},
						{
							name:'Бла бла бла тест тест',
							date: '08.04.2024'
						},
					]
				},
				{
					name:'Просроченные',
					tasks:[
						{
							name:'Перевести все магазин на новое ПО',
							date: '02.09.2023'
						},
						{
							name:'Оплатить все тел.номера',
							date: '08.04.2024'
						},
					]
				}
			]
		}
	}
}
</script>

<style scoped>
.columnTask{

}
</style>