const IdError = require('../BL/Erorrs/IdErorr');
const ParamsError = require('../BL/Erorrs/ParamsErorr');
const express = require('express');

const Valunteer = require('../BL/VolunteerService');

const router = express.Router();

router.get('/', async (req, res,next) => {
    try{
        console.log("i in get in rout");
        
        let result = await Valunteer.get(req.query);
        if(result!=null)
            res.send(result);
        else
            res.status(204).send();
    }
    catch (err) {
        next(err);
    }
})
router.get('/:id', async (req, res,next) => {
    try{
        console.log("i in getbyid in rout");
        
        let result = await Valunteer.getById(req.params.id);
        if(result.length>0)
            res.send(result);
        else
           res.status(204).send();
    }
    catch (err) {
        if (err instanceof IdError)
            res.status(400).send(err.message);
        next(err);
    }
})
router.post('/', async (req, res,next) => {
    try{
        // console.log(req.body);
        console.log("i in rout",req.body);
        let result = await Valunteer.insert(req.body);
        if(result!=null)
            res.send(result);
        else
            res.status(204).send();
    }
    catch (err) {
        if (err instanceof IdError)
            res.status(400).send(err.message);
        if (err instanceof ParamsError)
            res.status(401).send(err.message);
        next(err);
    }
})
router.put('/:id', async (req, res,next) => {
    try{
        let result = await Valunteer.update(req.params.id,req.body);
        if(result.length !=null)
            res.send(result);
        else
            res.status(204).send();
    }
    catch (err) {
        if (err instanceof IdError)
            res.status(400).send(err.message);
        if (err instanceof ParamsError)
            res.status(401).send(err.message);
        next(err);
    }
})
router.delete('/:id', async (req, res,next) => {
    try{
        let result = await Valunteer.delete(req.params.id);
        if(result.length > 0)
            res.send(result);
        else
            res.status(204).send();
    }
    catch (err) {
        if (err instanceof IdError)
            res.status(400).send(err.message);
        next(err);
    }
})
module.exports = router; 