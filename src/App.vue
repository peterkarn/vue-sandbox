<template>
  <div class="container">
    <!-- <div class="Todo" v-show="!sendForm">
      <hr>
      <app-progressbar
        :total="info.length"
        :completed="activeFields"
      ></app-progressbar>
      <hr>
      <app-validated-input 
       v-for="item, i in info" 
       :name="info[i].label" 
       :value="info[i].value"
       :valid="info[i].valid"
       @inputting="onInput(i, $event)"
       @input="calculateActiveFields"
       :key="i">
      </app-validated-input>
		<hr>
    <br>
    <button 
    class="btn btn-primary" 
    :disabled="isComplete" 
    @click="sendForm = true">Send</button>
		</div>
    <table class="table" v-show="sendForm">
      <th>
        <td colspan="2">
          Forza Italia 🇮🇹
        </td>
      </th>
      <tr 
      v-for="item, i in info"
      :key="i">
        <td>{{info[i].label}}</td>
        <td>{{info[i].value}}</td>
      </tr>
    </table> -->
  </div>

  <h3>Todo component</h3>
  <ul>
    <app-todo-item v-for="item in groceryList" v-bind:key="item.id" v-bind:todo="item"></app-todo-item>
  </ul>
  <hr>

  <h3>rawHtml</h3>
  <textarea style="margin-bottom: 30px" v-model="rawHtml" placeholder="Type any html here"></textarea>
  
  <div v-html="rawHtml"></div>
  <br>
  <button v-bind:disabled="isButtonDisabled">Button</button>
  <hr>

  <h3>Interactive link</h3>
  <a v-bind:[attributeName]="'https://' + url" target="_blank">{{url}} </a> <br>
  <input type="text" v-model.lazy="url">
  <hr>

  <h3>Dynamic Event</h3>
  <input type="text" v-model="eventOn">
  <button @[eventOn]="alert"> {{ eventOn }}</button>
  <hr>

  <h3>Methods</h3>
  <div style="font-size: 30px;" class="texxt-center font-weight-bold">
    {{ counter }}
  </div>
  <button @click="increment"> + 1</button>
  <hr>

  <h3>Computed</h3>
  <p>Is Shopping List Done? {{ isDone }}</p>
  <hr>
  
  <h3>Watchers</h3>
  <p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>
  <hr>

  <h3>Clases</h3>
  <!-- object syntax  -->
  <div
  class="static"
  :class="classObject"
  >Object syntax</div>
  <br>
  <!-- array syntax -->
  <div :class="[activeClassArraySyntax, errorClassArraySyntax]">
    Array syntax
  </div>
  <br>
  <!-- inline styles binding -->
  <div :style="objectWithStyles">
    Inline Styles
  </div>
  <input 
  type="text" 
  placeholder="Input color"
  v-model="objectWithStyles.color"
  >
  <hr>
  <h3>V-for</h3>
  <h6>instance is ARRAY</h6>
  <ul>
    <li 
      v-for="(item, i) in arrayOfObjects"
      :key = item.id
    >
     {{ i + 1}} is {{ item.label }}
    </li>
  </ul>
  <br>
   <h6>instance is OBJECT</h6>
  <ul>
    <li 
      v-for="(value, key) in someObject"
      :key = value.key
    >
     {{ key }} is {{ value }}
    </li>
  </ul>
  <hr>

  <h3>Filtered array</h3>
  <ul>
    <li 
      v-for="(number, i) in evenNumbers"
      :key="i"
    >
    {{number}}</li>
  </ul>
   <hr>

  <h3>Event handler</h3>
  <button
  @click="greet">
    Greet
  </button>
  <hr>

  <h3>Checkboxed array</h3>
    <input v-model="forCheckboxes" type="checkbox" value="John" id="John">
    <label for="John">John</label>
    <input v-model="forCheckboxes" type="checkbox" value="Jack" id="Jack">
    <label for="Jack">Jack</label>
    <input v-model="forCheckboxes" type="checkbox" value="Jim" id="Jim">
    <label for="Jim">Jim</label>
    <p>{{ forCheckboxes }}</p>
   <hr>

   <h3>Select</h3>
    <div id="v-model-select" class="demo">
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>
</div>
<hr>
<h3>Test Component</h3>
<div :style="{fontSize: postFontSize + 'em'}">
  <blog-post
    v-for="post in posts"
    :key="post.id"
    :id="post.id"
    :title="post.title"
    :day="post.day"
    @enlargeText="postFontSize += 0.1"
    @shrinkText="postFontSize -= 0.1"
  >
  {{post.text}}
  </blog-post>
</div>

</template>

