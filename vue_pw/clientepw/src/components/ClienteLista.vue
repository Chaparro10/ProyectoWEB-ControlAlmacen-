<template>
    <div class="ClienteLista">
        
        <button @click.prevent="nuevoCliente()">Nuevo</button>
        <!--<button @click.prevent="traeCliente()">Datos</button>-->
        <table>
            <thead>
                <tr>
                    <th> No.</th>
                    <th> Nombre</th>
                    <th> Direccion</th>
                    <th> RFC</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="ct in clientes" :key="ct.id">
                    <td><a href="" @click.prevent="detalleCliente(ct.clave_cte)">{{ ct.clave_cte}}</a></td>
                    <td>{{ ct.nombre }}</td>
                    <td>{{ ct.direccion }}</td>
                    <td>{{ ct.RFC }}</td>
                    <td>
                        <button @click.prevent="eliminarCliente(ct.clave_cte)">Eliminar</button> 
                        <button @click.prevent="editarCliente(ct.clave_cte)">Editar</button>
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
    name: "ClienteLista",
    components: {},
    data: function () {
        return {
            clientes: []
        };
    },  
     created(){
        this.traeCliente();
    },
    methods: {
        traeCliente: async function () {
            let a = [];
            await axios.get(URL_DATOS + "/clientes").then(function (response) {
                console.log(response);
                a = response.data;

            }).catch(function (error) {
                console.log(error);
            });
            this.clientes = a;

        },
        detalleCliente:  function(id){
            this.$router.push({name:"detallecliente",params:{clave_cte: id}});
        },
        nuevoCliente: function(){
            this.$router.push({name:"nuevocliente",params:{}});
        },
        editarCliente: function(id){
            this.$router.push({name:"editarcliente",params:{clave_cte: id}});
        },
        eliminarCliente: async function(id){
            const res = await axios.delete(URL_DATOS + "/clientes/" + id);
            console.log(res)
            this.traeCliente();
        },
    },
};
</script>