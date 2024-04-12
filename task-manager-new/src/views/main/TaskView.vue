<template>
	<div style="display: flex; justify-content: space-around;">
		<div class="nav">
			<div style="display: flex; justify-content: center;">
				<h2 style="color:var(--color-border-windows)">Нав бар тут</h2>
			</div>

			<div>
				<div v-for="item in buttons">
					<div class="navBtns">
						<svg-icon style="color:var(--color-border-windows)" type="mdi" :path="item.icon"></svg-icon>
						<Button style="margin-left: 5px;" :text="item.text" typeClass="text" :width="item.width" @click="$router.push(item.path)"/>
					</div>
				</div>
			</div>
		</div>

		<div class="mainViewTask">
			<div>
				<RouterView>

				</RouterView>
			</div>

		</div>


	</div>
</template>

<script>
import Button from "../../components/items/Button.vue";
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCheckCircle, mdiEyeCheck , mdiAccountCheck, mdiArchiveStar} from '@mdi/js';
export default {
	name: "TaskView",
	components:{
		Button, SvgIcon
	},
	data(){
		return{
			buttons:[
				{
					text: 'Задачи мне',
					width: '90',
					icon:mdiCheckCircle,
					path:'/main/task/my'
				},
				{
					text:'Задачи от меня',
					width: '115',
					icon:mdiEyeCheck
				},
				{
					text:'Задачи отдела',
					width: '110',
					icon:mdiAccountCheck
				},
				{
					text:'Архив',
					width: '55',
					icon:mdiArchiveStar
				}
			]
		}
	}
}
</script>

<style scoped>
.nav{
	width: 200px;
	border-radius: 15px;
	padding: 10px;
	background-color: var(--color-background-mute);
}
.mainViewTask{
	width: 1680px;
	border-radius: 15px;
	padding: 10px;
	background-color: var(--color-background-mute);
}
.navBtns{
	display: flex;
	justify-content: start;
	align-items: center;
	margin-top: 5px;
	border-radius: 10px;
}
.navBtns:hover{
	background-color: var(--color-background-softmute);
}
</style>