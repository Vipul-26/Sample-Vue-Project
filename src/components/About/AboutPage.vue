<script>
import { reactive } from "vue";
export default {
    methods: {
        handleSubmit() {
            alert("form submitted successfully with " + this.form.firstName + " " + this.form.lastName + " " + this.form.email);
        },
    },
    setup() {
        const form = reactive({
            firstName: "",
            lastName: "",
            email: "",
        });
        return {
            form,
        };
    }
}
</script>

<template>
    <div class="about">
        <h1>This is an about page which shows a form</h1>
        <form @submit.prevent="handleSubmit" class="checkout-form">
            <h1>Checkout Form</h1>
            <div class="address__field">
                <label for="firstName">First name</label>
                <input type="text" id="firstName" v-model="form.firstName" required />
            </div>
            <div class="address__field">
                <label for="lastName">Last name</label>
                <input type="text" id="lastName" v-model="form.lastName" required />
            </div>
            <div class="address__field">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="form.email" required />
            </div>
            <div class="address__field">
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
</template>
  
<style scoped>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }

    .checkout-form {
        margin: 5px auto;
        padding: 10px;
        max-width: 500px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .address__field {
        padding-bottom: 10px;
        width: 250px;
        text-align: left;
    }

    label {
        display: block;
        font-weight: bold;
    }

    input {
        padding: 10px;
        width: 230px;
        border: 1px solid #fff;
        border-radius: 5px;
        outline: 0;
        background: #f8edcf;
    }

    button {
        margin-top: 30px;
        padding: 10px;
        width: 250px;
        color: #f8edcf;
        border: 1px solid #fff;
        border-radius: 5px;
        outline: 0;
        background: #434141;
    }
}
</style>
  