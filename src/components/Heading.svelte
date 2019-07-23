<style>
  #heading {
    font-family: "Bungee Outline", cursive;
    text-transform: uppercase;
    font-size: 60px;
    font-weight: bold;
    margin: 0;
    top: 0;
    left: -6px;
    color: blue;
    mix-blend-mode: screen;
    position: relative;
    white-space: nowrap;
    -webkit-filter: blur(1px);
    -moz-filter: blur(1px);
    filter: blur(1px);
    -webkit-animation: skew 2s infinite, flash 0.04s infinite;
    -moz-animation: skew 2s infinite, flash 0.04s infinite;
    -o-animation: skew 2s infinite, flash 0.04s infinite;
    animation: skew 2s infinite, flash 0.04s infinite;
  }
  #heading:after,
  #heading:before {
    content: attr(data-text);
    position: absolute;
    mix-blend-mode: screen;
  }
  #heading:after {
    top: 0;
    left: 6px;
    color: blue;
    -webkit-animation: move 1.5s infinite;
    -moz-animation: move 1.5s infinite;
    -o-animation: move 1.5s infinite;
    animation: move 1.5s infinite;
  }
  #heading:before {
    top: -2.4px;
    left: 3.6px;
    color: #b34e7e;
  }

  @media (min-width: 475px) {
    #heading {
      font-size: 80px;
    }
  }

  @-webkit-keyframes skew {
    0% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
    30% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
    30.2% {
      -webkit-transform: skewX(50deg);
      -moz-transform: skewX(50deg);
      -ms-transform: skewX(50deg);
      -o-transform: skewX(50deg);
      transform: skewX(50deg);
    }
    30.4% {
      -webkit-transform: skewX(-50deg);
      -moz-transform: skewX(-50deg);
      -ms-transform: skewX(-50deg);
      -o-transform: skewX(-50deg);
      transform: skewX(-50deg);
    }
    31% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
  }
  @-moz-keyframes skew {
    0% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
    30% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
    30.2% {
      -webkit-transform: skewX(50deg);
      -moz-transform: skewX(50deg);
      -ms-transform: skewX(50deg);
      -o-transform: skewX(50deg);
      transform: skewX(50deg);
    }
    30.4% {
      -webkit-transform: skewX(-50deg);
      -moz-transform: skewX(-50deg);
      -ms-transform: skewX(-50deg);
      -o-transform: skewX(-50deg);
      transform: skewX(-50deg);
    }
    31% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
  }
  @-o-keyframes skew {
    0% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
    30% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
    30.2% {
      -webkit-transform: skewX(50deg);
      -moz-transform: skewX(50deg);
      -ms-transform: skewX(50deg);
      -o-transform: skewX(50deg);
      transform: skewX(50deg);
    }
    30.4% {
      -webkit-transform: skewX(-50deg);
      -moz-transform: skewX(-50deg);
      -ms-transform: skewX(-50deg);
      -o-transform: skewX(-50deg);
      transform: skewX(-50deg);
    }
    31% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
  }
  @keyframes skew {
    0% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
    30% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
    30.2% {
      -webkit-transform: skewX(50deg);
      -moz-transform: skewX(50deg);
      -ms-transform: skewX(50deg);
      -o-transform: skewX(50deg);
      transform: skewX(50deg);
    }
    30.4% {
      -webkit-transform: skewX(-50deg);
      -moz-transform: skewX(-50deg);
      -ms-transform: skewX(-50deg);
      -o-transform: skewX(-50deg);
      transform: skewX(-50deg);
    }
    31% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
  }
  @-webkit-keyframes move {
    0% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
    30% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
    31% {
      -webkit-transform: translateX(-6px);
      -moz-transform: translateX(-6px);
      -ms-transform: translateX(-6px);
      -o-transform: translateX(-6px);
      transform: translateX(-6px);
    }
    33% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
    98% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
    100% {
      -webkit-transform: translateX(6px);
      -moz-transform: translateX(6px);
      -ms-transform: translateX(6px);
      -o-transform: translateX(6px);
      transform: translateX(6px);
    }
  }
  @-moz-keyframes move {
    0% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
    30% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
    31% {
      -webkit-transform: translateX(-6px);
      -moz-transform: translateX(-6px);
      -ms-transform: translateX(-6px);
      -o-transform: translateX(-6px);
      transform: translateX(-6px);
    }
    33% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
    98% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
    100% {
      -webkit-transform: translateX(6px);
      -moz-transform: translateX(6px);
      -ms-transform: translateX(6px);
      -o-transform: translateX(6px);
      transform: translateX(6px);
    }
  }
  @-o-keyframes move {
    0% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
    30% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
    31% {
      -webkit-transform: translateX(-6px);
      -moz-transform: translateX(-6px);
      -ms-transform: translateX(-6px);
      -o-transform: translateX(-6px);
      transform: translateX(-6px);
    }
    33% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
    98% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
    100% {
      -webkit-transform: translateX(6px);
      -moz-transform: translateX(6px);
      -ms-transform: translateX(6px);
      -o-transform: translateX(6px);
      transform: translateX(6px);
    }
  }
  @keyframes move {
    0% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
    30% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
    31% {
      -webkit-transform: translateX(-6px);
      -moz-transform: translateX(-6px);
      -ms-transform: translateX(-6px);
      -o-transform: translateX(-6px);
      transform: translateX(-6px);
    }
    33% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
    98% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
    100% {
      -webkit-transform: translateX(6px);
      -moz-transform: translateX(6px);
      -ms-transform: translateX(6px);
      -o-transform: translateX(6px);
      transform: translateX(6px);
    }
  }
  @-webkit-keyframes flash {
    0% {
      opacity: 1;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
      filter: alpha(opacity=100);
    }
    50% {
      opacity: 0.5;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
      filter: alpha(opacity=50);
    }
  }
  @-moz-keyframes flash {
    0% {
      opacity: 1;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
      filter: alpha(opacity=100);
    }
    50% {
      opacity: 0.5;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
      filter: alpha(opacity=50);
    }
  }
  @-o-keyframes flash {
    0% {
      opacity: 1;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
      filter: alpha(opacity=100);
    }
    50% {
      opacity: 0.5;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
      filter: alpha(opacity=50);
    }
  }
  @keyframes flash {
    0% {
      opacity: 1;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
      filter: alpha(opacity=100);
    }
    50% {
      opacity: 0.5;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
      filter: alpha(opacity=50);
    }
  }
</style>

<script>
  export let text;
</script>

<div id="heading">{text}</div>