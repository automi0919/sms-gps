'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable('location_requests', {
    id: { type: 'string', primaryKey: true},
    from_number: 'string',
    to_number: 'string',
    msg: 'string',
    name: 'string',
    socketID: 'string',
    created_at: {type: 'timestamp', defaultValue: 'CURRENT_TIMESTAMP'},
    updated_at: {type: 'timestamp', defaultValue: 'CURRENT_TIMESTAMP'},
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('location_requests', callback);
};

exports._meta = {
  "version": 1
};
