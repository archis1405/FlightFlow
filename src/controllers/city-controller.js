const { CityService } = require('../services/index');

const CityService = new CityService();
/*

    POST
    data -> req.body

*/

const create = async (req,res) => {
    try {
        const city = await CityService.createCity(req.body);
        return res.status(201).json({
            data : city ,
            success : true,
            message : 'Successfully created a city' ,
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to crete a city',
            err: error
        })
    }
}

const destroy = (req,res) => {
    try {
        
    } catch (error) {
        console.log(error);
    }
}

const get = (req,res) => {
    try {
        
    } catch (error) {
        console.log(error);
    }
}

const update = (req,res) => {
    try {
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    create,
    destroy,
    update,
    get
}