
<template>
    <div class="Nuevo">
        <h2>Datos Salida - Nuevo</h2> 
            <br />
            <label for="txtnombre">Clave Articulo</label>
            <input type="text" name="txtnombre" id="txtnombre" v-model="clave_articulo" class="form-control" />

            <label for="txtdireccion">Cantidad</label>
            <input type="text" name="txtdireccion" id="txtdireccion" v-model="cantidad" class="form-control" />

            <label for="txtrfc">Precio</label>
            <input type="text" name="txtrfc" id="txtrfc" v-model="precio_venta" class="form-control" />

            
            <label for="txtrfc">Clave Cte</label>
            <input type="text" name="txtrfc" id="txtrfc" v-model="clave_cte" class="form-control" />

            <br>
    <button @click.prevent="nuevaSalida()"   class="btn btn-primary btn-lg">Nuevo</button>
    </div>
</template>


<script>

import { URL_DATOS } from "../utils/constantes.js";
import axios from "axios";

export default{
    name: "NuevaSalida",
    components: { },
    data: function(){
        return {
       clave_articulo:'',
       cantidad:0,
        precio_venta:'',
        clave_cte:''
        };
    },
    methods: {
        //AGREGAR NUEVO
        nuevaSalida: async function(){
            //console.log(this.Descripcion);
            //console.log(this.Cantidad);
            const res = await axios.post(URL_DATOS +"/salidas",{
                clave_articulo:this.clave_articulo,
               cantidad:this.cantidad,
               precio_venta:this.precio_venta,
               clave_cte:this.clave_cte,
                
            });
            console.log(res);
        }
    },
};
</script>