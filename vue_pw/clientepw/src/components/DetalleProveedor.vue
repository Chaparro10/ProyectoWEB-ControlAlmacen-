<template>
    <div class="Detalle">
       Proveedor Numero: {{clave_proveedor}}
       <br/>
       Nombre: {{proveedores.nombre}}
       <br/>
       RFC: {{proveedores.RFC}}
       <br>
       Direccion: {{proveedores.direccion}}
       <br/>
       Telefono: {{proveedores.telefono}}
       <br>
       Cuadro Observacion: {{proveedores.cuadro_observaciones}}
       <br>
       <img src="https://th.bing.com/th/id/R.3b2a053f096021370e44f57a39a977aa?rik=bzI1BiV4oofd1w&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f8%2fInventory-PNG-Pic.png&ehk=MWXe%2fydZovVFzk%2b7wHywmsJTkm%2f595IwItRIlQUnBzQ%3d&risl=&pid=ImgRaw&r=0" alt="">
      
    </div>
   </template>
   
   <script>
   
   import { URL_DATOS } from "../utils/constantes.js";
   import axios from "axios";
   
    export default{
       name:"DetalleProveedor",
       components:{},
       props:{
           clave_proveedor:Number,
       },
       data:function(){
           return{
               proveedores: [],
           };
       },
       created(){
           this.traeDetalleProveedor();
       },
       methods:{
           traeDetalleProveedor: async function () {
               let a = [];
               await axios.get(URL_DATOS + "/proveedores/" + this.clave_proveedor).then(function (response) {
                   console.log(response);
                   a = response.data[0];
   
               }).catch(function (error) {
                   console.log(error);
               });
               this.proveedores = a;
           }
       },
    };
   </script>
   