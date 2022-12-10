<template>  
    <cliente-lista></cliente-lista>
    </template>
    
    <script>
    import ClienteLista from '../components/ClienteLista.vue'
    export default{
        name: "Clientes",
        components: { ClienteLista },
        data: function(){
            return {};
        },
        methods: {},
    };
    </script>