let { Vector, VectorConstants } = require("simplevectors");

//Exampe: Creating vectors
let a = new Vector(-1,-1); //Create a new vector with components <-1, -1>
let b = new Vector();
b.fromTwoPoints([0,0],[2,2]); //Set this vector from two points
let c = new Vector();
c.fromMagnitudeAngle2D(10, Math.PI); //Set this vector from a magnitude and a direction (2D only)



//Example: Basic vector operations
let d = a.add(b); //Add b to a
console.log("a+b: ", d.toString());

d = a.subtract(b); //Subtract b from a
console.log("a-b: ", d.toString());

d = b.multiply(5); //Multiply a by a scalar
console.log("5*b: ", d.toString());



//Example: Getting the direction/unit vector and changing the vector's magnitude
d = a.unit(); //Get the unit vector
d = d.multiply(10); //And scale to 5

//OR, set the magnitude of the vector:
//d = a.getCopy(); //Get a copy of the vector
//d.magnitude = 5;
console.log("5*(a/|a|): ", d.toString()); 



//Example: More vector operations
d = a.cross(b);
console.log("a x b: ", d.toString());

let e = a.dot(b);
console.log("a•b: ", e);


e = b.angle(a); //Angle between a and b
console.log("Absolute angle between a and b: ", e);

e = a.angle(VectorConstants.D2.i); //Angle between b and positive x-axis
console.log("Absolute angle between a and positive x-axis (i): ", e);


//Example: Vector properties
console.log("Magnitude of a: ", a.magnitude);
console.log("Number of components in a: ", a.size);
console.log("Is unit vector? a/|a|: ", a.multiply(1/a.magnitude).isUnit());
console.log("Is equal vector? a/|a|==a: ", a.unit().isEqual(a));