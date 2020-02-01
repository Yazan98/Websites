<template>
  <div id="counter-container">
    <h1>Welcome To Vue Counter</h1>
    <h5>The First Website</h5>
    <p>The Counter is : {{ count }}</p>
    <button type="button" @click="count++">Increse Count</button>
  </div>
</template>

<script>
export default {
  el: '#counter-container',
  data: function () {
    return {
      count: 0
    }
  }
}
</script>
