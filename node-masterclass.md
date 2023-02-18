

# FULL STACK COURSE 2023

## Node JS MasterClass   

Hi, This is course page of **CoderDost Youtube Channel** Node JS 2023 Course [Course Link ](),

### How to use this code :

#### You can **download code** in 2 ways  :

1. **Git Commands**

   - use `git clone <repository_url>`

   - checkout branch according to Chapter number `git checkout node-1`

   - run `npm install` inside the root directory before running the code

  

2. If you are not comfortable with git, directly **download the branch as Zip**.

   - Choose branch related to the Chapter e.g. `node-1`

   - run `npm install` inside the root directory before running the code

  
  

# Node JS Series

  
 

## Chapter 1 - Introduction to Node, NPM, Package.JSON

### Chapter Notes :
- **Node JS** installation from official site nodejs.org - use only LTS versions 
-  Use **terminal / command prompt** to check installation :
	``` node -v ```
	```npm -v ```
- **VS code** installation directly from code.visualstudio.com site
- Use VS code terminal to run  **commands**
- **Node REPL** interface can be used directly by typing `node` in **terminal / command prompt** . Use **Ctrl+D** to exit interface. Use **CTRL+C**  to exit terminal
- Running any JavaScript file from node using `node filename.js`
- **Modules** are basic containers in Node/JavaScript system. 1 file can be one module in Javascript.
- Two type of Module Systems in node JS are - **CommonJS** module and **ES** Modules.

**- CommonJS Module** 
```
//lib.js
exports.sum = function(){}

//index.js
const module = require('./lib.js')
module.sum();
```
**- ES Module**

```
//lib.js
export {sum}

//index.js
import {sum} from './lib.js'
	
```

- FileSystem Module(fs) is one of core modules of Node JS. **fs** can be used to read/write any file. There are many more core modules in NodeJS which you can check in NodeJS API docs.
- Reading files can be **Synchronous** or **Asynchronous**. **Async** is most preferred method in NodeJS. As there is **NO blocking of I/O in NodeJS**

- Node project can be initialized with `npm init` command which also creates `package.json` file
- **package.json** is a configuration file for node projects which has **scripts**, **dependencies**, **devDependencies** etc
- `npm install <package-name>` is used to install any online modules available for node on NPM repository online.
-  `nodemon` is a package for running node server and track live changes to re-start again.
-  `scripts` inside **package.json** can be used like `npm run <script-name>` e.g `npm run dev`. Only for `npm start` you can avoid `run`.
- use `npm install -g <package.json>` to install packages globally on your system. Not just in the project but useful all over your system.
- Node versions are formatted like **4.1.9** where these are `major.minor.patch` versions.
- you can install all dependencies again using `npm install` again
- **package-lock.json** has exact versions installed and link of dependencies of each package.
- use `npm update` to update packages safely. `npm outdated` shows outdated and latets versions of packages installed in your  **package.json**
-  use `npm uninstall <package-name>` to uninstall packages from `package.json`
- `node_modules` should not be shared - you can make `.gitignore`to ignore them to be uploaded.


### Related Links/Videos

1. Callbacks
2. Promises
3. Async Await
4. Import/ Export example
5. Event Loop in Node JS


## Chapter 2 - Server Concepts with Node - http module

### Chapter Notes :
- HTTP requests have  - request line, headers and body
- HTTP response have - status line, headers and body 
- HTTP requests and responses can be tracked from  **Dev Tools** > **Network Tab** 
- In Node, we can use core **http** module to create a Server which listens to requests, modify data in-between and provides responses. Server needs a **PORT** to be bound to - use only port number > 1024.
- Server can simply be said as **a function which receives a request and returns a response**. [ This is just for understanding]
- There are many **Headers** which exists on request and responses - shared a link below with list of existing headers.

