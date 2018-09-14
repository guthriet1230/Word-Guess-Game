var car = {

    // Properties of our car object.
    make: "Honda",
    model: "Fit",
    color: "Blue Raspberry",
    mileage: 3000,
    isWorking: true,

    // Creating the driveToWork method.
    // A method is a function associated with an object.
    driveToWork: function () {

        // When we say "this" (as in this.mileage) we are referring to the object the method is a part of.
        // In this case, we will alert the mileage of the car object.
        alert("Old Mileage: " + this.mileage);

        // Adding 8 to the car's mileage.
        this.mileage = this.mileage + 8;

        // Alerting the car's new mileage.
        alert("New mileage: " + this.mileage);
    },

    // The driveAroundWorld method adds 24,000 miles to our car, sets isWorking to false, and makes some alerts.
    driveAroundWorld: function () {

        alert("Old Mileage: " + this.mileage);

        this.mileage = this.mileage + 24000;

        alert("New Mileage: " + this.mileage);
        alert("Car needs a tuneup!");

        this.isWorking = false;
    },

    // The getTuneUp method sets isWorking to true and alerts a message.
    getTuneUp: function () {
        alert("Car is ready to go!");
        this.isWorking = true;
    },

    // The honk method alerts a honking message.
    honk: function () {
        alert("Honk! Honk!");
    },

    //   console.logStats()
    logStats: function () {
        console.log(car);
    }
    //^this is a method
};

//-----------------------
//event handler for key up
// -----------------------

document.onkeyup = function (event) {
    console.log(event.key);

    // if h then honk - log stats
    if (event.key === "h") {
        car.honk();
        car.logStats();
    }

    // if d then drive to work - log stats
    if (event.key === "d") {
        car.driveToWork();
        car.logStats();
    }

    // if w thend rive around the world - log stats
    if (event.key === "w") {
        car.driveAroundWorld();
        car.logStats();
    }

    // if t then tune up - log stats
    if (event.key === "t") {
        car.getTuneUp();
        car.logStats();
    }
}