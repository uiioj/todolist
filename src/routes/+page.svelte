<script lang="ts">
import Header from "$lib/Header.svelte";
import Taskicon from "$lib/Taskicon.svelte";
import {name} from "$lib/stores/name";

name.update((name: string) => {
    return name + '1';
});

console.log($name);


</script>

<div class="p-16 flex flex-col gap-10 ">
<Header />
<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
	<div class="input-group-shim"><Taskicon/></div>
	<input class="!bg-[#fcfdfd]" type="search"  placeholder ="Task title..." />
	<button class="variant-filled-primary">Add</button>
</div>

</div>


