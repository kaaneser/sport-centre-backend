const Customer = require("../../model/customer_model");
const Membership = require("../../model/membership_model");

exports.login = (req, res) => {
    Customer.login(req.query.id, req.query.pwd, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occured while retrieving data"
            });
        } else {
            if (data.length != 0) res.status(200).send(data);
            else {
                res.status(404).send({
                    message: "Couldn't find any user for that credentials..."
                });
            }
        }
    });
};

exports.register = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content cannot be empty!"
        });
    }

    const customer = new Customer({
        id: req.body.id,
        name_surname: req.body.name_surname,
        pass: req.body.pwd
    });

    Customer.register(customer, (err, data) => {
        if (err){
            res.status(500).send({
                message: err.message || "Error occured while creating customer"
            });
        } else res.status(200).send(data);
    });
};

exports.getMembershipWithId = (req, res) => {
    Membership.getMembershipWithId(req.query.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occured while retrieving data"
            });
        } else {
            if (data.length != 0) res.status(200).send(data);
            else {
                res.status(404).send({
                    message: "Couldn't find any user for that credentials..."
                });
            }
        }
    });
};

exports.newMembership = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content cannot be empty!"
        });
    }

    const membership = new Membership({
        id: req.body.id,
        end_date: req.body.end_date
    });

    Membership.newMembership(membership, (err, data) => {
        if (err){
            res.status(500).send({
                message: err.message || "Error occured while creating customer"
            });
        } else res.status(200).send(data);
    });
};