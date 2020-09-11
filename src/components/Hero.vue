<template>
  <div id="hero">
    <div class="pic-container">
      <img src="../assets/images/pic.jpg" alt="">
    </div>
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
  background-color: #000;

  .pic-container {
    width: 20vw;
    height: 20vw;
    border-radius: 50%;
    overflow: hidden;

    img {
      height: 100%;
    }
  }
}
</style>