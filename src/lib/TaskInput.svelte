<script lang="ts">
  import Taskicon from "./Taskicon.svelte";
  import { tasks } from "$lib/stores/tasks";
  import dayjs from "dayjs";

  let title = "";

  function addTask() {
    tasks.update((currentTasks) => {
      currentTasks.push({
        title,
        assignedDate: dayjs().format(),
        isDone: false,
      });

      return currentTasks;
    });
    title = "";
  }
</script>

<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
  <div class="input-group-shim"><Taskicon /></div>

  <input
    bind:value={title}
    class="!bg-[#fcfdfd]"
    type="search"
    placeholder="Task title..."
  />
  <button on:click={addTask} class="variant-filled-primary">Add</button>
</div>
