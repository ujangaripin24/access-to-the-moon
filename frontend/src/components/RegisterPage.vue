<template>
    <h2>Register page</h2>
    <input 
        type="email"
        name="email"
        v-model="email"
        placeholder="Masukkan Email Anda..."
    />
    <br>
    <input 
        type="password"
        name="password"
        v-model="password"
        placeholder="Masukkan Password Anda"
    />
    <br>
    <button
        @click="register"
    >Register Sekarang</button>    
</template>

<script>
import AuthenticationService from './../../../backend/src/services/AuthenticationService.js'
    export default{
        data(){
            return{
                email: 'admin',
                password: '123'
            }
        },
        watch:{
            email(value){
                console.log('email telah berubah menjadi', value)
            }
        },
        methods:{
            async register(){
                const response = await AuthenticationService.register({
                    email: this.email,
                    password: this.password
                })
                console.log(response.data)
            }
        },
        mounted() {
            setTimeout(() => {
                this.email = 'hello world'
            }, 2000)
        }
    }
</script>