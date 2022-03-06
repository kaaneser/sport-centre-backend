const db = require("../database/database");

const Membership = function(membership) {
    this.id = membership.id;
    this.end_date = membership.end_date;
}

Membership.getMembershipWithId = (id, result) => {
    let sql = `SELECT * FROM membership WHERE id = '${id}'`;

    db.query(sql, (err, res) => {
        if (err){
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    })
};

Membership.newMembership = (newMembership, result) => {
    db.query("INSERT INTO membership SET ?", newMembership, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("Created membership: ", {...newMembership});
        result(null, {...newMembership});
    });
};

module.exports = Membership;