-   We can use Server to do 3 things:
	- **Static file Hosting** : Sending normal files without formatting or modifying.
	- **Server Side Rendering** : Mixing data with templates and rendering dynamic views (dynamic web pages)
	- **Web APIs** : Sending data via some APIs/ endpoints.

-   Every Request has one and only one response. If there is more than 1 response which you want to send - you will encounter a error - "*Headers already sent*" 
- POSTMAN is a software for doing complex  API requests.  

### Related Links/Videos

1. HTTP headers list :
2. dummy JSON site :
3. Postman


## Chapter 3 - Express JS

### Chapter Notes :
 
- **ExpressJS** is *de-facto* Node framework - and used in most Node applications which are used as web server.
- You can install express `npm install express`
- Express has few level of methods :
	- Application methods : e.g. app.use()
	- Request methods
	- Response methods
	- Middleware methods
	- Router methods

- **Response** methods (**res** is our response objects)
	- **res.send()** - for sending HTML
	- **res.sendFile(**) - for sending File
	- **res.json** - for sending JSON 
	- **res.sendStatus(404)** - for sending HTTP status only
	- 
- **HTTP Request** Types we generally use :
	- GET
	- POST
	- PUT
	- DELETE
	- PATCH
 - API / Endpoints / Routes are used inter-changeably but they are related to server paths.

- **Middle-ware** : Modifies the request before it reaches the next middleware or endpoints.
- Sequence of middleware is very important, as first middleware is first traversed by request.
- Middle-wares can be used for many use cases, like loggers, authentication, parsing data etc.
- Middle-ware can be :
	- Application level : server.use(**middleware**) 
	- Router level : server.get('/', **middleware**, (req,res)=>{})
	- Built-in middleware : **express.json()** [ for parsing body data], **express.static()**[for static hosting]
	- External Middle-wares - like **morgan**

- **Request** properties (**req** is our request object)
	- **req.ip** - IP address of client
	- **req.method** - HTTP method of request
	- **req.hostname** - like google.com / localhost
	- **req.query** - for capturing query parameters from URL e.g. localhost:8080 ? **query=value**
	- **req.body** -for capturing request body data (but its needs a middleware for body data decoding)
	-  **req.params** - for capturing URL parameters for route path like `/products/:id` 

- **Static Hosting** : we can make 1 or more folders as static hosted using **express.static** middleware.
	`server.use(express.static(< directory >))`
Static hosting is like sharing a folder/directory and making its file readable as it is.
Note : `index.html` is default file which would be read in a static hosted folder, if you don't mention any file name.

3 ways to send data from request are:
1. **Query Parameters**
	- **req.query** - for capturing query parameters from URL e.g. localhost:8080 ? **query=value**
2. **Body Data**
	- **req.body** -for capturing request body data (but its needs a middleware for body data decoding)
3. **URL Parameters**
	-  **req.params** - for capturing URL parameters for route path like `/products/:id` 


### Related Links/Videos

1. Express JS site:
2. HTTP response status 

## Chapter 4 - REST API using Express

### Chapter Notes :

- REST API is a standard for making APIs.
	- We have to consider a resource which we want to access - like **Product**
	- We access **Product** using combination of HTTP method and URL style

**REST API ( CRUD - Create , Read , Update, Delete) :**
	
- **CREATE**
	- **POST** /products - create a new resource (product)
	
- **READ**
	- **GET** /products - read many resources (products)
	- **GET** /products/:id - read one specific resource (product)

- **UPDATE**
	- **PUT** /products/:id - update by replacing all content of specific resource (product).
	- **PATCH** /products/:id - update by only setting content from body of request and not replacing other parts of specific resource (product).

- **DELETE**
	- **DELETE** /products/:id - delete a specific resource (product).

## Chapter 5 - Backend Directory Structure / MVC / Router

### Chapter Notes :

MVC (Model-View-Controller) is **a pattern in software design commonly used to implement user interfaces (VIEW), data (MODEL), and controlling logic (CONTROLLER)**. It emphasizes a separation between the software's business logic and display.

