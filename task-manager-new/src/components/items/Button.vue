<template>
	<button :class="$props.typeClass" :style="{height:$props.height+'px', width:$props.width+'px', 'border-radius':borderClass+'px'}">{{$props.text}}</button>
</template>

<script>
export default {
	name: "Button",
	props:{
		typeClass:{
			type:String,
			default(){
				return 'default'
			}
		},
		width:{
			type:Number,
			default() {
				return 75;
			}
		},
		height:{
			type:Number,
			default(){
				return 37
			}
		},
		text:{
			type:String,
			default(){
				return 'button'
			}
		}
	},
	data(){
		return{

		}
	},
	computed:{
		borderClass(){
			let border = this.$props.height
			return border/3
		}
	}
}
</script>

<style scoped>
button{
	cursor:pointer;
}
.text{
	background: none;
	border: none;
	color:var(--color-border-windows);

}
.outlined{
	background:none;
	color:var(--color-border-windows);
	border: solid 2px;
	border-color:var(--color-border-windows)

}
.default{
	background-color: var(--color-border-windows);
	color: var(--color-background-soft);
	border: none;
}

.default:active{
	background-color: var(--color-border-windows-click);
}
</style>