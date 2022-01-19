const {response, request} = require('express');

const usuariosGet = (req = request , res = response)=>{
  
  const query = req.query;

    res.json({
        msg: 'get API - controlador'
    });
  }

const usuariosPost =  (req, res)=>{

  const {nombre, edad} = req.body;

    res.status(201).json({
        msg: 'post API - controlador',
        query
    });
  }

const usuariosPut = (req, res = response)=>{

    const id = req.params.id;

    res.json({
        msg: 'put API - controlador',
        id
    });
  }

const usuariosPatch = (req, res = response)=>{
    res.json({
        msg: 'patch API - controlador'
    });
  }

  const usuariosDelete = (req, res = response)=>{
    res.json({
        msg: 'delete API - controlador'
    });
  }


  module.exports={
      usuariosGet,
      usuariosPut,
      usuariosPost,
      usuariosDelete,
      usuariosPatch
  }