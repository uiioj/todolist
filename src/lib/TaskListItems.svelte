<script lang="ts">
  import dayjs from "dayjs";
  import { tasks } from "$lib/stores/tasks";
  import relativeTime from "dayjs/plugin/relativeTime";
  import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';
  import { slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

	import { scale } from 'svelte/transition';
  import {filter} from '$lib/stores/filter';



		


  const modalStore = getModalStore();
  dayjs.extend(relativeTime);

  //console.log('response:', r),

  export let doneTasks: boolean;

  function confirmDelete(task : Task){
   

       const modal: ModalSettings = {
	type: 'confirm',
	// Data
	title: 'Are you sure you want to delete?',
	body: `The task: "${task.title}" will be deleted`,


  buttonTextCancel : "Cancel",
  buttonTextConfirm : "Confirm",

  // TRUE if confirm pressed, FALSE if cancel pressed
	response: (r: boolean) => {
 if (r) {
    tasks.update((currentTasks) => {
      let index = currentTasks.indexOf(task);
      currentTasks.splice(index,1);
      return currentTasks;
    })
 }
  },
  
};
modalStore.trigger(modal);
    

  }
</script>



{#each $tasks as task}
  {#if task.isDone == doneTasks } 
  <!-- هنا اللي مخرب علي -->
    <li
    transition:scale={{ duration: 300, opacity: 1, start: 0.5, easing: quintOut }}

    
      class="bg-secondary-500 p-2 rounded-lg flex justify-between items-center h-13"
    >
      <div>
        <input
          bind:checked={task.isDone}
          class="checkbox rounded-md"
          type="checkbox"
        />

        <span class="ml-2"> {task.title} </span>
      </div>

      <div class="flex gap-2">
        <button class="btn bg-surface-50 hover:bg-surface-300">
          {dayjs().to(dayjs(task.assignedDate))}
        </button>


        <!-- ?\زر الحذف  -->
        <button 
        on:click={() => confirmDelete(task)}
        class="btn bg-surface-50 hover:bg-surface-300">
          <svg
            class="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"
            /></svg
          >
        </button>
      </div>
    </li>
  {/if}
{/each}
