<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		font: 13px Helvetica, Arial;
		background: #B34E7E;
	}

	.container {
		width: 100%;
		margin: 140px 10px;
	}

	form {
		background: #01B3ED;
		padding: 3px;
		width: 100%;
	}

	form input {
		border: 0;
		padding: 10px;
		width: 90%;
		margin-right: .5%;
		background: #B34E7E;
	}

	form button {
		width: 9%;
		background: #FFF8B8;
		border: none;
		padding: 10px;
	}

	#messages {
		height: 600px;
		width: 100%;
		border: 3px solid #01B3ED;
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	#messages li {
		padding: 5px 10px;
	}

	#messages li:nth-child(odd) {
		background: #01B3ED;
	}
</style>

<svelte:head>
	<title>Chat App</title>
	<script src="/socket.io/socket.io.js"></script>
</svelte:head>

<body>
	<div class="container">
		<ul id="messages"></ul>
		<form action="">
			<input id="m" autocomplete="off" /><button>Send</button>
		</form>	
	</div>
</body>
