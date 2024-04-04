<template>
	<div style="display: flex; justify-content: space-around;">
		<div class="profile">
			<!-- <h1 style="color:var(--color-border-windows)">Тут будет профиль пользователя</h1> -->

			<div style="display: flex; justify-content: center;">
				<ProfileWindow />
			</div>

		</div>
		<div class="blockInfo">
			<h1 style="color:var(--color-border-windows)">Тут будет информация об активных задачахх, график табель за неделю, ближайшие дни рождения</h1>
			<p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
		</div>

	</div>
</template>

<script>
import ProfileWindow from "../../components/ProfileWindow.vue";
export default {
	name: "ProfileView",
	components:{
		ProfileWindow
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
</style>