<script lang="ts">
    import { ListBox, ListBoxItem, popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import dayjs from 'dayjs';
  import {filter} from "$lib/stores/filter";


let period = dayjs().format('a') == 'am' ? 'morning🌇' : 'evening🌃';



const popupCombobox: PopupSettings = {
	event: 'click',
	target: 'popupCombobox',
	placement: 'bottom',
	closeQuery: '.listbox-item',
  state:(e: Record<string, boolean>) => {
    if (e.state){
       document.getElementById('arrow')?.classList.add('rotate-90');
    } else{
      document.getElementById('arrow')?.classList.remove('rotate-90');

    }
  }
};
//console.log(e)

				
</script>




<header class=" flex justify-between">
    <div>
      <h1 class="text-3xl lg:text-4xl text-surface-800 font-bold mb-2">Good {period}</h1>
      <h2 class="text-md text-surface-800/50 font-semibold">
		 Today, {dayjs().format('dddd D MMM YYYY')}
	</h2>

    </div>


    <!-- svelte-ignore missing-declaration -->

    <button class="btn variant-filled-primary w-36  h-fit py-4 justify-between active:rounded-xl " use:popup={popupCombobox}>


      <span class="capitalize">{$filter}</span>

      <span class=" !m-0 p-1">
        <!-- rotate arrow on open -->
        <svg
        id="arrow"
        class="w-6 rotate-180 transition-all"
        xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 3a1 1 0 0 1 .993.883L19 4v16a1 1 0 0 1-1.993.117L17 20V4a1 1 0 0 1 1-1m-12.707.293a1 1 0 0 1 1.32-.083l.094.083l8 8a1 1 0 0 1 .083 1.32l-.083.094l-8 8a1 1 0 0 1-1.497-1.32l.083-.094L12.586 12L5.293 4.707a1 1 0 0 1 0-1.414"/></svg>
        
      </span>
    </button>
    
<div class="card w-48 shadow-xl py-2" data-popup="popupCombobox">

	<ListBox >
		<ListBoxItem bind:group={$filter} name="medium" value="All">All </ListBoxItem>

		<ListBoxItem bind:group={$filter} name="medium" value="Today">Today</ListBoxItem>

		

	</ListBox>
	<div class="arrow bg-surface-100-800-token" />
</div>
					

    </header>