const db = require("../database/database");

const Customer = function(customer) {
    this.id = customer.id;
    this.name_surname = customer.name_surname;
    this.pass = customer.pass;
}

Customer.login = (id, pwd, result) => {
    let sql = `SELECT * FROM customers WHERE id = '${id}' AND pass = '${pwd}'`;

    db.query(sql, (err, res) => {
        if (err){
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    })
};

Customer.register = (newCustomer, result) => {
    db.query("INSERT INTO customers SET ?", newCustomer, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("Created customer: ", {...newCustomer});
        result(null, {...newCustomer});
    });
};

module.exports = Customer;