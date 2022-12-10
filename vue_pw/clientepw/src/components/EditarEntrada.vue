<template>
    <div class="EditarClientes">
            <h2>Datos Entradas</h2> 
            <br />
            
            <label for="txtArt">Clave Articulo</label>
            <input type="text" name="txtArt" id="txtArt" v-model="entradas.clave_articulo" class="form-control" />

            <label for="txtcantidad">Cantidad</label>
            <input type="text" name="txtcantidad" id="txtcantidad" v-model="entradas.cantidad" class="form-control" />

            <label for="txtcosto">Costo</label>
            <input type="text" name="txtcosto" id="txtcosto" v-model="entradas.costo" class="form-control" />

            <label for="txtpro">Clave Proveedor</label>
            <input type="text" name="txtpro" id="txtpro" v-model="entradas.clave_proveedor" class="form-control" />


            <br>
    <button @click.prevent="actualizar()" class="btn btn-primary btn-lg">Actualizar</button>
    </div>
    
</template>
<script>

import { URL_DATOS } from "../utils/constantes.js";
import axios from "axios";

 export default{
    name:"EditarEntrada",
    components:{},
    props:{
        clave_entrada:Number,
    },
    data:function(){
        return{
            entradas: [],
        };
    },
    created(){
        this.traeDetalleCte();
    },
    methods:{
        traeDetalleCte: async function () {
            let a = [];
            await axios.get(URL_DATOS + "/entradas/" + this.clave_entrada).then(function (response) {
                console.log(response);
                a = response.data[0];

            }).catch(function (error) {
                console.log(error);
            });
            this.entradas = a;

        },
        actualizar:async function () {
            const res =await axios.put(URL_DATOS +"/entradas/" + this.clave_entrada,{
                clave_articulo:this.entradas.clave_articulo,
               clave_proveedor:this.entradas.clave_proveedor,
                cantidad:this.entradas.cantidad,
               costo:this.entradas.costo,  
            });
            console.log(res);
        },
    },
 };
</script>