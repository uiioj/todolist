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

      return currentTasks.sort((a: Task, b: Task) =>{
        
       return dayjs(a.assignedDate).unix() - dayjs(b.assignedDate).unix();

      });
    });
    title = "";
  }
</script>

<form
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
  <button type="submit" on:click={addTask} class="variant-filled-primary p-2 text-center {title.trim().length == 0 ? 'variant-filled-surface' : '' } " disabled={title.trim().length == 0}>
    <span class="mx-auto"> Add </span>
  </button>
</form>
