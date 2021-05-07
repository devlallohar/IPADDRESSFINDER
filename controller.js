const { default: axios } = require('axios');
const axio = require('axios');
const express = require('express');

exports.call = (req, res) =>{
    // return new Promise ((resolve,reject)=>{
        let ip = req.body.ip;
        console.log("ip:",ip);
        const main = `https://ipapi.co/${ip}/json`;
        
        console.log(main);
        try{
            axios.get(main).then((result)=>{
                console.log("data received from main:",result.data);
                res.json({data:result.data});
            }).catch((err)=>{
                console.log("error from main:",err);
                res.json({err})
            })
        }catch(e){
            console.log(e);
        }
        
    // })
}