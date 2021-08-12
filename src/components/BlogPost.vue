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
    <p>Post by {{author.name}}, {{author.age}} years</p>
    <p>newAuthor is <b style="color:red">{{newAuthor}}</b> - <i>is modified in computed field of component</i></p>
    <br>
    Comment
    <br>
    <input type="text" v-bind="$attrs" />
  </div>

</template>

<script>
export default {
  props: {
    id: Number, 
    title: String,
    day: String,
    author: Object,
  },
  inheritAttrs: false,
  emits: ['enlargeText', 'shrinkText'],

  methods: {
    
  },
  computed: {
    newAuthor() {
      //используем внутри компонента
      return this.author.name.split('').reverse().join('');
    }
  }
}
</script>
