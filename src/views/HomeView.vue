<!-- All types of import, defining components that we use in this file,
defining methods that we use in this file, defining reactive state should be inside script tag -->
<script>
import HomePage from '../components/HomePage/HomePage.vue'
import axios from 'axios'
import myMixin from '../mixins/myMixin'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: { // List of comma seperated child components that we use in this file
    HomePage
  },
  // props: ['prop1', 'prop2', 'prop3'], // list of all props in an array or we can use like below
  // prop_name: {
  //   type: prop_type,
  //   required: true/false,
  //   default: default_value
  // },
  // props: {
  //   parentFunction: Function // type for Function
  // },
  // inject: ['parentProp', 'abcde'], // those props which we want to pass from parent to child to sub chiled and so on || props drillling
  // emits: ['parentFunction'], // parents functions which call here
  mixins: [myMixin], // comma seperated mixins, if mixins and the components data/methods are same then mixins takes less priority
  data() { // List of comma seperated variable(inside return) that we will use in this file 
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
      postUsingAxios: [],
      isActive: true,
      hasError: true,
      rawHtml: "<span style='color: red'>This should be red.</span>",
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      },
      kilometers: 0,
      meters: 0,
      news: [],
      posts: []
    }
  },
  methods: { // List of comma seperated functions that we use in this file, same as mapDispatchToProps
    ...mapActions(['getNews', 'getPosts']),
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
    },
  },
  provide: { // here we mention those comma seperated data that we want to pass to successive child components(props drilling)
    parentProp: 'Vipul',
    abcde: 'jfgjf'
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
  async mounted() { // this life cycle hook invoked when Vue renders our content in the browser.
    this.$refs.textInputRef.focus();
    console.log(this.$refs.componentRef.homePageData); // using ref we can get components data also
    this.getPostsUsingAxios();
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
  },
  computed: { // Whenever re-render happens below function will not call again & again until any value used here is changed (return cached data)
    ...mapGetters(['getNewsData', 'getPostsData']), // same as mapStateToProps
    publishedBooksMessage() {
      return this.author.books.length > 0 ? 'Yes' : 'No'
    }
  },
  watch: { //
    kilometers: function (val) {
      this.kilometers = val;
      this.meters = val * 1000;
    },
    meters: function (val) {
      this.kilometers = val / 1000;
      this.meters = val;
    }
  }
}
</script>

<!--Template is usually in a script tag with type of vue-template to prevent the browser from executing it as JavaScript code. 
Vue never renders the template tag, it’s only used to group elements. -->
<template>
  <!-- Noraml Coding -->
  <div class="about">
    <h1>This is home page</h1>
  </div>

  <!-- Vuex -->
  <button @click="getNews">Get News</button>
  <button @click="getPosts">Get Posts</button>

  <!-- Passing data from parent to child & child to parent-->
  <!-- On click of parentFunction passing from P to C it calls updateParetData method in Parent -->
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
  <!-- We can also write above function as <button @click="increment">Increment</button>-->
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
  <!-- On Outfocus data will be visible -->
  <!-- <input type="text" v-model.lazy="twoWayData"> -->
  <!-- Trim unwanted spaces -->
  <!-- <input type="text" v-model.trim="twoWayData"> -->
  <!-- It will take number only -->
  <!-- <input type="text" v-model.number.lazy="twoWayData"> -->
  <p>Country: {{ country }}</p>
  <select v-model="country">
    <option value="">Please select your Coutry</option>
    <option value="US">United States</option>
    <option value="UK">United Kingdom</option>
    <option value="AU">Australia</option>
  </select>

  <!-- Conditional Rendring -->
  <p v-if="isShow">isShow is true</p>
  <p v-show="!isShow">isShow is false using v-show</p>
  <p v-if="!isShow">isShow is false</p>
  <p v-if="num === 0">The number is 0</p>
  <p v-else-if="num > 0">The number is positive</p>
  <p v-else-if="num < 0">The number is negative</p>
  <p v-else>The number is a lie</p>

  <!--  While v-if will stop something being rendered if the expression within it returns false , v-show will still render the 
  element - but it will apply display: none to the element. -->

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

  <!-- Mixins -->
  <h1>{{ this.counter }}</h1>
  <button @click="this.increaseCounterByOne()">
    Call a method from mixins to increase the value of counter by one
  </button>
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

  <!-- Class Binding -->
  <div class="static" :class="{ 'active': isActive, 'text-danger': hasError }">Class Binding</div>
  <div :class="[isActive ? 'active' : '', 'errorClass']"></div>

  <!-- Html Binding || dangerouslyHtml -->
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>

  <!-- Computed Property -->
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>
  <br>

  <!-- Watchers -->
  Kilometers : <input type="text" v-model="kilometers">
  <br>
  Meters : <input type="text" v-model="meters">

  <!-- Slots is same as children in React-->

  <!-- Passing data from one component to another using :dataName -->

  <!-- Teleport -->
  <Teleport to="#teleported-content">
    <h1>Hii I am Teleported</h1>
  </Teleport>
</template>

<!-- When we use scoped below style will only apply to this file -->
<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 30vh;
    display: flex;
  }

  .static {
    position: static;
  }

  .active {
    font-size: 20px;
  }

  .text-danger {
    color: red;
  }
}
</style>
