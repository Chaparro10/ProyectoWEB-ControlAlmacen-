<template>
    <div class="ProveedorLista">

        <button @click.prevent="nuevoProveedor()">NUEVO</button>  

        <table>
            <thead>
                <tr>
                    <th> No.</th>
                    <th> Nombre</th>
                    <th> RFC</th>
                    <th> Direccion</th>
                    <th> Telefono</th>
                    <th>Cuadro Obser</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="pro in proveedores" :key="pro.id">
                    <td><a href="" @click.prevent="detalleProveedor(pro.clave_proveedor)">{{ pro.clave_proveedor}}</a></td>
                    <td>{{ pro.nombre }}</td>
                    <td>{{ pro.RFC }}</td>
                    <td>{{ pro.direccion }}</td>
                    <td>{{ pro.telefono}}</td>
                    <td>{{ pro.cuadro_observaciones }}</td>   
                    
                    <td>
                        <button @click.prevent="eliminarProveedor(pro.clave_proveedor)">Eliminar</button>  
                        <button @click.prevent="editarProveedor(pro.clave_proveedor)">Editar</button>
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
    name: "ProveedorLista",
    components: {},
    data: function () {
        return {
            proveedores: [],
        };
    },
    created (){
        this.traeProveedor();
    },
    methods: {
        traeProveedor: async function () {
            let a = [];
            await axios.get(URL_DATOS + "/proveedores").then(function (response) {
                console.log(response);
                a = response.data;

            }).catch(function (error) {
                console.log(error);
            });
            this.proveedores = a;
        },
        detalleProveedor:  function(id){
            this.$router.push({name:"detalleproveedor",params:{clave_proveedor: id}});
        },
        nuevoProveedor: function(){
            this.$router.push({name:"nuevoproveedor",params:{}});
        },
        editarProveedor: function(id){
            this.$router.push({name:"editarproveedor",params:{clave_proveedor: id}});
        },
        eliminarProveedor: async function(id){
            const res = await axios.delete(URL_DATOS + "/proveedores/" + id);
            console.log(res)
            this.traeProveedor();
        },
    },
};
</script>