In Our Project this will be :
**Model** - Database Schema's and Business logics and rules
**View** - Server Side Templates (or React front-end)
**Controller** - functions attached to routes for modifying request and sending responses.  It's a link between the Model and View.

**Router**
- These are like mini-application on which you can make set of Routes independently. 
- Routers can be attached to main Server App using `server.use(router)`

Arrange Directory in Server like this :

**Controllers** - file containing functions which are attached to each route path 
**Routes** - files containing routers
**Models** :  to be discussed in later chapters
**Views**: to be discussed in later chapters

## Chapter 6 - MongoDB - Server / Mongo Shell (CLI)  / Mongo Atlas

### Chapter Notes :

**Mongo Server**
- You can install **MongoDB community server** for your system and set the **Path** to `bin` folder
- You can choose your own database path while starting the **mongod** server 
```
 mongod --dbpath <path-to-db-directory>
```

**Mongo Compass** : UI Client to see mongo server (local or remote)

**Mongo Shell** : Command-line based mongo client for checking mongo database.

Some Mongo Commands:

### Top Level commands : 
(run from anywhere inside the shell)
- show dbs;
- use < database-name > - to choose a database and go inside its prompt  

### Database CRUD commands :
(run only from inside a database)

#### CREATE COMMANDS 
- db.< collectionName >.insertOne( *newDocument* )
-  db.< collectionName >.insertMany(  *documentArray* )

#### READ COMMANDS
- db.< collectionName >.**find**( *filterObject* ) - to read all docs
- db.< collectionName >.**findOne**( *filterObject* )  - to read one document
- db.< collectionName >.**countDocuments**( *filterObject* ) - shows total number of documents.

**filter** Object : *{ fieldName : {operator: value}}*
fieldName : database fields name
**operator** : $eq = equal , $gt= greater than, $lt : less than, $gte = greater than equal, $and and $or operator
**value** : what value we are comparing with operator.

e.g { age : {$gt:5}}. - **age** is **greater than**  value **5**

**Cursor functions :**
These are applied to find() query .
 - **sort**( {fieldName: 1}) :  1 for ascending -1 for descending
 - **limit**( x ) : only gives x documents

#### UPDATE COMMANDS 
 
 -  db.< collectionName >.**updateOne**(  *filterObject*, *updateObject*, options )
     -  update Objects =  *{ $set : {field: value}}*
     - options : *{upsert: true}*  

**Upsert** : Update + Insert, when we want a new info to create a new obejcts if no existing object matches filter queries.

 -  db.< collectionName >.**replaceOne**(  *filterObject*, *updateObject* )
 Overwrites other fields also which are not in updateObject.

#### DELETE COMMANDS 
 
 -  db.< collectionName >.**deleteOne**(  *filterObject* )


 **Projection**
 - Only return selected fields while returning result documents.
 - db.< collectionName >.find( *filterObject*, projectionObject ) 
e.g. {name:1, age:1, id:0} - only show **name** and **age** and don't show **id**

**MONGO ATLAS CLOUD SETUP** : Check the video in tutorial
  
 ** Enviroment Variable** : To use environment variable we can use a npm package called **dotenv** which will create new **process.env** variables. 
 -  Install `dotenv` using `npm install dotenv` 
 - just have use `.env` file in your root directory
 - and call `require('dotenv').config()`

## Chapter 7 - Mongoose and REST APIs

- install mongoose
 `npm install mongoose`
 - Mongoose connection code
```
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
```
 - Mongoose **Schema** : Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

```
const  productSchema  =  new  Schema({

title: {type:  String, required:  true, unique:  true} ,
description:  String,
price: {type:  Number, min:[0,'wrong price'],required:  true},
discountPercentage: {type:  Number, min:[0,'wrong min discount'], max:[50,'wrong max discount']},
rating: {type:  Number, min:[0,'wrong min rating'], max:[5,'wrong max rating']},
brand: {type:  String,required:  true},
category: {type:  String, required:  true},
thumbnail: {type:  String, required:  true},
images: [ String ]

});
```

 - Mongoose **Model**  : model are built using a combination of Schema and name of Collection.
