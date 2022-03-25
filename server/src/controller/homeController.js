const sql = require('mssql');
const { config } = require('../database/config.js');
const assert = require('assert');

class HomeController {
    async index(req, res) {
        try {
            let pool = await sql.connect(config);
            let result = await pool.request().query('Select * from NguoiDung');
            res.send(result.recordset[1]);
            sql.close();
        } catch (err) {
            console.log(err.message);
        }     
    }
}

module.exports = new HomeController;