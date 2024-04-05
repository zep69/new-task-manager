<template>
	<div style="display: flex; justify-content: space-around;">
		<div class="profile">
			<!-- <h1 style="color:var(--color-border-windows)">Тут будет профиль пользователя</h1> -->

			<div style="display: flex; justify-content: center;">
				<ProfileWindow />
			</div>
			<br>
			<div style="display: flex; justify-content: center;">
				<BirthDayWindow />
			</div>

		</div>
		<div class="blockInfo">
			<div class="chartsBlock" style="display: flex; justify-content: center;height: 380px; ">
				<div style="margin-top: 30px;">
					<div style="display: flex; justify-content: center;">
						<h3 style="color: var(--color-border-windows)">Ваши показатели выполенных задач</h3>
					</div>
					<BarChart style="width: 550px; "/>
				</div>
				<div style="margin-top: 30px;">
					<div style="display: flex; justify-content: center;">
						<h3 style="color: var(--color-border-windows)">Посещаемость за неделю</h3>
					</div>
					<BarChart style="width: 550px; " :chartData="dataChart"/>
				</div>
			</div>
			<br>
			<div class="taskBlock">
				<div style="display: flex; justify-content: center;">
					<h2 style="color: var(--color-border-windows)">Активные задачи</h2>
				</div>
				<br>
				<div v-for="item in taskArr">
					<TaskRow :title="item.title" :body="item.body"/>
					<br>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
import BirthDayWindow from "../../components/BirthDayWindow.vue";
import TaskRow from "../../components/items/TaskRow.vue";
import BarChart from "../../components/items/BarChart.vue";
import ProfileWindow from "../../components/ProfileWindow.vue";
export default {
	name: "ProfileView",
	components:{
		ProfileWindow, BarChart, TaskRow, BirthDayWindow
	},
	data(){
		return{
			taskArr:[
				{
					title:'Что-то поделать',
					body:'\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"'
				},
				{
					title:'Настроить какой-то комп',
					body:'В городе N сломался комп полностью, не включается, НУЖНО СРОЧНО ВСЕ ПОЧИНИТЬ ИНАЧЕ ОН ВЗОРВЕТСЯ'
				},
				{
					title:'Удалить Олегу Тик-ток',
					body:'80% рабочего времени трратит на просмотр преколов. Города ждут ответа уже более полу года. Просим предпринять какие-нибудь меры!!!'
				},
				{
					title:'Юра взорвал Оренбургскую область',
					body:'Нужно всему МегаХех-отделу приехать на вызженную площадь и заново отстроить область. Максим на работе, так что придется своими силами. ЭТО СРОЧНАЯ ЗАДАЧА, ПРЕЗИДЕНТ НЕ ДОВОЛЕН'
				},

			],
			dataChart:{
				labels: [ '01.04.2024', '02.04.2024', '03.04.2024', '04.04.2024', '05.04.2024'],
				datasets: [
					{
						label: 'Часов отработано',
						backgroundColor: '#D4B102FF',
						data: ['8.5', '7.67', '8.22', '9.1', '6.8']
					},
				]
			}
		}
	}
}
</script>

<style scoped>
.profile{
	background-color: var(--color-background-mute);
	width: 650px;
	border-radius: 15px;
	padding: 10px;

}
.blockInfo{
	background-color: var(--color-background-mute);
	width: 1200px;
	border-radius: 15px;
	padding: 10px;
}
.chartsBlock{
	background-color: var(--color-background-softmute);
	border-radius: 15px;
	-webkit-box-shadow: 0px 3px 10px -1px rgba(0,0,0,0.48);
	-moz-box-shadow: 0px 3px 10px -1px rgba(0,0,0,0.48);
	box-shadow: 0px 3px 10px -1px rgba(0,0,0,0.48)
}
.taskBlock{
	padding: 10px;
	background-color: var(--color-background-softmute);
	border-radius: 15px;
	-webkit-box-shadow: 0px 3px 10px -1px rgba(0,0,0,0.48);
	-moz-box-shadow: 0px 3px 10px -1px rgba(0,0,0,0.48);
	box-shadow: 0px 3px 10px -1px rgba(0,0,0,0.48)
}
</style>