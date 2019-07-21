<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
  }

  body {
    font: 13px 'Noto Sans';
    background: #b34e7e;
  }

  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  form {
    background: #01b3ed;
    padding: 3px;
    width: 100%;
  }

  form input {
    border: 0;
    padding: 10px;
    width: 90%;
    margin-right: 0.5%;
    background: #b34e7e;
    color: #fff8b8;
  }

  form button {
    background: #fff8b8;
    border: none;
    padding: 10px 13px;
    color: #01b3ed;
  }

  #messages {
    height: 600px;
    width: 100%;
    border: 3px solid #01b3ed;
    list-style-type: none;
    margin: 0;
    padding: 0;
		font-size: 14px;
  }

  #messages li {
    padding: 5px 10px;
		background: #fff8b8;
		color: #01b3ed;
  }

  #messages li:nth-child(odd) {
    background: #01b3ed;
		color: #fff8b8;
  }

	::placeholder {
		color: #fff8b8;
	}
</style>

<svelte:head>
  <title>Chat App</title>
	<link href="https://fonts.googleapis.com/css?family=Bungee+Outline|Noto+Sans&display=swap" rel="stylesheet">
</svelte:head>


<script>
	import io from 'socket.io-client';
	import { fade } from 'svelte/transition';
	import Heading from '../components/Heading.svelte';

	const socket = io();

	let placeholder = 'Type your message here...';
	let messages = [];
	let message = '';

	socket.on('message', function(message) {
		console.log(`msg ${message} received on client`);
		messages = messages.concat(message);
	});

	function handleSubmit() {
		messages = messages.concat(message);
		socket.emit('message', message);
		message = '';
	}
</script>

<body>
  <div class="main">
		<Heading text={'Chat App'} />
    <ul id="messages">
			{#each messages as message}
			<li transition:fade>{message}</li>
			{/each}
		</ul>
    <form action="">
      <input id="m" autocomplete="off" placeholder={placeholder} bind:value={message} />
      <button on:click|preventDefault={handleSubmit}>Send</button>
    </form>
  </div>
</body>
