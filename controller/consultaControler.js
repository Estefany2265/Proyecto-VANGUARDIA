
const datosConsulta = require('../model/consultamodel');

//Insertar

function crear (rq, res){


const consulta = new datosConsulta({


    motivo: req.body.motivo,
    diagnostico: req.body.diagnostico,
    tratamiento: req.body.tratamiento,
    fecha: req.body.fecha
   
    

})

    consulta.save().then(
        res.redirect('/')
    ).catch(err =>res.status(500).send({err}))

}


//Mostrar

function visualizar (req, res){


    datosConsulta.find({}).then(datosConsulta=>{

        if(datosConsulta.length) return res.render('index',{datosConsulta:datosConsulta})
        return res.status('204').send({message:'NO CONTEND'});

    }).catch(err=> res.status(500).send({err}))
}


//Editar

function editar (req, res){

    const idconsulta = req.body.idconsulta_editar
    const motivo = req.body.motivo_editar
    const diagnostico = req.body.diagnostico_editar
    const tratamiento = req.body.tratamiento_editar
    const fecha = req.body.fecha_editar



    datosConsulta.findByIdAndUpdate(idconsulta,
        {
            motivo: motivo,
            diagnostico: diagnostico,
            tratamiento: tratamiento,
            fecha: fecha

           
        }).then(

            res.redirect('/')
        ).catch(err =>res.status(500).send({err}))

}



//Eliminar

function eliminar (req, res) {


    const idconsulta = req.params.idconsulta
    datosConsulta.findByIdAndDelete(idconsulta).then(

        res.redirect('/')
    ).catch(err=>res.status(500).send({err}))



}


module.exports={

    visualizar,
    crear,
    editar,
    eliminar


}