<script>
    import { writable, derived } from 'svelte/store';
    import {pokemon} from "../stores/storep"
    import { fly } from 'svelte/transition';
    const package_name = writable('');
    const download_count = derived(
        package_name,
        ($package_name, set) => {
            fetch('https://api.npmjs.org/downloads/point/last-week/' + $package_name)
                .then(response => response.json())
                .then(data => set(data.downloads || 0));
    
            return () => {
                // We override the `set` function to eliminate race conditions
                // This does *not* abort running fetch() requests, it only prevents
                // them from overriding the store.
                set = () => {}
            }
        },
        0 // <- default value before first API call
    );

 //   console.log($pokemon)
    </script>
    


    <input bind:value={$package_name}> has {$download_count} weekly downloads.
    <div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
    {#each $pokemon as pokeman}
    <a class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center" href={`/pokemon/${pokeman.id}`} transition:fly>
   
    <img class="h-40 w-40 " src={pokeman.image} alt={pokeman.name}/>
    <h2 class="uppercase text-2xl">{pokeman.id}. {pokeman.name}</h2>
</a>
        {/each}

    </div>