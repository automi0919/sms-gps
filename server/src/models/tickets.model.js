var dbConn = require(`../services/mysql`)
var tableName = `tickets`;
const { v4: uuidv4 } = require('uuid');
//Employee object create

var Tickets = function (request) {
  this.name = request.name;
  this.phonenumber = request.phonenumber;
  this.msg = request.msg;
  this.email = request.email;
  this.created_at = new Date();
  this.updated_at = new Date();
};

Tickets.create = function (newRequest, resolve) {
  newRequest.id = uuidv4();
  dbConn.query(`INSERT INTO ${tableName} set ?`, newRequest, function (err, res) {
    if (err) {
      console.log(`error: `, err);
      resolve(err, null);
    }
    else {
      resolve(null, newRequest.id);
    }
  });
};
Tickets.findById = function (id, resolve) {
  let query = `select * from ${tableName} where id = "${id}"`;
  console.log('qurery:', query);
  dbConn.query(query, function (err, res) {
    if (err) {
      console.log(`error: `, err);
    }
    else {
      console.log('result: ', res[0])
      resolve(null, res[0]);
    }
  });
};
Tickets.findAll = function (resolve) {
  dbConn.query(`Select * from ${tableName}`, function (err, res) {
    if (err) {
      console.log(`error: `, err);
      resolve(null, err);
    }
    else {
      console.log(`${tableName} : `, res);
      resolve(null, res);
    }
  });
};
Tickets.delete = function (id, resolve) {
  dbConn.query(`DELETE FROM ${tableName} WHERE id = ?`, [id], function (err, res) {
    if (err) {
      console.log(`error: `, err);
      resolve(null, err);
    }
    else {
      resolve(null, res);
    }
  });
};
module.exports = Tickets;