<script>
  import AppAction from './components/Action.vue';
  import AppValidatedInput from './components/ValidatedInput.vue';
  import AppProgressbar from './components/Progressbar.vue';
  import AppTodoItem from './components/AppTodoItem.vue';
  import BlogPost from './components/BlogPost.vue';
  import axios from 'axios';

  export default {
    components: {
      AppAction,
      AppValidatedInput,
      AppProgressbar,
      AppTodoItem,
      BlogPost
    },
    data() {
      return {
        postFontSize: 1,
        posts: [
          {id: 1, title: 'My first Post', day: 'Mon', text: "aaa Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, corrupti?"},
          {id: 2, title: 'My sec Post', day: 'Tue', text: "bbb Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, corrupti?"},
          {id: 3, title: 'My third Post', day: 'Wed', text: "ccc Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, corrupti?"},
        ],
        selected: [],
        forCheckboxes: [],
        numbers: 
        [
          1, 2, 3, 4, 5 
        ],
        someObject: 
        {
          //key       value
          'point-1': 'first item from object',
          'point-2': 'second item from object',
          'point-3': 'third item from object',
        },
        arrayOfObjects: 
        [
          {id: 1, label: 'Some Text'},
          {id: 2, label: 'Other Text'},
          {id: 3, label: 'Different Text3'},
        ],
        objectWithStyles: {
          color: 'red',
          fontSize: '18px'
        },
        activeClassArraySyntax: 'text-success',
        errorClassArraySyntax: 'text-danger',
        isActive: false,
        hasError: true,
        question: '',
        answer: 'Questions usually contain a question mark. ;-)',
        eventOn: 'click',
        attributeName: 'href',
        url: 'google.com',
        isButtonDisabled: true,
        rawHtml: '<div style="border: 3px dashed tomato">Your html will be aplied here</div>',
        groceryList: [{
            id: 0,
            text: 'Vegetables'
          },
          {
            id: 1,
            text: 'Cheese'
          },
          {
            id: 2,
            text: 'Whatever else humans are supposed to eat'
          }
        ],
        todoList: [{
            title: 'First action',
            current: 0,
            max: 5
          },
          {
            title: 'Other work',
            current: 0,
            max: 10
          },
          {
            title: 'Some fun',
            current: 0,
            max: 7
          }
        ],
        info: [{
            label: 'Name',
            value: '',
            pattern: /^[a-zA-Z ]{2,30}$/
          },
          {
            label: 'Phone',
            value: '',
            pattern: /^[0-9]{7,14}$/
          },
          {
            label: 'Email',
            value: '',
            pattern: /.+/
          },
          {
            label: 'Some Field 1',
            value: '',
            pattern: /.+/
          },
          {
            label: 'Some Field 2',
            value: '',
            pattern: /.+/
          }
        ],
        activeFields: 0,
        sendForm: false,
        message: 'Hello Peter',
        counter: 1
      }
    },
    watch: {
      question(newQuestion, oldQuestion) {
        if (newQuestion.indexOf('?') > -1) {
          this.getAnswer()
        }
      }
    },
    methods: {
      greet(e) {
        alert (e.target.innerHTML)
        e.target.innerHTML = 'done'
        e.target.disabled = true
      },  
      getAnswer() {
        this.answer = 'Thinking...'
        axios
          .get('https://yesno.wtf/api')
          .then(response => {
            this.answer = response.data.answer
          })
          .catch(error => {
            this.answer = 'Error! Could not reach the API. ' + error
          })
      },
      increment() {
        this.counter++
      },
      alert() {
        alert(this.eventOn)
      },
      onInput(i, val) {
        const field = this.info[i];
        field.value = val.trim();
        field.activated = true;
        field.valid = field.pattern.test(val);
      },
      reverseMessage() {
        this.message = this.message
          .split('')
          .reverse()
          .join('')
      }
    },
    computed: {
      evenNumbers() {
        return this.numbers.filter(number => number % 2 === 0)
      },
      isDone() {
        return this.groceryList.length <= 0 ? 'Yes' : 'No'
      },
      isComplete() {
        return this.activeFields < this.info.length
      },
      calculateActiveFields() {
        let i = 0;
        this.info.forEach(element => {
          if (element.valid) {
            i++
          }
        });
        return this.activeFields = i;
      },
      classObject() {
        return {
          'alert-success': this.isActive && !this.hasError, 
          //возвращаем класс 'alert-success' если выполнено условие 
          'alert-danger': !this.isActive && this.hasError
        }
  }
    },
    created() {
      this.info.forEach(field => {
        field.valid = false;
        field.activated = false;
      })
    }
  }
</script>
