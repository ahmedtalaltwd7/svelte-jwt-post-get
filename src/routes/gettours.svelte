


<svelte:head>
    <title>gettours</title>
</svelte:head>

<script>
    import { onMount } from "svelte";
  
    import Api from "./api/Api"
    import Ex from './api/Exa.svelte';
    let posts=[];
    onMount(async function () {
  try {
   
    const response = await Api.get("api/v1/auth/gettours");
    console.log(response.data.data.tours);
    posts = response.data.data.tours;
  } catch (error) {
   
  }
});

   
  
    const fetchtour = async () => {
    try {
        const config = { headers: { "Content-Type": "application/json" } };
  
  const data = await Api.get("api/v1/auth/gettours", config);
 // const data2 =data.data.user.email;
  
 
    } catch (err) {
      console.log(err);
      //const s=err.response.data.message;
      
      
    
    }



  };
 // fetchtour();
    export let name="kkk"; 
  </script>
  
  <main>
      <!-- <a href="/">home</a> -->
      <button on:click="{fetchtour}">gettours</button>
    <h1>Hello {name}!</h1>
    <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>


    {#each posts as article}
    <div>
      <p>{article.name}</p>
    </div>
  {/each}
  <h2> <Ex/></h2> 
  </main>
  
  <style>
    /* ommitted for brevity */
  </style>