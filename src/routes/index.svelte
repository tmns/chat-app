<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
  }

  body {
    font: 13px "Noto Sans";
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
		display: flex;
  }

  form input {
    border: 0;
    padding: 10px;
    width: 90%;
    margin-right: 0.5%;
    background: #b34e7e;
    color: #fff8b8;
		font-size: 14px;
	}

	@media screen and (device-aspect-ratio: 375/667) {
		form input {
			font-size: 16px;
		}
	}

  form button {
    background: #fff8b8;
    border: none;
    padding: 10px 15px;
    color: #01b3ed;
  }

	#chatWindow {
		height: 450px;
    width: 100%;
    border: 3px solid #01b3ed;
		overflow: auto;
	}

	@media (min-height: 845px) {
		#chatWindow {
			height: 600px;
		}
	}

  #messages {
		align-self: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
    font-size: 14px;
  }

  #messages li {
    padding: 5px 10px;
		border-radius: 1em;
		margin: 0.5em auto;
		width: 95%;
    background: #fff8b8;
    color: #01b3ed;
		overflow-wrap: break-word;
  }

  #messages li:nth-child(odd) {
    background: #01b3ed;
    color: #fff8b8;
  }

  ::placeholder {
    color: #fff8b8;
  }

	#numUsers {
		color: #fff8b8;
		padding: 1em;
		font-size: 14px;
	}
</style>

<svelte:head>
  <title>Chat App</title>
  <link
    href="https://fonts.googleapis.com/css?family=Bungee+Outline|Noto+Sans&display=swap"
    rel="stylesheet" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>

<svelte:window on:unload={emitUserDisconnect}/>

<script>
  import io from "socket.io-client";
	import { fade } from "svelte/transition";
	
	import Heading from "../components/Heading.svelte";

	const socket = io();

	const placeholder = "Type your message here...";
	const greeting = `You have joined the chat. Use '/nick your_nickname' to set your nickname!`
  let messages = [greeting];
	let message = "";
	let name = 'Anonymous';
	let numUsersConnected = 0;

  socket.on("message", function(message) {		
		messages = messages.concat(message);
		updateScroll();
	});
	
	socket.on("user joined", function({message, numUsers}) {
		messages = messages.concat(message);
		numUsersConnected = numUsers;
		updateScroll();
	});

	socket.on("user left", function(numUsers) {
		numUsersConnected = numUsers;
		updateScroll();
	});

	function emitUserDisconnect() {
		socket.emit('user disconnect', name); 
	}

  function handleSubmit() {
		message = message.trim();
		
		if (message == '') {
			return;
		}

		let messageString = `${name}: ${message}`;

		if (message.slice(0, 5) == '/nick') {
			let newName = message.slice(6);
			messageString = `Server: ${name} changed their nickname to ${newName}`;
			name = newName;
		}

		messages = messages.concat(messageString);
		socket.emit("message", messageString);

		updateScroll();

		message = "";
	}
	
	function updateScroll() {
		const chatWindow = document.getElementById('chatWindow');
		setTimeout(() => {
			chatWindow.scrollTop = chatWindow.scrollHeight;			
		}, 0);
	}
</script>

<body>
  <div class="main">
    <Heading text={'Chat App'} />
    <div id="chatWindow">
      <ul id="messages">
        {#each messages as message}
          <li transition:fade>{message}</li>
        {/each}
      </ul>
    </div>
    <form action="">
      <input id="m" autocomplete="off" {placeholder} bind:value={message} />
      <button on:click|preventDefault={handleSubmit}>Send</button>
    </form>
		<p id="numUsers">There {numUsersConnected == 1 ? 'is' : 'are'} {numUsersConnected} {numUsersConnected == 1 ? 'user' : 'users'} currently chatting!</p>
  </div>
</body>
