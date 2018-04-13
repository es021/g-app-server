const DB = require('./DB.js');

class ActivityExec {
    constructor() {
        this.TABLE = "activities"
    }

    getQuery(params) {

        var id_where = (typeof params.ID === "undefined") ? "1=1" : `${Dashboard.ID} = ${params.ID}`;
        var date_where = (typeof params.date === "undefined") ? "1=1" : `date = ${params.date}`;
        var name_where = (typeof params.name === "undefined") ? "1=1" : `name = '${params.name}'`;
        var status_where = (typeof params.status === "undefined") ? "1=1" : `status = '${params.status}'`;

        var order_by = "ORDER BY " + ((typeof params.order_by === "undefined")
            ? `date desc`
            : `${params.order_by}`);

        var limit = DB.prepareLimit(params.page, params.offset);

        return `select * from ${this.TABLE} 
            where ${id_where} 
            and ${date_where} 
            and ${name_where} 
            and ${status_where} 
            ${order_by} ${limit}`;
    }

    activities(params, field, extra = {}) {
        var sql = this.getQuery(params);
        console.log(sql);
        var toRet = DB.query(sql).then(function (res) {
            if (extra.single && res !== null) {
                return res[0];
            } else {
                return res;
            }

        });
        return toRet;
    }
}

ActivityExec = new ActivityExec();

module.exports = { ActivityExec };


