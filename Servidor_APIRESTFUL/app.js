var express = require('express')
var mysql = require('mysql')

var app = express()

app.use(express.json());
var cors = require('cors');
app.use(cors());



app.listen('3000', function () {
    console.log('Servidor en linea...Ok');
})


//PARAMETROS DE CONEXION
var conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'control_almacen'
});
//NOS CONECTAMOS A LA BD
conexion.connect(function (error) {
    try {
        console.log('conexion exitosa')
    } catch (error) {
        throw error;
    }
    /*
    if(error){
        throw error;
    }else{
        console.log('Conexio exitosa')
    }*/
})

app.get('/', function (req, res) {
    res.send('Ruta de Inicio de Servidor')
})

//-----------------------------------ARTICULOS---------------------------------------
//PARA TRAER TODOS LOS ARTICULOS(GET)
app.get('/api/articulos', (req, res) => {
    conexion.query('SELECT * FROM articulos', (error, filas) => {
        try {
            res.send(filas);
        } catch (error) {
            throw error;
        }
    })
})
//PARA UN SOLO ARTICULO(GET)
app.get('/api/articulos/:id', (req, res) => {
    conexion.query('SELECT * FROM articulos WHERE clave_articulo = ?', [req.params.id], (error, filas) => {
        try {
            res.send(filas);
        } catch (error) {
            throw error;
        }
    })
})

//Clase 17-11-22
//RUTA PARA AGREGAR UN ARTICULO()
app.post('/api/articulos', function (req, res) {
    let data = {
        Descripcion: req.body.Descripcion,
        cantidad: req.body.cantidad
    }
    let sql = "INSERT INTO articulos SET ?";

    conexion.query(sql, data, function (error, results) {
       if(error){
        throw error;
       }else{
        res.send(results)
       }
    })
})

//RUTA PARA DELETE
app.delete('/api/articulos/:id', (req, res) => {
    conexion.query('DELETE FROM articulos WHERE clave_articulo = ?', [req.params.id], (error, filas) => {
        try {
            res.send(filas);
        } catch (error) {
            throw error;
        }
    })
})

//RUTA PARA UPDATE
app.put('/api/articulos/:id', (req, res) => {
   // let ar = req.body;
    const ids=req.params.id;
    const Descripcion=req.body.Descripcion;
    const Cant=req.body.cantidad;
    /*let sql = "SET Descripcion = ? ;SET cantidad = ? \
   CALL SP_UPDATEArticulo(@Descripcion,@cantidad);"*/
    conexion.query('UPDATE articulos SET Descripcion=?,cantidad=? WHERE clave_articulo=?', [Descripcion,Cant,ids], (error, filas) => {
        try {
            res.send(filas);
        } catch (error) {
            throw error;
        }
    })
})




//---------------------------------CLIENTES-----------------------------------
//PARA TRAER TODOS LOS CLIENTES
app.get('/api/clientes', (req, res) => {
    conexion.query('SELECT * FROM clientes', (error, filas) => {
        try {
            res.send(filas);
        } catch (error) {
            throw error;
        }
    })
})
//PARA UN SOLO CLIENTE
app.get('/api/clientes/:id', (req, res) => {
    conexion.query('SELECT * FROM clientes WHERE clave_cte = ?', [req.params.id], (error, filas) => {
        try {
            res.send(filas);
        } catch (error) {
            throw error;
        }
    })
})
//RUTA PARA AGREGAR UN CLIENTE(POST)
app.post('/api/clientes', function (req, res) {
    let data = {
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        RFC: req.body.RFC
    }
    let sql = "insert into clientes SET ?"

    conexion.query(sql, data, function (error, results) {
        try {
            res.send(results)
        } catch (error) {
            throw error;
        }
    })
})

//RUTA PARA DELETE
app.delete('/api/clientes/:id', (req, res) => {
    conexion.query('DELETE FROM clientes WHERE clave_cte= ?', [req.params.id], (error, filas) => {
        try {
            res.send(filas);
        } catch (error) {
            throw error;
        }
    })
})

//RUTA PARA UPDATE
app.put('/api/clientes/:id', (req, res) => {
    const ids=req.params.id;
    const nombre=req.body.nombre;
    const direcc=req.body.direccion;
    const rfc=req.body.RFC;
    
    conexion.query('UPDATE clientes SET nombre=?,direccion=?,RFC=? WHERE clave_cte=?', [nombre,direcc,rfc,ids], (error, filas) => {
        try {
            res.send(filas);
        } catch (error) {
            throw error;
        }
    })
})
//-------------------PROVEEDORES------------------------------------------
//PARA TRAER TODOS LOS PROVEEDORES
app.get('/api/proveedores', (req, res) => {
    conexion.query('SELECT * FROM proveedores', (error, filas) => {
        try {
            res.send(filas);
        } catch (error) {
            throw error;
        }
    })
})
//PARA UN SOLO PROVEEDOR
app.get('/api/proveedores/:id', (req, res) => {
    conexion.query('SELECT * FROM proveedores WHERE clave_proveedor = ?', [req.params.id], (error, filas) => {
        try {
            res.send(filas);
        } catch (error) {
            throw error;
        }
    })
})
//RUTA PARA AGREGAR UN PROVEEDOR()
app.post('/api/proveedores', function (req, res) {
    let data = {
        nombre: req.body.nombre,
        RFC: req.body.RFC,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        cuadro_observaciones: req.body.cuadro_observaciones
    }
    let sql = "insert into proveedores SET ?"

    conexion.query(sql, data, function (error, results) {
        try {
            res.send(results)
        } catch (error) {
            throw error;
        }
    })
})

