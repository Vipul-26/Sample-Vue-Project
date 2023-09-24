import { reactive } from 'vue'
export default {
  methods: {
    handleSubmit() {
      alert(
        'form submitted successfully with ' +
          this.form.firstName +
          ' ' +
          this.form.lastName +
          ' ' +
          this.form.email
      )
    }
  },
  setup() {
    const form = reactive({
      firstName: '',
      lastName: '',
      email: ''
    })
    return {
      form
    }
  }
}
