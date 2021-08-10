<template>

  <div style="background-color: #eee; padding: 0 1em">
    <hr>
    <p>Post {{ id }} for {{day}}</p>
    <br>
    <h3>{{ title }}</h3>
    <p><slot></slot></p>
    <br>
    <button @click="$emit('enlargeText')">
      Enlarge text
    </button>
    <button @click="$emit('shrinkText')">
      Shrink text
    </button>
  </div>

</template>

<script>
export default {
  props: {
    id: Number, 
    title: String,
    day: String,
  },
  emits: ['enlargeText', 'shrinkText'],
  methods: {

  },
  computed: {
    
  }
}
</script>
