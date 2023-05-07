const db = require('../utils/db');

module.exports = class Topology {
    constructor(topology_name, topology_description, devices) {
      this.topology_name = topology_name;
      this.topology_description = topology_description;
      this.devices = devices;
    }
  
    create(id) {
      const sql =
        'INSERT INTO topology (topology_id, topology_name, topology_desc,devices) VALUES (?,?,?)';
      const values = [id, this.topology_name, this.topology_description,JSON.stringify(this.devices)];
      return db.execute(sql, values);
    }
  
    update(id) {
      const sql =
        'UPDATE topology SET topology_name = ?, topology_desc = ?, devices = ? WHERE topology_id = ?';
      const values = [this.topology_name, this.topology_description,JSON.stringify(this.devices), id];
      return db.execute(sql, values);
    }
  
    static delete(id) {
      const sql = 'DELETE FROM topology WHERE topology_id = ?';
      const values = [id];
      return db.execute(sql, values);
    }
};
  