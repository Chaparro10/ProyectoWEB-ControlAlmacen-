<template>
    <div class="EntradaLista">

        <button @click.prevent="nuevaEntrada()" class="btn btn-succes btn-lg">Agregar Nuevo</button>
        <table>
            <thead>
                <tr>
                    <th> No.</th>
                    <th> Clave Articulo</th>
                    <th> Cantidad</th>
                    <th> Costo</th>
                    <th> Clave Proveedor</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="ent in entradas" :key="ent.id">
                    <td>{{ ent.clave_entrada }}</td>
                    <td>{{ ent.clave_articulo }}</td>
                    <td>{{ ent.cantidad }}</td>
                    <td>{{ ent.costo }}</td>
                    <td>{{ ent.clave_proveedor }}</td>

                    <td>
                        <button @click.prevent="eliminarEntrada(ent.clave_entrada)" class="btnAccion">Eliminar</button> 
                        <button @click.prevent="editarEntrada(ent.clave_entrada)" class="btnAccion">Editar</button>
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
    name: "EntradaLista",
    components: {},
    data: function () {
        return {
            entradas: []
        };
    },
    created(){
        this.traeEntrada();
    },
    methods: {
        traeEntrada: async function () {
            let a = [];
            await axios.get(URL_DATOS + "/entradas").then(function (response) {
                console.log(response);
                a = response.data;

            }).catch(function (error) {
                console.log(error);
            });
            this.entradas = a;
        },
        nuevaEntrada: function(){
            this.$router.push({name:"nuevoentrada",params:{}});
        },
        editarEntrada: function(id){
            this.$router.push({name:"editarentrada",params:{clave_entrada: id}});
        },
        eliminarEntrada: async function(id){
            const res = await axios.delete(URL_DATOS + "/entradas/" + id);
            console.log(res)
            this.traeEntrada();
    },
    },
};
</script>