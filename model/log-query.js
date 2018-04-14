const DB = require('./DB.js');

class LogExec {
    constructor() {
        this.TABLE = "logs"
    }

    getQuery(params) {

        var id_where = (typeof params.ID === "undefined") ? "1=1" : `${Dashboard.ID} = ${params.ID}`;
        var date_where = (typeof params.date === "undefined") ? "1=1" : `date = ${params.date}`;
        var activity_where = (typeof params.activity_id === "undefined") ? "1=1" : `activity_id = ${params.activity_id}`;
        var status_where = (typeof params.status === "undefined") ? "1=1" : `status = '${params.status}'`;

        var order_by = "ORDER BY " + ((typeof params.order_by === "undefined")
            ? `date desc, activity_id desc`
            : `${params.order_by}`);

        var limit = DB.prepareLimit(params.page, params.offset);

        return `select * from ${this.TABLE} 
            where ${id_where} 
            and ${date_where} 
            and ${activity_where} 
            and ${status_where} 
            ${order_by} ${limit}`;
    }

    logs(params, field, extra = {}) {
        const { ActivityExec } = require('./activity-query.js');

        var sql = this.getQuery(params);
        //console.log(sql);
        var toRet = DB.query(sql).then(function (res) {

            for (var i in res) {
                var activity_id = res[i]["activity_id"];

                // activity ****************************************************
                if (field["activity"]) {
                    var param = { activity_id: activity_id };
                    res[i]["activity"] = ActivityExec.activities(param, field["activity"], { single: true });
                }
            }

            if (extra.single && res !== null) {
                return res[0];
            } else {
                return res;
            }

        });
        return toRet;
    }
}

LogExec = new LogExec();

module.exports = { LogExec };


