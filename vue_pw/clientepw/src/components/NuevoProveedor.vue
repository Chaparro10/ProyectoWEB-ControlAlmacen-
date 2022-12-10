
<template>
    <div class="Nuevo">
        <h2>Datos del Proveedor - Nuevo</h2> 
            <br />
            <label for="txtnombre">Nombre</label>
            <input type="text" name="txtnombre" id="txtnombre" v-model="Nombre" class="form-control" />

            <label for="txtrfc">RFC</label>
            <input type="text" name="txtrfc" id="txtrfc" v-model="RFC" class="form-control" />

            <label for="txtdireccion">Direccion</label>
            <input type="text" name="txtdireccion" id="txtdireccion" v-model="Direccion" class="form-control" />

           
            <label for="txtrfc">Telefono</label>
            <input type="text" name="txtrfc" id="txtrfc" v-model="telefono" class="form-control" />
            <label for="txtrfc">Cuadro Obser</label>
            <input type="text" name="txtrfc" id="txtrfc" v-model="cuadro_observaciones" class="form-control" />

            <br>
    <button @click.prevent="nuevoProveedor()"   class="btn btn-primary btn-lg">Nuevo</button>
    </div>
</template>


<script>

import { URL_DATOS } from "../utils/constantes.js";
import axios from "axios";

export default{
    name: "NuevoProveedor",
    components: { },
    data: function(){
        return {
        Nombre:'',
        RFC:'',
        Direccion:'',
        telefono:'',
        cuadro_observaciones:''
        };
    },
    methods: {
        //AGREGAR NUEVO
        nuevoProveedor: async function(){
            //console.log(this.Descripcion);
            //console.log(this.Cantidad);
            const res = await axios.post(URL_DATOS +"/proveedores",{
                nombre:this.Nombre,
                RFC:this.RFC,
                 direccion:this.Direccion,
                 telefono:this.telefono,
                 cuadro_observaciones: this.cuadro_observaciones
                
            });
            console.log(res);
        }
    },
};
</script>