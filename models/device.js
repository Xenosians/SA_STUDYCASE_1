const db = require('../utils/db');

module.exports = class Device {
    constructor(device_name, device_ip, device_type, device_location, device_status) {
        this.device_name = device_name;
        this.device_ip = device_ip;
        this.device_type = device_type;
        this.device_location = device_location;
        this.device_status = device_status;
    }
  
    create(id) {
        const sql =
            'INSERT INTO device (dev_id, dev_name, dev_ip, dev_type, dev_location, dev_status) VALUES (?,?,?,?,?)';
        const values = [
            id,
            this.device_name,
            this.device_ip,
            this.device_type,
            this.device_location,
            this.device_status,
        ];
        return db.execute(sql, values);
    }  

    update(id) {
        const sql =
          'UPDATE device SET dev_name = ?, dev_ip = ?, dev_type = ?, dev_location = ?, dev_status = ? WHERE id = ?';
        const values = [
          this.device_name,
          this.device_ip,
          this.device_type,
          this.device_location,
          this.device_status,
          id,
        ];
        return db.execute(sql, values);
    }

    static delete(id) {
        const sql = 'DELETE FROM device WHERE dev_id = ?';
        const values = [id];
        return db.execute(sql, values);
    }
}
