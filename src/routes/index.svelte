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

	#messageBox {
		height: 600px;
    width: 100%;
    border: 3px solid #01b3ed;
		overflow: auto;
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
</style>

<svelte:head>
  <title>Chat App</title>
  <link
    href="https://fonts.googleapis.com/css?family=Bungee+Outline|Noto+Sans&display=swap"
    rel="stylesheet" />
</svelte:head>

<script>
  import io from "socket.io-client";
  import { fade } from "svelte/transition";
  import Heading from "../components/Heading.svelte";

  const socket = io();

	const placeholder = "Type your message here...";
	let greeting = `You have joined the chat. Use '/nick your_nickname' to set your nickname!`
  let messages = [greeting];
	let message = "";
	// let numberOfConnections = 0;
	let name = 'Anonymous';

  socket.on("message", function(message) {		
		messages = messages.concat(message);
		
		updateScroll();
	});
	
	socket.on("new connection", function(message) {
		messages = messages.concat(message);
		updateScroll();
		// numberOfConnections += 1;
	});

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
		const messageBox = document.getElementById('messageBox');
		messageBox.scrollTop = messageBox.scrollHeight;			
	}
</script>

<body>
  <div class="main">
    <Heading text={'Chat App'} />
    <div id="messageBox">
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
	<!--	<p>There are currently {numberOfConnections} users in the chat</p> -->
  </div>
</body>
