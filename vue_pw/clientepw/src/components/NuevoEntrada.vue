
<template>
    <div class="Nuevo">
        <h2>Datos Entrada - Nuevo</h2>
        <br />
        <label for="txtnombre">Clave Articulo</label>
        <input type="text" name="txtClaveA" id="txtClaveA" v-model="Clave_articulo" class="form-control" />

        <label for="txtrfc">Cantidad</label>
        <input type="text" name="txtCant" id="txtCant" v-model="Cantidad" class="form-control" />

        <label for="txtdireccion">Costo</label>
        <input type="text" name="txtCosto" id="txtCosto" v-model="Costo" class="form-control" />

        <label for="txtrfc">Clave proveedor</label>
        <input type="text" name="txtClavePro" id="txtClavePro" v-model="Clave_proveedor" class="form-control" />


        <br>
        <button @click.prevent="nuevoEntrada()" class="btn btn-primary btn-lg">Nuevo</button>
    </div>
</template>


<script>

import { URL_DATOS } from "../utils/constantes.js";
import axios from "axios";


export default {
    name: "NuevoEntrada",
    components: {},
    data: function () {
        return {
            Clave_articulo: '',
            Cantidad: 1,
            Costo: 1,
            Clave_proveedor: '',
        };
    },
    methods: {
        //AGREGAR NUEVO
        nuevoEntrada: async function () {
            //console.log(this.Descripcion);
            //console.log(this.Cantidad);
            const res = await axios.post(URL_DATOS + "/entradas", {
                clave_articulo: this.Clave_articulo,
                cantidad: this.Cantidad,
                costo: this.Costo,
                clave_proveedor: this.Clave_proveedor

            });
            console.log(res);
        }
    },
};
</script>