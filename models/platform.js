const db = require('../utils/db');

module.exports = class Platform{
    constructor(platform_id,platform_name,platform_api_key,platform_api_sercret){
        this.platform_id = platform_id;
        this.platform_name = platform_name;
        this.platform_api_key = platform_api_key;
        this.platform_api_sercret = platform_api_sercret ;
    }

    static createPlatform(platform_id,platform_name,platform_api_key,platform_api_secret){
        return db.execute(
            `INSERT INTO platform (platform_id,platform_name,platform_api_key,platform_api_secret) VALUES ('${platform_id}','${platform_name}','${platform_api_key}','${platform_api_secret}')`,
        );
    }

}
