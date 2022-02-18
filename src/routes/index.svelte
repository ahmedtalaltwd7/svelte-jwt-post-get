<!-- <script context="module">

import {push} from 'svelte-spa-router'
import { writable } from 'svelte-local-storage-store'

    // const instance = axios.create({
    //     baseURL: 'http://localhost:5000/api/v1/auth'
    //   });



       
        // if (response.status === 200) {
        //     axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
 
        //     await push('/');
        // }
    
</script> -->








<!-- svelte-ignore module-script-reactive-declaration -->
<!-- svelte-ignore module-script-reactive-declaration -->
<!-- svelte-ignore module-script-reactive-declaration -->

<script>
 import Api from './api/Api';
 import Ex from './api/Exa.svelte';
 import { onMount } from "svelte";


// console.log($pokemon);
 let data3="";
onMount(async function () {
    try {
      const res = await Api.get("api/v1/auth/secretcontent");
      data3= res.data.data.email;
    console.log(res.data.data.email);
    
    } catch (err) {
      console.log(err);  
     data3="you must login to access this secret content";
    }
});












   let data2="";
let email = '', password = '';

export const submit = async () => {
    const config = { headers: { "Content-Type": "application/json" } };
  const body = { email, password };
  const data = await Api.post("api/v1/auth/login", body, config);
   data2 =data.data.user.email;
  
}

export const submit2 = async () => {
    const config = { headers: { "Content-Type": "application/json" } };
  
  const data = await Api.get("api/v1/auth/gettours", config);
   data2 =data.data.user.email;
  
}



    let color = "red";
const toggle=()=>{
    color = color==='blue'?'red':'blue'
}
     
    // console.log(data);



    const logoutUser = async () => {

try {
  const res = await Api.get("api/v1/auth/logout");
 
  console.log(res);
 
} catch (err) {
  console.log(err.response.data.message);
}
};








</script>

<input class="w-full rounded-md text-lg p-4 border-2 border-gray-200"/>


<!-- <a href="/gettours">gettours</a> -->
<h1 class="text-4xl text-center my-8 uppercase">SvelteKit Pokedex</h1>
<h1 style="color:{color}">{color}</h1>
<button on:click={toggle}>Toggle</button>
<button on:click={logoutUser}>logoutUser</button>
<!-- <button on:click={getSecret}>getSecret</button> -->
<main class="form-signin">
    <form on:submit|preventDefault={submit}>
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating">
            <input bind:value={email} type="email" class="form-control" placeholder="name@example.com">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label>Email address</label>
        </div>

        <div class="form-floating">
            <input bind:value={password} type="password" class="form-control" placeholder="Password">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label>Password</label>
        </div>
        <h1 style="color:{color}">ggg{data2}</h1>
        <h1 style="color:{color}">ggg{data3}</h1>
      <h2> <Ex/></h2> 
        <button class="w-100 btn btn-lg btn-primary" type="submit" on:click={submit2}>Submit</button>
    </form>
</main>
<style>

 
</style>