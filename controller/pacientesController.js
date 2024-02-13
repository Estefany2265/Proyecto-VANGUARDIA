
const datospaciente = require('../model/pacientesmodel');

//Insertar

function crear (rq, res){


const pacientes = new datospaciente({



    nombre: req.body.nombre,
    edad: req.body.edad,
    sexo: req.body.sexo,
    contacto: req.body.sexo,
    direccion:req.body.direccion,
   
    

})
pacientes.save().then(
        res.redirect('/')
    ).catch(err =>res.status(500).send({err}))

}


//Mostrar

function visualizar (req, res){


    datospaciente.find({}).then(datospaciente=>{

        if(datospaciente.length) return res.render('index',{datospaciente:datospaciente})
        return res.status('204').send({message:'NO CONTEND'});

    }).catch(err=> res.status(500).send({err}))
}


//Editar

function editar (req, res){

    const idpaciente = req.body.idpaciente_editar
    const  nombre = req.body.nombre_editar
    const edad = req.body.edad_editar
    const sexo = req.body.sexo_editar
    const contacto = req.body.contacto_editar
    const direccion = req.body.direccion_editar



    datospaciente.findByIdAndUpdate(idpaciente,
        {
            
            nombre: nombre,
            edad: edad,
            sexo: sexo,
            contacto: contacto,
            direccion: direccion

           
        }).then(

            res.redirect('/')
        ).catch(err =>res.status(500).send({err}))

}



//Eliminar

function eliminar (req, res) {


    const idpaciente = req.params.idpaciente
    datospaciente.findByIdAndDelete(idpaciente).then(

        res.redirect('/')
    ).catch(err=>res.status(500).send({err}))



}


module.exports={

    visualizar,
    crear,
    editar,
    eliminar


}
