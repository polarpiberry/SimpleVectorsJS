# SimpleVectorsJS
#### SimpleVectorsJS is a library to make working with vectors in Node JS easy, including all standard vector operations and properties for n-dimension vectors

## Installation
`npm install simplevectorsjs`

## Usage
#### Creating a vector
```
let { Vector, VectorConstants } = require("simplevectorsjs");

let a = new Vector(2, 0.5); //Create a new vector with components <-1, -1>
let b = new Vector();
b.fromMagnitudeAngle2D(10, Math.PI); //Set this vector from a magnitude and a direction (2D only)
let c = new Vector();
c.fromTwoPoints([0,0,0],[-2,2,1]); //Set this vector from two points
```

#### Basic vector operations
```
let d = a.add(b); //Add b to a
console.log("a+b: ", d.toString());

d = a.subtract(b); //Subtract b from a
console.log("a-b: ", d.toString());

d = b.multiply(5); //Multiply a by a scalar
console.log("5*b: ", d.toString());
```

#### Getting the direction/unit vector and changing the vector's magnitude
```
d = a.unit(); //Get the unit vector
d = d.multiply(10); //And scale to 5

//OR, set the magnitude of the vector:
//d = a.getCopy(); //Get a copy of the vector
//d.magnitude = 5;
console.log("5*(a/|a|): ", d.toString()); 
```


#### More vector operations
```
d = c.cross(new Vector(-1,2,1));
console.log("c x <-1, 2, 1>: ", d.toString());

let e = a.dot(b);
console.log("a•b: ", e);

e = c.tripleScalarProduct(new Vector(1,2,0), new Vector(-2,0,1));
console.log("c•(<1,2,0> x <-2,0,1>): ", e);

e = a.scal(b); //Scalar projection of b onto a
console.log("Scal_a b: ", e);

d = a.proj(b); //Vector projection of b onto a
console.log("Vect_a b: ", d.toString());

e = b.angle(a); //Angle between a and b
console.log("Absolute angle between a and b: ", e);

e = a.angle(VectorConstants.D2.i); //Angle between b and positive x-axis
console.log("Absolute angle between a and positive x-axis (i): ", e);
```

#### Vector properties
```
console.log("Magnitude of a: ", a.magnitude);
console.log("Number of components in a: ", a.size);
console.log("Is unit vector? a/|a|: ", a.multiply(1/a.magnitude).isUnit());
console.log("Is equal vector? a/|a|==a: ", a.unit().isEqual(a));
```

## License
Copyright 2020 Alex Mous

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Documentation
<a name="module_Simplevectors"></a>

## Simplevectors

