<template>
	<div :class="$style.action">
		<div class="alert" :class="alertClasses">
			<h2>{{ title }}</h2>
			<div class="progress">
				<div :style="progressStyles" class="progress-bar"></div>
			</div>
			<hr>
			<h3 v-if="current === max">All done!</h3>
			<button v-else type="button" class="btn btn-primary" @click="onClick">
				I make step!
			</button>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		title: String,
		current: Number,
		max: Number
	},
	computed: {
		rel(){
			return this.current / this.max;
		},
		progressStyles(){
			return {
				width: this.rel * 100 + '%'
			}
		},
		alertClasses(){
			return {
				[this.$style.alert]: true,
				'alert-danger': this.rel < 0.25,
				'alert-warning': this.rel >= 0.25 && this.rel < 0.75,
				'alert-success': this.rel >= 0.75
			}
		}
	},
	methods: {
		onClick(){
			this.$emit('increase');
		}
	},
}
</script>
<style module>
	.action{
		border: 1px solid black;
		border-radius: 10px;
		padding: 20px;
		margin-bottom: 1em;
	}

	.alert{
		margin-bottom: 0;
	}
</style>