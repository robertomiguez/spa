# SPA API

## Install

    $ git clone https://github.com/robertomiguez/spa.git
    $ cd spa
    $ npm install

## Start

    $ npm start

## Test

    $ npm run test

![GitHub Logo](/docs/datamodel-spa.png)    

**Create an user**
----
Returns json data with a new user.

* **URL**

http://localhost:3001/user

* **Method**

POST

* **Parameters**

required:

name=[String] - Constraints min(0)\
email=[String] - Constraints email format\
mobile=[String] - Constraints lenght(11)\
password=[String] - Constraints min(6)

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
```json    
{
    "_id": "5caf4f37800acc03df65c942",
    "name": "user",
    "email": "user@myemail.com",
    "mobile": "07770777077",
    "password": "$2b$10$67NPO/ld6RhJqy/qSjIUpeaEE4djxoMhBpHRxXdWSL7wz5n2Kl69C",
    "administrator": false
}
```

**Login**
----
Returns json data with an user if login was successfull.

* **URL**

http://localhost:3001/login

* **Method**

POST

* **Parameters**

required:

email=[String] - Constraints email format /
password=[String] - Constraints min(6)

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
```json    
"user logged"
```

**Get a logged user**
----
Returns json data with a logged user.

* **URL**

http://localhost:3001/user

* **Method**

GET

* **Parameters**


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
```json    
{
    "name": "admin",
    "email": "admin@admin.com",
    "mobile": "07440777065",
    "administrator": true
}
```

**Logout an user**
----
logout an user.

* **URL**

http://localhost:3001/logout

* **Method**

GET

* **Parameters**


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
```json    
"user logged out"
```

**Get a list of Postcodes**
----
Returns json data with a postcodes.

* **URL**

http://localhost:3001/postcode

* **Method**

GET

* **Parameters**


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
```json    
[
    {
        "_id": "5caa80252ad11c5860cf4b13",
        "postcode": "E7",
        "attend": true
    },
    {
        "_id": "5caa80432ad11c5860cf4b21",
        "postcode": "E15",
        "attend": false
    }
]
```

**Create an user address**
----
Returns json data with a new user address.

* **URL**

http://localhost:3001/address

* **Method**

POST

* **Parameters**

required:

number=[String] - Constraints max(100000)\
idPotocode=[String] - Constraints regex(/^[0-9a-f]{24}$/)

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
```json    
{
    "_id": "5caf4f61800acc03df65c944",
    "number": 50,
    "id_postcode": "5caa80252ad11c5860cf4b13",
    "id_user": "5caf4f37800acc03df65c942",
    "expired": null
}
```

**Get an user adddress**
----
Returns json data with an user address.

* **URL**

http://localhost:3001/address

* **Method**

GET

* **Parameters**


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
```json    
[
    {
        "_id": "5caf4f61800acc03df65c944",
        "name": "user",
        "email": "user@myemail.com",
        "mobile": "07770777077",
        "postcode": "E7",
        "number": 50,
        "id_user": "5caf4f37800acc03df65c942",
        "expired": null
    }
]
```

**Get an expired user adddress**
----
Returns json data with an expired user address.

* **URL**

http://localhost:3001/address/expired

* **Method**

GET

* **Parameters**


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
```json    
[
    {
        "_id": "5caf4f61800acc03df65c944",
        "name": "user",
        "email": "user@myemail.com",
        "mobile": "07770777077",
        "postcode": "E7",
        "number": 50,
        "id_user": "5caf4f37800acc03df65c942",
        "expired": "2019-04-11T14:34:29.078Z"
    }
]
```
**Update an user address**
----
Returns json data with an updated user address.

* **URL**

http://localhost:3001/address

* **Method**

PUT

* **Parameters**

optional:

number=[String] - Constraints max(100000)\
idPostcode=[String] - Constraints regex(/^[0-9a-f]{24}$/)

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
```json    
{
    "_id": "5caf4f61800acc03df65c944",
    "number": 50,
    "id_postcode": "5caa80252ad11c5860cf4b13",
    "id_user": "5caf4f37800acc03df65c942",
    "expired": null
}
```

**Delete an user address**
----
Returns no content.

* **URL**

http://localhost:3001/address

* **Method**

DELETE

* **Parameters**


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
```json    
```

**Get a list of treatments**
----
Returns json data with treatments.

* **URL**

http://localhost:3001/treatment

* **Method**

GET

* **Parameters**


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
```json    
[
    {
        "_id": "5ca7303a2ad11c5860ceff41",
        "name": "Swedish Massage",
        "description": "A truly traditional massage, using a massage cream or blend free oil.",
        "__v": 0
    },
    {
        "_id": "5ca730702ad11c5860ceff61",
        "name": "Indian Head Massage",
        "description": "This de-stressing treatment works on the head, neck, shoulders and face.",
        "__v": 0
    }
]
```

**Create a price**
----
Returns json data with a new price .

* **URL**

http://localhost:3001/price