```
const Product  =  mongoose.model('Product', productSchema);
```

 - Mongoose **Document** - its is instance of a model. so Model is like a class and documents are like its objects. These documents are directly saved in mongoDB.
 ```
  const document = new Product();
 // document is actually saved in database after save()
  await document.save();
```

Mongoose Schema/Model can act as **Model** of **Model**-View-Controller concept.

### CRUD API and mongoose methods

**CREATE** :
1. **create product** - use **POST ** HTTP Method

```
   const product = new Product();
   await product.save()
   ```
   
**READ** :

1. **read all products** - use **GET** HTTP Method
```
const  products  =  await  Product.find();

const  products  =  await  Product.find({price:{$gt:500}});
```
2. **read 1 product** - use **GET**  HTTP Method
```
const  product  =  await  Product.findById(id);
```

**UPDATE** :

1. replace product fields (all fields) - use **PUT**  HTTP Method
```
const  doc  =  await  Product.findOneAndReplace({_id:id},req.body,{new:true})
```

2. update only some product fields - use **PATCH**  HTTP Method

```
const  doc  =  await  Product.findOneAndUpdate({_id:id},req.body,{new:true})
```


**DELETE** :
1. delete  1 product  - use **DELETE** HTTP Method
```
const  doc  =  await  Product.findOneAndDelete({_id:id})
```


### Chapter Notes :

## Chapter 8 - React Integration and MERN Stack Live deployment 

### Chapter Notes :


**Sending data from front-end to Server**
1. Fetch : it is in-built API in the browser
2. Axios : we will use **axios** as it is easier to use.
  
  **CORS Issues :**
  
  CORS - [Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) ([CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS)) is a standard that allows a server to relax the [same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy) 

- we  will use CORS package to allow cross origin request from **React JS** server to **NodeJS** server  as they are on different hosts.
- `npm install cors`
- to use cors - 
```
const cors = require('cors');

server.use(cors())
```
**HTML Forms**

- `name` attribute on input elements is used to send data keys which are validated with schema in backend.

### Build a React Project :
- Run `npm run build`
- use `build` folder to be hosted on public hosting/static hosting

### Host a React Project :

you can use `build` folder of react and add it to static hosting of express.
`server.use(express.static('build'));`

### Use Routing in Front-end

use wildcard in express route to point to React single page applications (index.html)

```
res.sendFile(path.resolve(__dirname,'build','index.html'))
```
`__dirname` is a variable







## Chapter 9 - Deploy  Live 

### Chapter Notes :

**Preparation for deployment**
- First check whether front-end routes are independent of server, and make all of them relative to `/`
- Connect MongoDB atlas - in-place of mongo local database
-

### How to Deploy to Vercel :
- Commit you code on a github account (personal account for free services)
- Set Environment Variables on Vercel - like MONGO_URL, PUBLIC_DIR
- Put a vercel config file - `vercel.json` in your project root directory.
-  After every change, commit your changes - and push code on github.
- You have to provide permission for github directory to vercel. It will pickup `vercel.json` and `package.json` and deploy your code accordingly.
- Check video for more details.


### Related Links/Videos

1. Heroku Deployment  of MERN Stack :
2. Git crash course




## Chapter 10 - Server  Side Rendering 

### Chapter Notes :

Server side rendering is done using many templating languages
- EJS
- Pug
- Handlebars

We have used EJS which is one of the most popular one.

Install 
`npm install ejs`

-   Control flow with  `<% %>`
-   Escaped output with  `<%= %>`  (escape function configurable)

```
<% if (product) { %>
 <h2><%= product.title %></h2>
<% } %>
```

For passing variable to template engine and render a new page :

