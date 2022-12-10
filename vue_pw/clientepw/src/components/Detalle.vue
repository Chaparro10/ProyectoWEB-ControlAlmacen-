<template>
 <div class="Detalle">
    Articulo Numero: {{clave_articulo}}
    <br />
    Descripcion: {{articulos.Descripcion}}
    <br/>
    Cantidad: {{articulos.cantidad}}
   
 </div>
</template>

<script>

import { URL_DATOS } from "../utils/constantes.js";
import axios from "axios";

 export default{
    name:"Detalle",
    components:{},
    props:{
        clave_articulo:Number,
    },
    data:function(){
        return{
            articulos: [],
        };
    },
    created(){
        this.traeDetalle();
    },
    methods:{
        traeDetalle: async function () {
            let a = [];
            await axios.get(URL_DATOS + "/articulos/" + this.clave_articulo).then(function (response) {
                console.log(response);
                a = response.data[0];

            }).catch(function (error) {
                console.log(error);
            });
            this.articulos = a;

        }
    },
 };
</script>
