<template>
  <div id="app">
    <div id="nav">
           <router-link to="/">AllProducts</router-link> 
      <router-link to="/about">Smartphones</router-link>
       <router-link to="/notebook">Notebooks</router-link>
        <button class="add-button"> <router-link to="/Add">Cart</router-link></button>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
html{
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #e1e1e1;

}
body{
  height:100%;
  }
.home{height: 100%;}
#nav {
  padding: 30px;
  background: #000000;
  button{
    background: #14a0f1;
  }

  a {
    font-weight: bold;
    color: #fff;
text-decoration:none;
    &.router-link-exact-active {
      color: #14a0f1;

    }
  }
}
</style>
