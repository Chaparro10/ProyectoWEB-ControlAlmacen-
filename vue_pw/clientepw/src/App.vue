<template>
  <div id="app">
    <nav>
      <router-link to="/articulos">ARTÍCULOS</router-link> |
      <router-link to="/clientes">CLIENTES</router-link> |
      <router-link to="/proveedores">PROVEEDORES</router-link> |
      <router-link to="/entradas">ENTRADAS</router-link> |
      <router-link to="/salidas">SALIDAS</router-link>
    
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/*
.ArticuloLista{
  align-items: center;
  justify-content: center;
  margin:15em;
}
*/
nav {
  padding: 30px;
   margin-left: 20px;
   margin-right: 50px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
     
    }
  }
}
</style>
