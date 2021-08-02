var dbConn = require(`../services/mysql`)
var tableName = `location_requests`;
const { v4: uuidv4 } = require('uuid');
//Employee object create

var LocationRequest = function (request) {
  this.from_number = request.from;
  this.to_number = request.to;
  this.msg = request.msg;
  this.name = request.name;
  this.socketID = request.socketID;
  this.created_at = new Date();
  this.updated_at = new Date();
};

LocationRequest.create = function (newRequest, resolve) {
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
LocationRequest.findById = function (id, resolve) {
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
LocationRequest.findAll = function (resolve) {
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
LocationRequest.update = function (id, employee, resolve) {
  dbConn.query(`UPDATE ${tableName} SET from_number=?,to_number=?,msg=?,name=?,organization=?,designation=?,salary=? WHERE id = ?`, [employee.from_number, employee.to_number, employee.msg, employee.name, employee.organization, employee.designation, employee.salary, id], function (err, res) {
    if (err) {
      console.log(`error: `, err);
      resolve(null, err);
    } else {
      resolve(null, res);
    }
  });
};
LocationRequest.delete = function (id, resolve) {
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
module.exports = LocationRequest;