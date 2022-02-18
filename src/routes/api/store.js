import { writable } from 'svelte/store';

export const pokemon = writable({});

export const submit22 = async () => {
    setTimeout(5000);

    
    return{lastupdate: new Date()};
    
}