* [Simplevectors](#module_Simplevectors)
    * [.Vector](#module_Simplevectors.Vector)
        * [new Vector(...components)](#new_module_Simplevectors.Vector_new)
        * _static_
            * [.Vector#magnitude](#module_Simplevectors.Vector.Vector+magnitude) : <code>number</code>
            * [.Vector#size](#module_Simplevectors.Vector.Vector+size) : <code>number</code>
            * [.Vector#magnitude](#module_Simplevectors.Vector.Vector+magnitude) : <code>number</code>
        * _inner_
            * [~fromMagnitudeAngle2D(magnitude, angle)](#module_Simplevectors.Vector..fromMagnitudeAngle2D)
            * [~fromMagnitudeAngle2D(point1, point2)](#module_Simplevectors.Vector..fromMagnitudeAngle2D)
            * [~unit()](#module_Simplevectors.Vector..unit) ⇒ <code>Vector</code>
            * [~multiply(k)](#module_Simplevectors.Vector..multiply) ⇒ <code>Vector</code>
            * [~add(vect)](#module_Simplevectors.Vector..add) ⇒ <code>Vector</code>
            * [~subtract(vect)](#module_Simplevectors.Vector..subtract) ⇒ <code>Vector</code>
            * [~cross(vect)](#module_Simplevectors.Vector..cross) ⇒ <code>Vector</code>
            * [~proj(vect)](#module_Simplevectors.Vector..proj)
            * [~getCopy()](#module_Simplevectors.Vector..getCopy) ⇒ <code>Vector</code>
            * [~dot(vect)](#module_Simplevectors.Vector..dot) ⇒ <code>number</code>
            * [~tripleScalarProduct(vect1, vect2)](#module_Simplevectors.Vector..tripleScalarProduct) ⇒ <code>number</code>
            * [~angle(vect)](#module_Simplevectors.Vector..angle) ⇒ <code>number</code>
            * [~scal(vect)](#module_Simplevectors.Vector..scal) ⇒ <code>number</code>
            * [~toString()](#module_Simplevectors.Vector..toString) ⇒ <code>string</code>
            * [~isUnit()](#module_Simplevectors.Vector..isUnit) ⇒ <code>boolean</code>
            * [~isEqual(vect)](#module_Simplevectors.Vector..isEqual) ⇒ <code>boolean</code>
    * [.VectorConstants](#module_Simplevectors.VectorConstants) : <code>VectorConstants</code>

<a name="module_Simplevectors.Vector"></a>

### Simplevectors.Vector
Simplevectors is a library to make working with vectors in Node JS easy, including all standard vector operations and properties for n-dimension vectors

**Kind**: static class of [<code>Simplevectors</code>](#module_Simplevectors)  

* [.Vector](#module_Simplevectors.Vector)
    * [new Vector(...components)](#new_module_Simplevectors.Vector_new)
    * _static_
        * [.Vector#magnitude](#module_Simplevectors.Vector.Vector+magnitude) : <code>number</code>
        * [.Vector#size](#module_Simplevectors.Vector.Vector+size) : <code>number</code>
        * [.Vector#magnitude](#module_Simplevectors.Vector.Vector+magnitude) : <code>number</code>
    * _inner_
        * [~fromMagnitudeAngle2D(magnitude, angle)](#module_Simplevectors.Vector..fromMagnitudeAngle2D)
        * [~fromMagnitudeAngle2D(point1, point2)](#module_Simplevectors.Vector..fromMagnitudeAngle2D)
        * [~unit()](#module_Simplevectors.Vector..unit) ⇒ <code>Vector</code>
        * [~multiply(k)](#module_Simplevectors.Vector..multiply) ⇒ <code>Vector</code>
        * [~add(vect)](#module_Simplevectors.Vector..add) ⇒ <code>Vector</code>
        * [~subtract(vect)](#module_Simplevectors.Vector..subtract) ⇒ <code>Vector</code>
        * [~cross(vect)](#module_Simplevectors.Vector..cross) ⇒ <code>Vector</code>
        * [~proj(vect)](#module_Simplevectors.Vector..proj)
        * [~getCopy()](#module_Simplevectors.Vector..getCopy) ⇒ <code>Vector</code>
        * [~dot(vect)](#module_Simplevectors.Vector..dot) ⇒ <code>number</code>
        * [~tripleScalarProduct(vect1, vect2)](#module_Simplevectors.Vector..tripleScalarProduct) ⇒ <code>number</code>
        * [~angle(vect)](#module_Simplevectors.Vector..angle) ⇒ <code>number</code>
        * [~scal(vect)](#module_Simplevectors.Vector..scal) ⇒ <code>number</code>
        * [~toString()](#module_Simplevectors.Vector..toString) ⇒ <code>string</code>
        * [~isUnit()](#module_Simplevectors.Vector..isUnit) ⇒ <code>boolean</code>
        * [~isEqual(vect)](#module_Simplevectors.Vector..isEqual) ⇒ <code>boolean</code>

<a name="new_module_Simplevectors.Vector_new"></a>

#### new Vector(...components)
Vector class


| Param | Type | Description |
| --- | --- | --- |
| ...components | <code>number</code> | Components of the vector to construct |

<a name="module_Simplevectors.Vector.Vector+magnitude"></a>

#### Vector.Vector#magnitude : <code>number</code>
Get the magnitude of the vector

**Kind**: static property of [<code>Vector</code>](#module_Simplevectors.Vector)  
<a name="module_Simplevectors.Vector.Vector+size"></a>

#### Vector.Vector#size : <code>number</code>
Get the number of components of the vector

**Kind**: static property of [<code>Vector</code>](#module_Simplevectors.Vector)  
<a name="module_Simplevectors.Vector.Vector+magnitude"></a>

#### Vector.Vector#magnitude : <code>number</code>
Set the new magnitude

**Kind**: static property of [<code>Vector</code>](#module_Simplevectors.Vector)  
<a name="module_Simplevectors.Vector..fromMagnitudeAngle2D"></a>

#### Vector~fromMagnitudeAngle2D(magnitude, angle)
Set this vector from magnitude and angle from positive x-axis in 2D

**Kind**: inner method of [<code>Vector</code>](#module_Simplevectors.Vector)  

| Param | Type | Description |
| --- | --- | --- |
| magnitude | <code>number</code> | Magnitude |
| angle | <code>number</code> | Angle (radians) |

<a name="module_Simplevectors.Vector..fromMagnitudeAngle2D"></a>

#### Vector~fromMagnitudeAngle2D(point1, point2)
Set this vector from the difference between two points

**Kind**: inner method of [<code>Vector</code>](#module_Simplevectors.Vector)  

| Param | Type | Description |
| --- | --- | --- |
| point1 | <code>Array.&lt;number&gt;</code> | Point 1 (array of distance in each dimension) |
| point2 | <code>Array.&lt;number&gt;</code> | Point 2 (same number of dimensions as Point 1) |

<a name="module_Simplevectors.Vector..unit"></a>

#### Vector~unit() ⇒ <code>Vector</code>
Unit vector

**Kind**: inner method of [<code>Vector</code>](#module_Simplevectors.Vector)  
**Returns**: <code>Vector</code> - The unit vector  
<a name="module_Simplevectors.Vector..multiply"></a>

#### Vector~multiply(k) ⇒ <code>Vector</code>
Scalar multiplication

**Kind**: inner method of [<code>Vector</code>](#module_Simplevectors.Vector)  
**Returns**: <code>Vector</code> - Scaled vector  

| Param | Type | Description |
| --- | --- | --- |
| k | <code>number</code> | Scalar k to multiply vector by |

<a name="module_Simplevectors.Vector..add"></a>

#### Vector~add(vect) ⇒ <code>Vector</code>
Add vect to this vector

**Kind**: inner method of [<code>Vector</code>](#module_Simplevectors.Vector)  
**Returns**: <code>Vector</code> - New vector  

| Param | Type | Description |
| --- | --- | --- |
| vect | <code>Vector</code> | Vector to add to this |

<a name="module_Simplevectors.Vector..subtract"></a>

#### Vector~subtract(vect) ⇒ <code>Vector</code>
Subtract vect from this vector

**Kind**: inner method of [<code>Vector</code>](#module_Simplevectors.Vector)  
**Returns**: <code>Vector</code> - Difference between this and vect  

| Param | Type | Description |
| --- | --- | --- |
| vect | <code>Vector</code> | Vector to subtract from this |

<a name="module_Simplevectors.Vector..cross"></a>

#### Vector~cross(vect) ⇒ <code>Vector</code>
Cross product (3D vectors) of vect with this vector (this x vect)

**Kind**: inner method of [<code>Vector</code>](#module_Simplevectors.Vector)  
**Returns**: <code>Vector</code> - The cross product vector  

| Param | Type | Description |
| --- | --- | --- |
| vect | <code>Vector</code> | Vector to do a cross product with |

<a name="module_Simplevectors.Vector..proj"></a>

#### Vector~proj(vect)
Vector projection of vect onto this vector

**Kind**: inner method of [<code>Vector</code>](#module_Simplevectors.Vector)  

| Param | Type |
| --- | --- |
| vect | <code>Vector</code> | 

<a name="module_Simplevectors.Vector..getCopy"></a>

#### Vector~getCopy() ⇒ <code>Vector</code>
Get a copy of this vector

**Kind**: inner method of [<code>Vector</code>](#module_Simplevectors.Vector)  
**Returns**: <code>Vector</code> - A copy of this vector  
<a name="module_Simplevectors.Vector..dot"></a>

#### Vector~dot(vect) ⇒ <code>number</code>
Dot product

**Kind**: inner method of [<code>Vector</code>](#module_Simplevectors.Vector)  
**Returns**: <code>number</code> - The dot product of the two vectors  

| Param | Type | Description |
| --- | --- | --- |
| vect | <code>Vector</code> | Vector to do a dot product with |

<a name="module_Simplevectors.Vector..tripleScalarProduct"></a>

#### Vector~tripleScalarProduct(vect1, vect2) ⇒ <code>number</code>
Get the triple scalar product of this vector, vect1 and vect2 (this•(vect1 x vect2))

**Kind**: inner method of [<code>Vector</code>](#module_Simplevectors.Vector)  
**Returns**: <code>number</code> - Triple scalar product  

| Param | Type | Description |
| --- | --- | --- |
| vect1 | <code>Vector</code> | First vector |
| vect2 | <code>Vector</code> | Second vector |

<a name="module_Simplevectors.Vector..angle"></a>

#### Vector~angle(vect) ⇒ <code>number</code>
Angle between this vector and vect (0 <= angle <= PI)

**Kind**: inner method of [<code>Vector</code>](#module_Simplevectors.Vector)  
**Returns**: <code>number</code> - Angle (0 <= theta <= PI)  

| Param | Type | Description |
| --- | --- | --- |
| vect | <code>Vector</code> | Vector to calculate angle between |

<a name="module_Simplevectors.Vector..scal"></a>

#### Vector~scal(vect) ⇒ <code>number</code>
Scalar projection of vect onto this vector

**Kind**: inner method of [<code>Vector</code>](#module_Simplevectors.Vector)  
**Returns**: <code>number</code> - Projection  

| Param | Type |
| --- | --- |
| vect | <code>Vector</code> | 

<a name="module_Simplevectors.Vector..toString"></a>

#### Vector~toString() ⇒ <code>string</code>
Get the string representation of the vector

**Kind**: inner method of [<code>Vector</code>](#module_Simplevectors.Vector)  
**Returns**: <code>string</code> - Vector as a string  
<a name="module_Simplevectors.Vector..isUnit"></a>

#### Vector~isUnit() ⇒ <code>boolean</code>
Is this a unit vector?

**Kind**: inner method of [<code>Vector</code>](#module_Simplevectors.Vector)  
<a name="module_Simplevectors.Vector..isEqual"></a>

#### Vector~isEqual(vect) ⇒ <code>boolean</code>
Is this the same as vect?

**Kind**: inner method of [<code>Vector</code>](#module_Simplevectors.Vector)  

| Param | Type |
| --- | --- |
| vect | <code>Vector</code> | 

<a name="module_Simplevectors.VectorConstants"></a>

### Simplevectors.VectorConstants : <code>VectorConstants</code>
**Kind**: static constant of [<code>Simplevectors</code>](#module_Simplevectors)  
