const User = require('../model/user');

const user = async (req, res) => {

// console.log(req.body);
    // const {firstName } =  req.body;

// console.log(firstName)
    // return res.send("ok")
    try {
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            persons: req.body.persons,
            selectedDate: req.body.selectedDate,
            source: req.body.source,
            destination: req.body.destination,
            passengerClass: req.body.passengerClass,
            flightPrice: req.body.flightPrice,
            seats: req.body.seats,
        })
        console.log(newUser);
        await newUser.save();
        // return res.status(201).json({ message: 'User created successfully' });
        // return res.redirect("http://localhost:5173/about")
    } catch (error) {
        console.log("CREATE USER FAILED", error);
        return res.status(400).send("Error. Try again.");
    }
}

// const newUser = async (req, res) => {
//     return res.json({name: 'James', file: "iak"})
// }

module.exports = {user};