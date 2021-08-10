<template>
  <div class="progress">
		<div class="progress-bar" :style="{width: calcWidth}"></div>
	</div>
</template>

<script>
export default {
  props: {
    total: Number,
    completed: Number,
  },
  methods: {

  },
  computed: {
    calcWidth() {
      return `${this.completed / this.total * 100}%`
    }
  }
}
</script>
