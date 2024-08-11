<script lang="ts">
  import { tasks } from "$lib/stores/tasks";
  import dayjs from "dayjs";

  let title = "";
  let datetime= dayjs().add(1, "hour").format('YYY-MM-DDTHH:mm'); // سالفة التيليجرام

  function addTask() {
    tasks.update((currentTasks) => {
      currentTasks.push({
        title,
        assignedDate: datetime,
        isDone: false,
      });

      return currentTasks;
    });
    title = "";
  }
</script>

<div
  class="input-group input-group-divider flex flex-col sm:flex-row justify-between !bg-[#fcfdfd] h-fit"
>
  <input
    bind:value={title}
    class="flex-1"
    type="search"
    placeholder="Task title..."
  />
  <input
  bind:value={datetime}
    class="input sm:w-fit"
    title="Input (datetime-local)"
    type="datetime-local"
  />
  <button on:click={addTask} class="variant-filled-primary p-2 text-center">
    <span class="mx-auto"> Add </span>
  </button>
</div>
