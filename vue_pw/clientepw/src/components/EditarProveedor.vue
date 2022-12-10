<template>
    <div class="EditarProveedores">
            <h2>Datos del Proveedor</h2> 
            <br />
            <label for="txtnombre">Nombre</label>
            <input type="text" name="txtnombre" id="txtnombre"  v-model="proveedores.nombre" class="form-control" />
            
            <label for="txtdireccion">Direccion</label>
            <input type="text" name="txtdireccion" id="txtdireccion" v-model="proveedores.direccion" class="form-control" />

            <label for="txtrfc">RFC</label>
            <input type="text" name="txtrfc" id="txtrfc" v-model="proveedores.RFC" class="form-control" />

            <label for="txttelefono">Telefono</label>
            <input type="text" name="txttelefono" id="txttelefono" v-model="proveedores.telefono" class="form-control" />

            <label for="txtCuadroObser">Cuadro Obser</label>
            <input type="text" name="txtCuadroObser" id="txtCuadroObser" v-model="proveedores.cuadro_observaciones" class="form-control" />

            <br>
            <br>
    <button @click.prevent="actualizar()" class="btn btn-primary btn-lg">Actualizar</button>
    </div>
    
</template>
<script>

import { URL_DATOS } from "../utils/constantes.js";
import axios from "axios";

 export default{
    name:"EditarProveedor",
    components:{},
    props:{
        clave_proveedor:Number,
    },
    data:function(){
        return{
            proveedores: [],
        };
    },
    created(){
        this.traeDetalleProveedor();
    },
    methods:{
        traeDetalleProveedor: async function () {
            let a = [];
            await axios.get(URL_DATOS + "/proveedores/" + this.clave_proveedor).then(function (response) {
                console.log(response);
                a = response.data[0];

            }).catch(function (error) {
                console.log(error);
            });
            this.proveedores = a;

        },
        actualizar:async function () {
            const res =await axios.put(URL_DATOS +"/proveedores/" + this.clave_proveedor,{
                nombre: this.proveedores.nombre,
                direccion:this.proveedores.direccion,
                RFC:this.proveedores.RFC,
                telefono:this.proveedores.telefono,
                cuadro_observaciones:this.proveedores.cuadro_observaciones
            });
            console.log(res);
            alert("ACTUALIZADO");
        },
    },
 };
</script>