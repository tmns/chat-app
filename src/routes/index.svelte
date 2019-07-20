<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
  }

  body {
    font: 13px Helvetica, Arial;
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
  }

  #messages li {
    padding: 5px 10px;
  }

  #messages li:nth-child(odd) {
    background: #01b3ed;
  }
</style>

<svelte:head>
  <title>Chat App</title>
  <script src="/socket.io/socket.io.js"></script>
	<link href='https://fonts.googleapis.com/css?family=Bungee' rel='stylesheet' type='text/css'>
</svelte:head>

<script>
	import Heading from '../components/Heading.svelte';
</script>

<body>
  <div class="main">
		<Heading text={'Chat App'} />
    <ul id="messages" />
    <form action="">
      <input id="m" autocomplete="off" />
      <button>Send</button>
    </form>
  </div>
</body>
