<template>
	<div class="profile-pic">
		<img class="profile-pic-image" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500" />
	</div>
</template>

<script>
export default {
	name: "Avatar"
}
</script>

<style scoped>
 .profile-pic {
	aspect-ratio: 1;
	border: clamp(3px, 0.4vw, 5px) solid var(--color-border-windows);
	border-radius: 50%;
	flex-shrink: 0;
	height: 100%;
	position: relative;
}
.profile-pic > .profile-pic-image {
	background-color: rgba(255, 255, 255, 0.06);
	border-radius: 100%;
	height: calc(100% - clamp(10px, 1.5vw, 20px));
	margin: clamp(5px, 0.75vw, 10px);
	object-fit: cover;
	width: calc(100% - clamp(10px, 1.5vw, 20px));
}
</style>