<script lang="ts">
  import Header from "$lib/Header.svelte";
  import TaskInput from "$lib/TaskInput.svelte";
  import TasksList from "$lib/TasksList.svelte";
</script>

<svelte:head>
  <title>
    To Do List "SHAIMA"
  </title>
</svelte:head>

<div
  class="p-2 sm:p-4 pt-8 md:p-8 lg:p-12 xl:p-16 flex flex-col gap-10 max-w-screen-lg mx-auto"
>
  <Header />
  <TaskInput/>
  <TasksList/>
  
  
</div>
