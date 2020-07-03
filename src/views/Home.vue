<template>
  <div class="home">
  <!--  <img alt="Vue logo" src="../assets/2.jpg">-->
    <Cart/>
  </div>
</template>

<script>
// @ is an alias to /src

import HelloWorld from '@/components/HelloWorld.vue';
import Cart from '@/components/Cart.vue';


export default {
  name: 'Home',
  components: {
    HelloWorld,Cart
  }
}
</script>
