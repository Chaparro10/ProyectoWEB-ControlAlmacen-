<template>
    <div class="SalidaLista"> 
        <button @click.prevent="nuevaSalida()">Nuevo</button> 
        <table>
            <thead>
                <tr>
                    <th> No.</th>
                    <th> Clave_Articulo</th>
                    <th> Cantidad</th>
                    <th> Precio venta</th>
                    <th> Clave_Cliente</th>
                    
                </tr>
            </thead>
            <tbody>
                <tr v-for="sal in salidas" :key="sal.id">
                    <td>{{ sal.clave_salida }}</td>
                    <td>{{ sal.clave_articulo }}</td>
                    <td>{{ sal.cantidad }}</td>
                    <td>{{ sal.precio_venta }}</td>
                    <td>{{ sal.clave_cte }}</td>

                    <td>
                        <button @click.prevent="eliminarSalida(sal.clave_salida)">Eliminar</button> 
                        <button @click.prevent="editarSalida(sal.clave_salida)">Editar</button>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>


<script>

import { URL_DATOS } from "../utils/constantes.js";
import axios from "axios";

export default {
    name: "SalidaLista",
    components: {},
    data: function () {
        return {
            salidas: []
        };
    },
    created(){
        this.traeSalida();
    },
    methods: {
        traeSalida: async function () {
            let a = [];
            await axios.get(URL_DATOS + "/salidas").then(function (response) {
                console.log(response);
                a = response.data;

            }).catch(function (error) {
                console.log(error);
            });
            this.salidas = a;
        },
        nuevaSalida: function(){
            this.$router.push({name:"nuevasalida",params:{}});
        },
        editarSalida: function(id){
            this.$router.push({name:"editarsalida",params:{clave_salida: id}});
        },
        eliminarSalida: async function(id){
            const res = await axios.delete(URL_DATOS + "/salidas/" + id);
            console.log(res)
            this.traeSalida();
       },
    },
};
</script>