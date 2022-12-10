<template>
 <div class="DetalleCliente">
    Cliente Numero: {{clave_cte}}
    <br />
    Nombre: {{clientes.nombre}}
    <br/>
    Direccion: {{clientes.direccion}}
    <br/>
     RFC: {{clientes.RFC}}
   
 </div>
</template>

<script>

import { URL_DATOS } from "../utils/constantes.js";
import axios from "axios";

 export default{
    name:"DetalleCliente",
    components:{},
    props:{
        clave_cte:Number,
    },
    data:function(){
        return{
            clientes: [],
        };
    },
    created(){
        this.traeDetalleCliente();
    },
    methods:{
        traeDetalleCliente: async function () {
            let a = [];
            await axios.get(URL_DATOS + "/clientes/" + this.clave_cte).then(function (response) {
                console.log(response);
                a = response.data[0];

            }).catch(function (error) {
                console.log(error);
            });
            this.clientes = a;

        }
    },
 };
</script>
