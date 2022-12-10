
<template>
    <div class="Nuevo">
        <h2>Datos del Cliente - Nuevo</h2> 
            <br />
            <label for="txtnombre">Nombre</label>
            <input type="text" name="txtnombre" id="txtnombre" v-model="Nombre" class="form-control" />

            <label for="txtdireccion">Direccion</label>
            <input type="text" name="txtdireccion" id="txtdireccion" v-model="Direccion" class="form-control" />

            <label for="txtrfc">RFC</label>
            <input type="text" name="txtrfc" id="txtrfc" v-model="RFC" class="form-control" />

            <br>
    <button @click.prevent="nuevoCliente()"   class="btn btn-primary btn-lg">Nuevo</button>
    </div>
</template>


<script>

import { URL_DATOS } from "../utils/constantes.js";
import axios from "axios";

export default{
    name: "NuevoCliente",
    components: { },
    data: function(){
        return {
        Nombre:'',
        Direccion:'',
        RFC:''
        };
    },
    methods: {
        //AGREGAR NUEVO
        nuevoCliente: async function(){
            //console.log(this.Descripcion);
            //console.log(this.Cantidad);
            const res = await axios.post(URL_DATOS +"/clientes",{
                nombre:this.Nombre,
                direccion:this.Direccion,
               RFC:this.RFC
                
            });
            console.log(res);
        }
    },
};
</script>