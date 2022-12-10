<template>
  <div id="app">
    
   <ul>
  <li><a href="/articulos">Articulos</a></li>
  <li><a href="/clientes">Clientes</a></li>
  <li><a href="/proveedores">Proveedores</a></li>
  <li><a href="/entradas">Entradas</a></li>
  <li><a href="/salidas">Salidas</a></li>
  <li><a href="/nosotros.html">Nosotros</a></li>
</ul>
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


//DISEÑO BARRA

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}
//DISEÑO TABLA
table{
  background-color: white;
  text-align: center;
  border-collapse: collapse;
  width: 100%;
}
th,td{
  border: solid 1px black;
  padding: 10px;
  
}
thead{
  background-color: #246355;
  border-bottom: solid 5px #0F362D;
  color:white;
}
tr:nth-child(even){
  background-color: #ddd;
}
tr:hover td{
  background-color: #369681;
  color: white;
}
//DISEÑO BOTONES
.btn{
  background-color: #369681;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  width: 250px;
  border-radius: 20px;
}
.btn{
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    color: white;
}
.btn:hover{
  background-color:#4CAF50;
  
}
//BOTONES ACCIONES
.btnAccion{
    background-color: white;
    color: black;
    border: 2px solid #4CAF50; /* Green */
     margin-left: 10px;
    padding: 7px;
    border-radius: 20%;
}
.btnAccion:hover{
  background-color:#FA5858;
  
}
//DETALLES
.Detalle{
  margin-top: 15px;
  font-size: 20px;
  text-align: center;
}
img{
  border: 1px solid #ddd;
    border-radius: 15px;
    padding: 30px;
    width: 20%;
    margin-top: 100px;
    float: left;
}
//NOSOTROS
body{
  text-align: center;
}
</style>
