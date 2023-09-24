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

<script src="./about-page.js"></script>
<style src="./about-page.css"></style>
  