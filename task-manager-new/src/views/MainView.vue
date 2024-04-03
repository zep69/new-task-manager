<template>
	<div class="main">
		<Toolbar :height="'80'">
			<template #content>
				<div style="display: flex; width: 100%; align-items: center; justify-content: space-between;">
					<div class="leftBlock">
						<div class="btnGroup">
							<svg-icon style="color:var(--color-border-windows)" type="mdi" :path="icon1"></svg-icon>
							<Button :typeClass="'text'" width="100" :text="'Мой профиль'" @click="$router.push('/main/profile')"/>
						</div>
						<div class="btnGroup" style=" margin-left: 10px;">
							<svg-icon style="color:var(--color-border-windows)" type="mdi" :path="icon2"></svg-icon>
							<Button :typeClass="'text'" width="100" :text="'Мои задачи'"/>
						</div>
						<div class="btnGroup" style=" margin-left: 10px;">
							<svg-icon style="color:var(--color-border-windows)" type="mdi" :path="icon3"></svg-icon>
							<Button :typeClass="'text'" width="120" :text="'Графики/отпуска'"/>
						</div>
						<div class="btnGroup" style=" margin-left: 10px;">
							<svg-icon style="color:var(--color-border-windows)" type="mdi" :path="icon5"></svg-icon>
							<Button :typeClass="'text'" width="50" :text="'Отчеты'"/>
						</div>
					</div>
					<div class="rightBlock">
						<div class="btnGroup" style="margin-right: 10px;">
							<svg-icon style="color:var(--color-border-windows)" type="mdi" :path="icon4"></svg-icon>
							<Button :typeClass="'text'" width="50" :text="'Выйти'"/>
						</div>
					</div>
				</div>
			</template>
		</Toolbar>
		<RouterView class="mainView"></RouterView>
	</div>

</template>

<script>
import Toolbar from "../components/items/Toolbar.vue";
import Button from "../components/items/Button.vue";
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAccount , mdiCheckboxMarkedCircleAutoOutline, mdiChartAreasplineVariant, mdiLogout, mdiFileChart } from '@mdi/js';
export default {
	name: "MainView",
	components:{
		Toolbar, Button, SvgIcon,
	},
	data(){
		return{
			icon1:mdiAccount,
			icon2:mdiCheckboxMarkedCircleAutoOutline,
			icon3: mdiChartAreasplineVariant,
			icon4:mdiLogout,
			icon5:mdiFileChart
		}
	}
}
</script>

<style scoped>
.mainView{
	width: 100vw;
	height: 100vh;
	background-color: var(--color-background-soft);
	border-radius: 15px;
	margin-top: 10px;
	padding: 5px;
}
.btnGroup{
	display:flex;
	align-items: center;
	/*border:solid 1px;
	border-color: var(--color-border-windows);
	border-radius: 5px;*/
	padding: 2px;
	cursor: pointer;
}
.leftBlock{
	display: flex;
	justify-content: start;
	align-items: center;
	padding-left: 10px;
}
.rightBlock{

}

.btnGroup:hover{
	background-color: var(--color-background-mute);
}
</style>