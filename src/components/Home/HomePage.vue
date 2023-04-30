<script>
export default {
  props: ['prop1', 'prop2', 'prop3'], //list of all props in an array
  // prop_name: {
  //   type: prop_type,
  //   required: true/false,
  //   default: default_value
  // }
  inject: ['parentProp'],
  emits: ['parentFunction'],
  data() {
    return {
      homePageData: 'hii'
    }
  }
}
</script>

<template>
  <span>Getting data from parent to child</span>
  <!-- Example of Interpolation -->
  <h4>{{ prop1 }}</h4>
  <h4>{{ prop2 }}</h4>
  <h4>{{ prop3 }}</h4>
  <h4>{{ parentProp }}</h4>
  <button @click="$emit('parentFunction', 'Singh')">Child Se Parent Function Call & Parent Data Change</button>
</template>

<!-- Internal Css to be written inside style tag -->
<style>
/* Here we can write css related to this file */
</style>

<!-- Basic Component Design -->

<!-- 
<template>
    // HTML markup here
</template>
  
<script>
    // component functionality here
</script>
  
<style>
   // markup styling here
</style> 
-->