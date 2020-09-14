<template>
  <div id="hero" class="d-flex flex-column justify-content-center align-items-center">
    <div class="col"></div>
    <div class="col">
      <div class="pic-container">
        <img src="../assets/images/pic.jpg" alt="">
      </div>
    </div>
    <div class="col">
      <h3><vk-icons-code></vk-icons-code> Miguel Joseph Espiritu</h3>
    </div>
    <div class="col"></div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
#hero {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  background-color: #4d4d4d;

  .pic-container {
    width: 20vw;
    height: 20vw;
    border-radius: 50%;
    overflow: hidden;
    margin: auto;

    img {
      max-width: unset;
      height: 100%;
    }
  }
}
</style>