<script lang="ts">
  import dayjs from "dayjs";
  import { tasks } from "$lib/stores/tasks";
  import relativeTime from 'dayjs/plugin/relativeTime'
  import TaskListItems from "$lib/TaskListItems.svelte";
  import {fade } from "svelte/transition";


  dayjs.extend(relativeTime);


</script>

{#if $tasks.length == 0}
<div class="flex flex-col justify-center items-center p-14a h-[50dvh]">
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <img src="/woow.svg" class="w-48 h-48 " alt="picture"/>
  No tasks
</div>

{:else}
{#if $tasks.filter((task) => !task.isDone).length > 0 }
<ol transition:fade class="gap-2 flex flex-col">
    <h3> Remaining tasks:</h3>
   <TaskListItems doneTasks ={false}/>
</ol>
{/if}


{#if $tasks.filter((task) => task.isDone).length > 0 }
<ol transition:fade class="gap-2 flex flex-col">
    <h3>  Completed tasks:</h3>
  <TaskListItems doneTasks ={true}/>
</ol>
{/if}
{/if}


