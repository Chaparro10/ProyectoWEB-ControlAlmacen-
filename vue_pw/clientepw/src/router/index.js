import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Articulos from '../views/Articulos.vue'
import Clientes from '../views/Clientes.vue'
import Proveedores from '../views/Proveedores.vue'
import Entradas from '../views/Entradas.vue'
import Salidas from '../views/Salidas.vue'
import Editar from '../components/Editar.vue'
import EditarCliente from '../components/EditarCliente.vue'
import EditarProveedor from '../components/EditarProveedor.vue'
import EditarEntrada from '../components/EditarEntrada.vue'
import EditarSalida from '../components/EditarSalida.vue'
import Nuevo from '../components/Nuevo.vue'
import NuevoCliente from '../components/NuevoCliente.vue'
import NuevoProveedor from '../components/NuevoProveedor.vue'
import NuevaSalida from '../components/NuevaSalida.vue'
import NuevoEntrada from '../components/NuevoEntrada.vue'
import Detalle from '../components/Detalle.vue'
import DetalleCliente from '../components/DetalleCliente.vue'
import DetalleProveedor from '../components/DetalleProveedor.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },  
  {
    path: '/articulos',
    name: 'articulos',
    component: Articulos
  },
  {
    path:'/editar',
    name: 'editar',
    component: Editar,
    props:true
  },
  {
    path:'/editarcliente',
    name: 'editarcliente',
    component: EditarCliente,
    props:true
  },
  {
    path:'/editarproveedor',
    name: 'editarproveedor',
    component: EditarProveedor,
    props:true
  },
  {
    path:'/editarentrada',
    name: 'editarentrada',
    component: EditarEntrada,
    props:true
  },
  {
    path:'/editarsalida',
    name: 'editarsalida',
    component: EditarSalida,
    props:true
  },
  {
    path:'/nuevo',
    name: 'nuevo',
    component: Nuevo,
  },
  {
    path:'/nuevocliente',
    name: 'nuevocliente',
    component: NuevoCliente,
  },
  {
    path:'/nuevoproveedor',
    name: 'nuevoproveedor',
    component: NuevoProveedor,
  },
  {
    path:'/nuevasalida',
    name: 'nuevasalida',
    component: NuevaSalida,
  },
  {
    path:'/nuevoentrada',
    name: 'nuevoentrada',
    component: NuevoEntrada,
  },
  {
    path:'/detalle',
    name: 'detalle',
    component: Detalle,
    props:true
  },
  {
    path:'/detallecliente',
    name: 'detallecliente',
    component: DetalleCliente,
    props:true
  },
  {
    path:'/detalleproveedor',
    name: 'detalleproveedor',
    component: DetalleProveedor,
    props:true
  },
  {
    path: '/clientes',
    name: 'clientes',
    component: Clientes
  },
  {
    path: '/proveedores',
    name: 'proveedores',
    component: Proveedores
  },
  {
    path: '/entradas',
    name: 'entradas',
    component: Entradas
  },
  {
    path: '/salidas',
    name: 'salidas',
    component: Salidas
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
