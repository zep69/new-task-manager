<template>
	<div style="position: relative" :style="{width:$props.width+'px'}">
		<input :type="type" :placeholder="$props.placeholder" class="outlined" :style="{width:$props.width+'px', height:$props.height+'px' }" />
		<svg-icon v-if="password" :path="path" @click="changeType" type="mdi" style="color:var(--color-border-windows); margin-right: 5px; position: absolute;right: 6px; " :style="{top:topMargin($props.height)+'px'}"></svg-icon>

	</div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiEyeOutline } from '@mdi/js';
import { mdiEyeOffOutline } from '@mdi/js'
export default {
	name: "TextField",
	components:{
		SvgIcon
	},
	props:{
		type:{
			type:String,
			default(){
				return 'text'
			}
		},
		placeholder:{
			type:String,
			default() {
				return '';
			}
		},
		width:{
			type:String,
			default(){
				return '210'
			}
		},
		height:{
			type:String,
			default(){
				return '50'
			}
		}

	},
	data(){
		return{
			path: mdiEyeOutline,
			password:false,
			type: 'text'
		}
	},
	computed:{
		checkType(){
			if(this.$props.type == 'password'){
				return true
			}else{
				return false
			}
		},

	},
	async mounted(){
		if(this.$props.type == 'password'){
			this.password = true
			this.type = 'password'
		}else if(this.$props.type == 'text'){
			this.password = false
			this.type = 'text'
		}else if(this.$props.type == 'email'){
			this.password =false
			this.type = 'email'
		}
		this.type = this.$props.type
	},
	methods:{
		topMargin(int){
			let temp = Number(int)
			temp = temp/2 - (temp/4)
			return temp
		},
		changeType(){
			if(this.type == "password"){
				this.type = 'text'
				this.path = mdiEyeOffOutline
			}else if(this.type == 'text'){
				this.type = 'password'
				this.path = mdiEyeOutline
			}
		}
	}
}
</script>

<style scoped>

svg-icon{
	position: absolute;
	right: 5px;
	z-index: 1;
}:hover{
	background-color: hsla(50, 98%, 42%, 0.37);
	border-radius: 10px;
}
.outlined{
	background-color: var(--color-background-soft);
	border: solid 2px;
	border-color: var(--color-border-windows);
	border-radius: 10px;
	color: var(--color-border-windows);
	font-size: 30px;
	text-indent: 4px;
}
input:focus{
	outline: none;
}

</style>