<script lang="ts">
    import dayjs from "dayjs";
    import { tasks } from "$lib/stores/tasks";
    import relativeTime from 'dayjs/plugin/relativeTime'
  
    dayjs.extend(relativeTime);

    export let doneTasks : boolean;
  
  
  </script>

{#each $tasks as task}
{#if task.isDone == doneTasks}
<li
  class="bg-secondary-500 p-2 rounded-lg flex justify-between items-center"
>
  <div>
    <input bind:checked={task.isDone} class="checkbox rounded-md" type="checkbox" />

    <span class="ml-2"> {task.title} </span>
  </div>

  <div class="flex gap-2">
    <button class="btn bg-surface-50 hover:bg-surface-300">
      { dayjs().to(dayjs(task.assignedDate))}
    </button>

    <button class="btn bg-surface-50 hover:bg-surface-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        ><g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          ><circle cx="8" cy="2.5" r=".75" /><circle
            cx="8"
            cy="8"
            r=".75"
          /><circle cx="8" cy="13.5" r=".75" /></g
        ></svg
      >
    </button>
  </div>
</li>
{/if}
{/each}