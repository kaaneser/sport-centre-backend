const Notification = require("../../model/notification_model");

exports.getAll = (req, res) => {
    Notification.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occured while retrieving data"
            });
        } else {
            if (data.length != 0) res.send(data);
            else {
                res.status(404).send({
                    message: "Couldn't find any user for that credentials..."
                });
            }
        }
    });
};

exports.addNotification = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content cannot be empty!"
        });
    }

    const notification = new Notification({
        title: req.body.title,
        msg: req.body.msg,
        start_date: new Date().toISOString().slice(0, 10),
        until_date: req.body.end_date
    });

    Notification.addNotification(notification, (err, data) => {
        if (err){
            res.status(500).send({
                message: err.message || "Error occured while creating customer"
            });
        } else res.status(200).send(data);
    });
};