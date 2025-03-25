
 const IdError = require('../BL/Erorrs/IdErorr');
const ParamsError = require('../BL/Erorrs/ParamsErorr');
const express = require('express');
const HelpRequest = require('../BL/HelpRequestService');

const router = express.Router();

router.get('/', async (req, res,next) => {
    try{
        let result = await HelpRequest.get(req.query);
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
        let result = await HelpRequest.getById(req.params.id);
        if(result)
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
        let result = await HelpRequest.insert(req.body);
        console.log("i in rout",result);
        
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
        let result = await HelpRequest.update(req.params.id,req.body);
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
        let result = await HelpRequest.delete(req.params.id);
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