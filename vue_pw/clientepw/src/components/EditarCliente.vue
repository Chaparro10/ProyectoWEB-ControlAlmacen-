<template>
    <div class="EditarClientes">
            <h2>Datos del Clientess</h2> 
            <br />
            <label for="txtnombre">Nombre</label>
            <input type="text" name="txtnombre" id="txtnombre"  v-model="clientes.nombre" class="form-control" />

            
            <label for="txtdireccion">Direccion</label>
            <input type="text" name="txtdireccion" id="txtdireccion" v-model="clientes.direccion" class="form-control" />

            <label for="txtrfc">RFC</label>
            <input type="text" name="txtrfc" id="txtrfc" v-model="clientes.RFC" class="form-control" />


            <br>
    <button @click.prevent="actualizar()" class="btn btn-primary btn-lg">Actualizar</button>
    </div>
    
</template>
<script>

import { URL_DATOS } from "../utils/constantes.js";
import axios from "axios";

 export default{
    name:"EditarCliente",
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
        this.traeDetalleCte();
    },
    methods:{
        traeDetalleCte: async function () {
            let a = [];
            await axios.get(URL_DATOS + "/clientes/" + this.clave_cte).then(function (response) {
                console.log(response);
                a = response.data[0];

            }).catch(function (error) {
                console.log(error);
            });
            this.clientes = a;

        },
        actualizar:async function () {
            const res =await axios.put(URL_DATOS +"/clientes/" + this.clave_cte,{
                nombre:this.clientes.nombre,
                direccion:this.clientes.direccion,
                RFC:this.clientes.RFC
            });
            console.log(res);
        },
    },
 };
</script>