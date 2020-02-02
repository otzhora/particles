<template>
  <div id="app">
    <div id="text">0 FPS</div>
    <div id="particlesContainer"></div>
  </div>
</template>

<script>
export default {
  name: "app",
  mounted() {
    const particles = require("./particles");
    const P5 = require("p5");
    new P5(particles.main);
  }
};
</script>

<style>
#app {
  margin: 0;
}

body {
  margin: 0;
}
#particlesContainer {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;
}

#text {
  position: absolute;
  margin: 0;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #eeeeee;
  font-size: 128px;
  font-weight: bold;
  z-index: 10;
}
</style>

