const datosReceta = require('../model/recetamodel');

//Insertar

function crear (rq, res){


const receta = new datosReceta({



    medicamento: req.body.medicamento,
    dosis: req.body.dosis,
    instrucciones: req.body.instrucciones
   
    

})

 receta.save().then(
        res.redirect('/')
    ).catch(err =>res.status(500).send({err}))

}


//Mostrar

function visualizar (req, res){


    datosReceta.find({}).then(datosReceta=>{

        if(datosReceta.length) return res.render('index',{datosReceta:datosReceta})
        return res.status('204').send({message:'NO CONTEND'});

    }).catch(err=> res.status(500).send({err}))
}


//Editar

function editar (req, res){

    const idreceta = req.body.idreceta_editar
    const medicamento = req.body.medicamento_editar
    const dosis = req.body.dosis_editar
    const instrucciones = req.body.instrucciones_editar



    datosReceta.findByIdAndUpdate(idreceta,
        {
            
            medicamento: req.body.medicamento,
            dosis: req.body.dosis,
            instrucciones: req.body.instrucciones

           
        }).then(

            res.redirect('/')
        ).catch(err =>res.status(500).send({err}))

}



//Eliminar

function eliminar (req, res) {


    const idreceta = req.params.idreceta
    datosReceta.findByIdAndDelete(idreceta).then(

        res.redirect('/')
    ).catch(err=>res.status(500).send({err}))



}


module.exports={

    visualizar,
    crear,
    editar,
    eliminar


}