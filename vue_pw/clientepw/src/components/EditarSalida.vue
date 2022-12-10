<template>
    <div class="EditarClientes">
            <h2>Datos Salidas</h2> 
            <br />
            
            <label for="txtcantidad">Cantidad</label>
            <input type="text" name="txtcantidad" id="txtcantidad" v-model="salidas.cantidad" class="form-control" />

            <label for="txtpreciop">Precio Venta</label>
            <input type="text" name="txtpreciop" id="txtpreciop" v-model="salidas.precio_venta" class="form-control" />
            <br>
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
        clave_salida:Number,
    },
    data:function(){
        return{
            salidas: [],
        };
    },
    created(){
        this.traeDetalleSal();
    },
    methods:{
        traeDetalleSal: async function () {
            let a = [];
            await axios.get(URL_DATOS + "/salidas/" + this.clave_salida).then(function (response) {
                console.log(response);
                a = response.data[0];

            }).catch(function (error) {
                console.log(error);
            });
            this.salidas = a;

        },
        actualizar:async function () {
            const res =await axios.put(URL_DATOS +"/salidas/" + this.clave_salida,{
                cantidad:this.salidas.cantidad,
               precio_venta:this.salidas.precio_venta,
                
            });
            console.log(res);
        },
    },
 };
</script>