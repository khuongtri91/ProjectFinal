const sql = require('mssql');
const { config } = require('../database/config');
const assert = require('assert');

class RegisterController {
    async addNewUser(req, res) {
        let gt;
        if(req.body.gioiTinh == 'Nam') gt = 1;
        else gt = 0;
        try {
            let pool = await sql.connect(config);
            let i = await pool.request().query(`EXEC CheckUser '${req.body.email}'`);
            if(i.recordset.length >= 1) {
                res.json("Email này đã được đăng ký, vui lòng xem lại thông tin");
            }
            else {
                await pool.request().query(`EXEC AddUser N'${req.body.ten}','${req.body.soDienThoai}','${req.body.email}',N'${req.body.diaChi}',${gt},'${req.body.ngaySinh}','${req.body.anh}'`);
                await pool.request().query(`EXEC AddAccount '${req.body.email}','${req.body.matKhau}'`);
                await pool.request().query(`EXEC AddAccountType '${req.body.email}'`);
                res.json("Đăng ký thành công!");
            }           
        } catch (err) {
            assert.equal(null, err);
        }
    }
}

module.exports = new RegisterController;