* **Method**

POST

* **Parameters**

required:

duration=[String] - Constraints max(2) min(1)\
value=[String] - Constraints min(0/)\
idTreatment=[String] - Constraints regex(/^[0-9a-f]{24}$/)

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
```json    
{
    "_id": "5caf5d0646363331e3d3bf98",
    "duration": 1,
    "value": 40,
    "id_treatment": "5ca7303a2ad11c5860ceff41",
    "expired": null
}
```

**Get a list of prices**
----
Returns json data with prices.

* **URL**

http://localhost:3001/price

* **Method**

GET

* **Parameters**


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
```json    
[
    {
        "_id": "5cad0a4ab813147af2fd7d38",
        "name": "Indian Head Massage",
        "description": "This de-stressing treatment works on the head, neck, shoulders and face.",
        "duration": 1,
        "value": 50,
        "expired": ""
    },
    {
        "_id": "5caf3c480451f6381725b0a1",
        "name": "Indian Body Massage",
        "description": "This de-stressing treatment works on the body.",
        "duration": 1,
        "value": 50,
        "expired": ""
    }
]
```
**Get a list of expired prices**
----
Returns json data with expired prices.

* **URL**

http://localhost:3001/price/expired

* **Method**

GET

* **Parameters**


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
```json    
[
    {
        "_id": "5cad0a4ab813147af2fd7d38",
        "name": "Indian Head Massage",
        "description": "This de-stressing treatment works on the head, neck, shoulders and face.",
        "duration": 1,
        "value": 50,
        "expired": "2018-04-11T13:08:24.606Z"
    },
    {
        "_id": "5caf3c480451f6381725b0a1",
        "name": "Indian Body Massage",
        "description": "This de-stressing treatment works on the body.",
        "duration": 1,
        "value": 50,
        "expired": "2018-04-11T13:08:24.606Z"
    }
]
```

**Update a price**
----
Returns json data with a updated price .

* **URL**

http://localhost:3001/price/:idPrice

* **Method**

PUT

* **Parameters**

optional:

duration=[String] - Constraints max(2) min(1)\
value=[String] - Constraints min(0/)\
idTreatment=[String] - Constraints regex(/^[0-9a-f]{24}$/)

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
```json    
{
    "_id": "5caf5d0646363331e3d3bf98",
    "duration": 1,
    "value": 40,
    "id_treatment": "5ca7303a2ad11c5860ceff41",
    "expired": null
}
```
**Delete a price**
----
Returns no content.

* **URL**

http://localhost:3001/price/:idPrice

* **Method**

DELETE

* **Parameters**


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
```json    
```

**Create an appointment**
----
Returns json data with a new appointment .

* **URL**

http://localhost:3001/appointement

* **Method**

POST

* **Parameters**

required:

datetime=[String] - Constraints ISO\
discount=[String] - Constraints min(0)\
idPrice=[String] - Constraints regex(/^[0-9a-f]{24}$/)\
idAddress=[String] - Constraints regex(/^[0-9a-f]{24}$/)

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
```json    
{
    "_id": "5caef5e772fa0d2013d24f4f",
    "datetime": "2019-04-27T13:00:00.000Z",
    "discount": 3,
    "id_user": "5caef51e72fa0d2013d24f4c",
    "id_price": "5cae1163bd3087277d532f5b",
    "id_address": "5caef56a72fa0d2013d24f4d"
}
```

**Get an appointment**
----
Returns json data with an appointment .

* **URL**

http://localhost:3001/appointement

* **Method**

GET

* **Parameters**


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
```json    
[
    {
        "_id": "5caf609d46363331e3d3bf99",
        "name": "Indian Head Massage",
        "description": "This de-stressing treatment works on the head, neck, shoulders and face.",
        "duration": 1,
        "value": 50,
        "expired": null,
        "datetime": "2019-04-27T13:00:00.000Z",
        "discount": 3,
        "id_user": "5caf47bd922148156399b678"
    }
]
```

**Update an appointment**
----
Returns json data with a updated appointment .

* **URL**

http://localhost:3001/appointement/:idAppointment

* **Method**

PUT

* **Parameters**

required:

datetime=[String] - Constraints ISO\
discount=[String] - Constraints min(0)\
idPrice=[String] - Constraints regex(/^[0-9a-f]{24}$/)\
idAddress=[String] - Constraints regex(/^[0-9a-f]{24}$/)

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
```json    
{
    "_id": "5caef5e772fa0d2013d24f4f",
    "datetime": "2019-04-27T13:00:00.000Z",
    "discount": 3,
    "id_user": "5caef51e72fa0d2013d24f4c",
    "id_price": "5cae1163bd3087277d532f5b",
    "id_address": "5caef56a72fa0d2013d24f4d"
}
```

**Delete an appointment**
----
Returns no content.

* **URL**

http://localhost:3001/appointement/:idAppointment

* **Method**

DELETE

* **Parameters**


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
```json    
```
