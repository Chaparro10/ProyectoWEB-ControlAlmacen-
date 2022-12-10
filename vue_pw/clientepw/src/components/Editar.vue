<template>
    <div class="Editar">
            <h2>Datos del Articulo</h2> 
            <br />
            <label for="txtdescripcion">Descripcion</label>
            <input type="text" name="txtdescripcion" id="txtdescripcion"  v-model="articulos.Descripcion" class="form-control" />

            
            <label for="txtcantidad">Cantidad</label>
            <input type="text" name="txtcantidad" id="txtcantidad" v-model="articulos.cantidad" class="form-control" />


            <br>
    <button @click.prevent="actualizar()" class="btn btn-primary btn-lg">Actualizar</button>
    </div>
    
</template>
<script>

import { URL_DATOS } from "../utils/constantes.js";
import axios from "axios";

 export default{
    name:"Editar",
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

        },
        actualizar:async function () {
            const res =await axios.put(URL_DATOS +"/articulos/" + this.clave_articulo,{
                Descripcion:this.articulos.Descripcion,
                cantidad:this.articulos.cantidad
            });
            console.log(res);
        },
    },
 };
</script>