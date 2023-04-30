<!-- All types of import, defining components that we use in this file,
defining methods that we use in this file, defining reactive state should be inside script tag -->
<script>
import HomePage from '../components/Home/HomePage.vue'
import axios from 'axios'

export default {
  components: { // List of comma seperated child components that we use in this file
    HomePage
  },
  data() { // List of comma seperated variable(inside return) that we use in this file 
    return {
      username: 'John',
      email: 'john@abc',
      phone: 999999999,
      salary: 50000,
      num: 1,
      firstName: '',
      param: 10,
      twoWayData: 200,
      isShow: true,
      country: '',
      people: [
        { id: 0, name: 'John Doe', friends: ['Scott Lang', 'Tony Stark'] },
        { id: 1, name: 'Jane Doe', friends: ['Hope Van Dyne', 'Pepper Potts'] }
      ],
      names: ['John', 'Jane'],
      parentData: 'Vipul',
      post: [],
      postUsingAxios: []
    }
  },
  methods: { // List of comma seperated functions that we use in this file
    funcGetUserName() {
      return 'User Name Is:-' + this.username
    },
    funcGetUserEmail() {
      return 'User Email Is:-' + this.email
    },
    funcGetUserPhone() {
      return 'User Phone Is:-' + this.phone
    },
    functGetUserIncrementedSalary(salary) {
      return 'User Salary Is:-' + (salary + 10000)
    },
    increment() {
      this.num++
    },
    getFirstName(event) {
      this.firstName = event.target.value
    },
    functionWithParameter(param) {
      this.param = param + 10
    },
    getInput(parameter) {
      return parameter
    },
    updateParentData(data) {
      this.parentData = data
    },
    getPostsUsingFetch() {
      fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => this.post = data)
    },
    getPostsUsingAxios() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          this.postUsingAxios = response.data
        })
    }
  },
  provide: { // here we mention those comma seperated data that we want to pass to successive child components 
    parentProp: 'Vipul'
  },
  // Life Cycle Hooks
  beforeCreate() { // this life cycle hook is called when template blocked has not compiled yet
    this.username = 'John Doe'
    console.log(this.username)
  },
  created() { // this life cycle hook is called when template has fully initialized & compiled (used for api calls, checking logging functionality)
    this.username = 'John Doe USA'
    console.log(this.username)
  },
  beforeMount() { // this life cycle hook is called before Vue renders our content in the browser
    this.username = 'John Doe USA California'
    console.log(this.username)
  },
  mounted() { // this life cycle hook invoked when Vue renders our content in the browser.
    this.$refs.textInputRef.focus();
    console.log(this.$refs.componentRef.homePageData); // using ref we can get components data also
    this.getPostsUsingAxios()
  },
  beforeUpdate() { // this life cycle hook is invoked after the data changes, but before the DOM is patched (before we see the update on the page).
    console.log('Before Update Triggered')
  },
  updated() { // this life cycle hook is invoked when the update has been processed (when we see the update on the page).
    console.log('Updated Triggered')
  },
  beforeUnmount() { // this life cycle hook is invoked right before the app is unmounted (before we stop seeing the app in the browser)
    console.log('Before Unmount Triggered')
  },
  unmounted() { // this life cycle hook is invoked when the update has been processed (when we stop seeing the app in the browser)
    console.log('Unmounted Triggered')
  }
}
</script>

<!--Template is usually in a script tag with type of vue-template to prevent the browser from executing it as JavaScript code. 
Vue never renders the template tag, it’s only used to group elements. -->
<template>
  <div class="about">
    <h1>This is home page</h1>
  </div>

  <!-- Passing data from parent to child & child to parent-->
  <HomePage prop1="Hi I am from Parent" prop2="prop2" prop3="prop3" v-on:parentFunction="updateParentData"
    ref="componentRef" />
  {{ parentData }}
  <!-- Calling the function -->
  <h5>{{ funcGetUserName() }}</h5>
  <h5>{{ funcGetUserEmail() }}</h5>
  <h5>{{ funcGetUserPhone() }}</h5>
  <h5>{{ functGetUserIncrementedSalary(salary) }}</h5>
  <h5>{{ num }}</h5>

  <!-- Event Handling -->
  <!-- Calling a function to increase the value of a number -->
  <button v-on:click="increment">Increase number with external function call</button>
  <!-- We can also write above function as   <button @click="increment">Increment</button>-->
  <!-- Increase the value of a number with inline function call -->
  <button v-on:click="num = num - 1">Decrease number with inline function call</button>
  <h5>First Name:- {{ firstName }}</h5>
  <!-- If we do not pass any parameter it will take $event as first parameter -->
  <p>First name: <input type="text" @input="getFirstName"></p>
  <!-- If we pass some parameter -->
  <input type="text" @input="getInput($event, 'some parameter')">
  <h5>{{ param }}</h5>
  <button v-on:click="functionWithParameter(param)">Function with parameter</button>
  <!-- Multiple events can be passed as comma seperated functions -->

  <!-- Two Way Binding -->
  <p>Two Way Data: {{ twoWayData }}</p>
  <input type="text" v-model="twoWayData">
  <p>Country: {{ country }}</p>
  <select v-model="country">
    <option value="">Please select your Coutry</option>
    <option value="US">United States</option>
    <option value="UK">United Kingdom</option>
    <option value="AU">Australia</option>
  </select>

  <!-- Conditional Rendring -->
  <p v-if="isShow">isShow is true</p>
  <p v-if="!isShow">isShow is false</p>
  <p v-if="num === 0">The number is 0</p>
  <p v-else-if="num > 0">The number is positive</p>
  <p v-else-if="num < 0">The number is negative</p>
  <p v-else>The number is a lie</p>

  <!-- Looping -->
  <div v-for="person in people" :key="person.id">
    <h2>{{ person.name }}</h2>
    <p v-for="friend in person.friends" :key="friend">
      {{ friend }}
    </p>
  </div>
  <p v-for="(name, x) in names" :key="name">
    {{ x }} - {{ name }}
  </p>

  <!-- Template Ref -->
  <p>
    <input type="text" ref="textInputRef" />
  </p>

  <!-- Api Calls using fetch & axios -->
  <button @click="getPostsUsingFetch">Show Posts using fetch</button>
  <h2>{{ post.id }} - {{ post.title }}</h2>
  <p>{{ post.body }}</p>
  <div v-for="post in postUsingAxios" :key="post.id">
    <h2>{{ post.id }} {{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>

  <!-- Router -->
  <button @click="$router.push('/about')">Go To About Page</button>
  <button @click="$router.push('/blogs/10')">Go To 10th Blog Page</button>
</template>

<!-- When we use scoped below style will only apply to this file -->
<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 30vh;
    display: flex;
  }
}
</style>
