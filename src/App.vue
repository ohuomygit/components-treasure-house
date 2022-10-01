<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
body{
  margin: 0;
}
#app {
  width: 800px;
  margin: 0px auto;
  padding: 16px;
  background: rgba(220, 220, 220, 0.5);
  min-height: calc( 100vh - 32px);
}
</style>