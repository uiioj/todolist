<script lang="ts">
    import { ListBox, ListBoxItem, popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import dayjs from 'dayjs';


let period = dayjs().format('a') == 'am' ? 'morning🌇' : 'evening🌃';


let comboboxValue: string = 'all';

const popupCombobox: PopupSettings = {
	event: 'click',
	target: 'popupCombobox',
	placement: 'bottom',
	closeQuery: '.listbox-item'
};

				
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


      <span class="capitalize">{comboboxValue}</span>

      <span class=" !m-0">
        <!-- rotate arrow on open -->
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="m6 7l6 6l6-6l2 2l-8 8l-8-8z"/></svg>
      </span>
    </button>
    
<div class="card w-48 shadow-xl py-2" data-popup="popupCombobox">

	<ListBox >
		<ListBoxItem bind:group={comboboxValue} name="medium" value="All tasks">All tasks</ListBoxItem>

		<ListBoxItem bind:group={comboboxValue} name="medium" value="Today's tasks">Today's tasks</ListBoxItem>

		

	</ListBox>
	<div class="arrow bg-surface-100-800-token" />
</div>
					

    </header>