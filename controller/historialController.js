const datosHistorial = require('../model/historialmodel');

//Insertar

function crear (rq, res){


const historial = new datosHistorial({



    diagnostico: req.body.diagnostico,
    tratamiento: req.body.tratamiento,
    fecha: req.body.fecha
   
    

})

    historial.save().then(
        res.redirect('/')
    ).catch(err =>res.status(500).send({err}))

}


//Mostrar

function visualizar (req, res){


    datosHistorial.find({}).then(datosHistorial=>{

        if(datosHistorial.length) return res.render('index',{datosHistorial:datosHistorial})
        return res.status('204').send({message:'NO CONTEND'});

    }).catch(err=> res.status(500).send({err}))
}


//Editar

function editar (req, res){

    const idhistorial = req.body.idhistorial_editar
    const diagnostico = req.body.diagnostico_editar
    const tratamiento = req.body.tratamiento_editar
    const fecha = req.body.fecha_editar



    datosHistorial.findByIdAndUpdate(idhistorial,
        {
            
            diagnostico: diagnostico,
            tratamiento: tratamiento,
            fecha: fecha

           
        }).then(

            res.redirect('/')
        ).catch(err =>res.status(500).send({err}))

}



//Eliminar

function eliminar (req, res) {


    const idhistorial = req.params.idhistorial
    datosHistorial.findByIdAndDelete(idhistorial).then(

        res.redirect('/')
    ).catch(err=>res.status(500).send({err}))



}


module.exports={

    visualizar,
    crear,
    editar,
    eliminar


}