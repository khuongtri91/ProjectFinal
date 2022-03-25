const assert = require('assert');

class Query {
    layUser(err) {
        assert.equal(err);
        var request = new sql.Request;
        request.query('Select * from NguoiDung', (err, data) => {
            assert.equal(err);
            res.send(data);
        })
    }
}

module.exports = new Query;