//RUTA PARA DELETE
app.delete('/api/proveedores/:id', (req, res) => {
    conexion.query('DELETE FROM proveedores WHERE clave_proveedor = ?', [req.params.id], (error, filas) => {
        try {
            res.send(filas);
        } catch (error) {
            throw error;
        }
    })
})

//RUTA PARA UPDATE
app.put('/api/proveedores/:id', (req, res) => {
    // let ar = req.body;
     const ids=req.params.id;
     const nombre=req.body.nombre;
     const direccion=req.body.direccion;
     const rfc=req.body.RFC;
     const telefono=req.body.telefono;
     const cuadro=req.body.cuadro_observaciones;
   
     conexion.query('UPDATE proveedores SET nombre=?,direccion=?,RFC=?,telefono=?,cuadro_observaciones=? WHERE clave_proveedor=?', [nombre,direccion,rfc,telefono,cuadro,ids], (error, filas) => {
         try {
             res.send(filas);
         } catch (error) {
             throw error;
         }
     })
 })
 
//---------------------------------ENTRADAS --------------------------------------------------
//PARA TRAER TODOS LAS ENTRADAS
app.get('/api/entradas', (req, res) => {
    conexion.query('SELECT * FROM entradas', (error, filas) => {
        try {
            res.send(filas);
        } catch (error) {
            throw error;
        }
    })
})
//PARA UNA SOLA ENTRADA
app.get('/api/entradas/:id', (req, res) => {
    conexion.query('SELECT * FROM entradas WHERE clave_entrada = ?', [req.params.id], (error, filas) => {
        try {
            res.send(filas);
        } catch (error) {
            throw error;
        }
    })
})
//RUTA PARA AGREGAR UNA ENTRADA()
app.post('/api/entradas', function (req, res) {
    let data = {
        clave_articulo: req.body.clave_articulo,
        cantidad: req.body.cantidad,
        costo: req.body.costo,
        clave_proveedor: req.body.clave_proveedor
    }
    let sql = "insert into entradas SET ?"

    conexion.query(sql, data, function (error, results) {
        try {
            res.send(results)
        } catch (error) {
            throw error;
        }
    })
})

//RUTA PARA DELETE
app.delete('/api/entradas/:id', (req, res) => {
    conexion.query('DELETE FROM entradas WHERE clave_entrada = ?', [req.params.id], (error, filas) => {
        try {
            res.send(filas);
        } catch (error) {
            throw error;
        }
    })
})

//RUTA PARA UPDATE
app.put('/api/entradas/:id', (req, res) => {
   
        const ids=req.params.id;
        const cantidad=req.body.cantidad;
        const costo=req.body.costo;
        const clave_articulo=req.body.clave_articulo;
        const clave_proveedor=req.body.clave_proveedor;

   conexion.query('UPDATE entradas SET clave_articulo=?,SET cantidad=?,costo=?,SET clave_proveedor=? WHERE clave_entrada=?', [clave_articulo,cantidad,costo,clave_proveedor,ids], (error, filas) => {
        try {
            res.send(filas);
        } catch (error) {
            throw error;
        }
    })
})
// -------------------------------------SALIDAS----------------------------------------
//PARA TRAER TODOS LAS SALIDAS
app.get('/api/salidas', (req, res) => {
    conexion.query('SELECT * FROM salidas', (error, filas) => {
        try {
            res.send(filas);
        } catch (error) {
            throw error;
        }
    })
})
//PARA UNA SOLA SALIDA
app.get('/api/salidas/:id', (req, res) => {
    conexion.query('SELECT * FROM salidas WHERE clave_salida = ?', [req.params.id], (error, filas) => {
        try {
            res.send(filas);
        } catch (error) {
            throw error;
        }
    })
})
//RUTA PARA AGREGAR UNA SALIDA()
app.post('/api/salidas', function (req, res) {
    let data = {
        clave_articulo: req.body.clave_articulo,
        cantidad: req.body.cantidad,
        precio_venta: req.body.precio_venta,
        clave_cte: req.body.clave_cte
    }
    let sql = "insert into salidas SET ?";

    conexion.query(sql, data, function (error, results) {
        try {
            res.send(results)
        } catch (error) {
            throw error;
        }
    })
})

//RUTA PARA DELETE
app.delete('/api/salidas/:id', (req, res) => {
    conexion.query('DELETE FROM salidas WHERE clave_salida = ?', [req.params.id], (error, filas) => {
        try {
            res.send(filas);
        } catch (error) {
            throw error;
        }
    })
})

//RUTA PARA UPDATE
app.put('/api/salidas/:id', (req, res) => {
   
    const ids=req.params.id;
    const cantidad=req.body.cantidad;
    const precio_venta=req.body.precio_venta;

conexion.query('UPDATE salidas SET cantidad=?,precio_venta=? WHERE clave_salida=?', [cantidad,precio_venta,ids], (error, filas) => {
    try {
        res.send(filas);
    } catch (error) {
        throw error;
    }
})
})

