const db = require("../database/database");

const Notification = function(notification) {
    this.title = notification.title;
    this.msg = notification.msg;
    this.start_date = notification.start_date;
    this.until_date = notification.until_date;
}

Notification.getAll = (result) => {
    let sql = `SELECT * FROM notification WHERE start_date = '${new Date().toISOString().slice(0, 10)}'`;

    db.query(sql, (err, res) => {
        if (err){
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    })
};

Notification.addNotification = (newNotification, result) => {
    db.query("INSERT INTO notification SET ?", newNotification, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("Created notification: ", {...newNotification});
        result(null, {...newNotification});
    });
};

module.exports = Notification;