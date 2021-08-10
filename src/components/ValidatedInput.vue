<template>
  <div class="form-group">
    <label>
      {{ this.name }}
      <font-awesome-icon :style="{color: color}" v-if="this.activated && this.valid" icon="check-circle" />
      <font-awesome-icon :style="{color: color}" v-else-if="this.activated && !this.valid" icon="exclamation-circle" />
    </label>
    <input @input="onInput" type="text" class="form-control">
  </div>
</template>
<script>
export default {
  data() {
    return {
      activated: this.value != ''
    }
  },
  props: {
    name: String,
    value: String,
    pattern: "",
    valid: Boolean,
    activated: Boolean
  },
  methods: {
    onInput(e) {
      this.activated = true,
      this.$emit('inputting', e.target.value);
    },
  },
  computed: {
    color(){
      return this.valid ? 'green': 'red'
    }
  }
}
</script>