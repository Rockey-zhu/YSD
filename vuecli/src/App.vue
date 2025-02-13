<template>
  <div id="app">
     <div id="nav" >
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/three">Three</router-link> |
      <router-link to="/luckyexcel">luckyexcel</router-link> |
      <router-link to="/vxe-table">vxe-table</router-link> |
      <router-link to="/mavonEditor">mavonEditor</router-link> | 
      <router-link to="/html2canvas">html2canvas打印</router-link> | 
      <router-link to="/SlideVerify">SlideVerify</router-link> 
    </div> 
    <router-view/>
  </div>
</template>

<style lang="less">
*{
    margin: 0px;
    border: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
