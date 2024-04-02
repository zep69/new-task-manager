<template>
	<div class="toolbar" :style="{height:$props.height+'px'}">
		<div style="display: flex;height:100%; width: 100%; align-items: center">
			<slot name="content">

			</slot>

		</div>
	</div>
</template>

<script>
export default {
	name: "Toolbar",
	props:{
		height:{
			type: String,
			default(){
				return '100'
			}
		}
	}
}
</script>

<style scoped>
	.toolbar{
		background-color: var(--color-background-soft);
		border:1px  solid;
		border-left: 0;
		border-right: 0;
		border-color: var(--color-border-windows);
		width: 100%;
	}

</style>