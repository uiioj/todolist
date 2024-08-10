<script lang="ts">
	import dayjs from 'dayjs';


let period = dayjs().format('a') == 'am' ? 'morning' : 'evening';
</script>

<div class="p-16">
  <header class="flex justify-between">
    <div>
      <h1 class="text-4xl text-surface-900 mb-2">Good {period}👋🏻</h1>
      <h2 class="text-2xl text-surface-900/50">
		 Today, {dayjs().format('dddd D MMM YYYY')}
	</h2>
    </div>

    <div class="bg-green-800 w-32 h-12"></div>
  </header>
</div>
