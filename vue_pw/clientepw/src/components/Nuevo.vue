
<template>
    <div class="Nuevo">
        <h2>Datos del Articulo -Nuevo</h2> 
            <br />
            <label for="txtdescripcion">Descripcion</label>
            <input type="text" name="txtdescripcion" id="txtdescripcion" v-model="Descripcion" class="form-control" />

            <label for="txtcantidad">Cantidad</label>
            <input type="text" name="txtcantidad" id="txtcantidad" v-model="Cantidad" class="form-control" />

            <br>
    <button @click.prevent="nuevo()"   class="btn btn-primary btn-lg">Nuevo</button>
    </div>
</template>


<script>

import { URL_DATOS } from "../utils/constantes.js";
import axios from "axios";

export default{
    name: "Nuevo",
    components: { },
    data: function(){
        return {
        Descripcion:'',
        Cantidad:0,
        };
    },
    methods: {
        //AGREGAR NUEVO
        nuevo: async function(){
            console.log(this.Descripcion);
            console.log(this.Cantidad);
            const res = await axios.post(URL_DATOS +"/articulos",{
                Descripcion:this.Descripcion,
                cantidad:this.Cantidad
            });
            console.log(res);
        }
    },
};
</script>