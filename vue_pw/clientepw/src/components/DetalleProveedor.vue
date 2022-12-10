<template>
    <div class="DetalleProveedor">
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
   