const getDB = require("./index");



function runQuery(query, ...value) {
    console.log(value);
    return new Promise((res, req)=> {
        getDB().query(query, value,(err, result)=> {
            if(err) req(err);
            res(result);
        })
    })
}




module.exports = runQuery;