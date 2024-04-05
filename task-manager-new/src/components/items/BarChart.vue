<template>
	<Bar
			id="my-chart-id"
			:options="chartOptions"
			:data="$props.chartData"
	/>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
	name: "BarChart",
	components: { Bar },
	props:{
		chartData:{
			type: Object,
			default(){
				return {
					labels: [ 'Январь', 'Февраль', 'Март', 'Апрель'],
					datasets: [
						{
							label: 'Выполненные задачи',
							backgroundColor: '#D4B102FF',
							data: [12, 23, 14, 3]
						},
						{
							label: 'Просроченные задачи',
							backgroundColor: '#5454547A',
							data:[3,1,0,0]
						}
					]
				}
			}
		}
	},
	data() {
		return {
			chartData: {

			}
		}
	},
	mounted() {
	}
}
</script>

<style scoped>

</style>