```
const ejs = require('ejs');


ejs.renderFile(path.resolve(__dirname,'../pages/index.ejs'), {products:products}, function(err, str){
    res.send(str); // this is the rendered HTML
});
```

### How to send HTML FORM data to Express

- You need to have input boxes have proper `name` which will be used as `key` to objects sent to backend. Mostly in form like `name=value`
- use **action** or  for API destination
`action="/products"`
- use **method** or  for API type
`method="POST"`
- use **enctype** with value `application/x-form-urlencoded`




### Related Links/Videos

1. DOM Series

## Chapter 11 - Authentication  with JWT 

### Using JWT for generating Auth Tokens

#### JWT library installation
		`npm install jsonwebtoken`
- Use jwt.io to understand 3 parts of JWT - headers, payload, signature

 #### Signing of JWT
`jwt.sign(payload, secret)` this returns a **token**

#### verifying a JWT token
`jwt.verify(token, secret)` this returns decoded value of **payload**

We will use HTTP Authorization headers for exchanging these tokens
e.g. `Authorization = 'Bearer JWT_TOKEN_VALUE'`
		
**Using RSA algorithm** (public-private key) : check video.

###  Password Hashing

you can use a library like `bcrypt` to hash password, so they are not stored in plain text format

#### Installation :

`npm install bcrypt`

#### Hashing

```bcrypt.hashSync(userProvidedPassword, saltRounds)```
 
#### Verifying Password

`bcrypt.compareSync(loginPassword, AlreadyHashedPassword)`

return `true` of `false` based on verification of password	




### Chapter Notes :

## Chapter 12 - Mongoose Advanced queries, Node Streams, Events etc.

### Chapter Notes :

#### Mongoose Queries

**Sorting**:

find().**sort**({fieldname: 1})   // ascending can be *1, asc, ascending* , Descending values can be *-1, desc, descending*

**Pagination related queries**:

find().**limit**(pageSize).**skip**( pageSize*(pageNumber-1)) // where **pageSize** is number of document results you want to show. 

**Population**



#### Node Events and Event Emitter

```const em = new EventEmitter()```

```em.on(eventName, (payloadData)=>{} )``` - listeners

```em.emit( eventName , payloadData )``` - emit events


#### Node Streams

A readable stream

```
const  rr  =  fs.createReadStream('./data.json');

rr.on('data', (data) => { // received data event on every file read
 console.log({data});
});

rr.on('end', (data) => {  // received end of stream event
 console.log({data});
});
```

#### Socket in Node (Socket.IO)

#### Install Socket IO library

```npm install socket.io```

#### Server Side Code

```
const  server  =  express();
const  app  =  require('http').createServer(server);
const  io  =  require('socket.io')(app);

io.on('connection', (socket) => {
console.log('socket',socket.id)

socket.on('msg',(data)=>{ // listener to client-side events 'msg'
console.log({data})
})
socket.emit('serverMsg',{server:'hi'} //emitting 'serverMsg' for Client-side
});

app.listen(port)

```

#### Client Side Code

```
// embeding client-side library which will be downloaded from module installed on Server
<script  src="/socket.io/socket.io.js"></script>

<script>
const  socket  =  io();
console.log('socket',socket.id)

socket.emit('msg',{player:'one'}) // emitting 'msg' to server-side

socket.on('serverMsg',(data)=>{  // listener to server-side events 'serverMsg'
   console.log({data});
})

</script>
```


Multer
Passport




### Assignments :
  
- **Assignment 1** : If we delete `node_modules`. How to run our app again successfully ?


- **Assignment 2** : How to remove double `console.logs` from React ? [ it is not needed in real life to remove them, its just an assignment problem ].  [ *Hint: Some special Component at top level is of App is causing it* ]. We explore more about  - why this is needed in later videos.

### Special Assignments ==============

- **Assignment 3** : Create a Page with multiple React Apps. Both React Apps should be independent of each other.

- **Assignment 4** : Try to build a react app using other toolchains like `Vite`


