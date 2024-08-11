<script lang="ts">
import Header from "$lib/Header.svelte";
import Taskicon from "$lib/Taskicon.svelte";
import {tasks} from "$lib/stores/tasks";
import dayjs from "dayjs";

let title= "";

function addTask(){
    tasks.update((currentTasks) => {
        currentTasks.push({
            title,
            assignedDate: dayjs(),
            isDone: false,
        });

        return currentTasks;
    });
    title ="";
}


</script>

<div class="p-16 flex flex-col gap-10 ">
<Header />
<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
	<div class="input-group-shim"><Taskicon/></div>

	<input bind:value={title} class="!bg-[#fcfdfd]" type="search"  placeholder ="Task title..." />
	<button on:click={addTask} class="variant-filled-primary">Add</button>
</div>

</div>


