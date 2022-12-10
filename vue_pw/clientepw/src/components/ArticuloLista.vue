<template>
    <div class="ArticuloLista">

        <!--<button @click.prevent="traeArticulo()">Datos</button>-->
        <button @click="nuevoArticulo()"  class="btn btn-succes btn-lg" >Nuevo</button>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th> No.</th>
                    <th> Descripcion</th>
                    <th> Cantidad</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="art in articulos" :key="art.id">
                    <td>
                        <a href="" @click.prevent="detalleArticulo(art.clave_articulo)">{{ art.clave_articulo}}</a>
                    </td>
                    <td>{{art.Descripcion}}</td>
                    <td>{{art.cantidad}}</td>
                    <td>
                        <button @click.prevent="editarArticulo(art.clave_articulo)">Editar</button>
                        <button @click.prevent="eliminarArticulo(art.clave_articulo)">Eliminar</button>
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
    name: "ArticuloLista",
    components: {},
    data: function () {
        return {
            articulos: []
        };
    },
    created(){
        this.traeArticulo();
    },
    methods: {
        traeArticulo: async function () {
            let a = [];
            await axios.get(URL_DATOS + "/articulos").then(function (response) {
                console.log(response);
                a = response.data;

            }).catch(function (error) {
                console.log(error);
            });
            this.articulos = a;

        },
        detalleArticulo:  function(id){
            this.$router.push({name:"detalle",params:{clave_articulo: id}});
        },
        editarArticulo: function(id){
            this.$router.push({name:"editar",params:{clave_articulo: id}});
        },
        eliminarArticulo: async function(id){
            const res = await axios.delete(URL_DATOS + "/articulos/" + id);
            console.log(res)
            this.traeArticulo();

        },
        nuevoArticulo: function(){
            this.$router.push({name:"nuevo",params:{}});
        }
    },
};
</script>