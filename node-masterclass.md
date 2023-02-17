

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



### Related Links/Videos

1. Higher order functions
2. REST API explanation 


### Assignments :
  
- **Assignment 1** : If we delete `node_modules`. How to run our app again successfully ?


- **Assignment 2** : How to remove double `console.logs` from React ? [ it is not needed in real life to remove them, its just an assignment problem ].  [ *Hint: Some special Component at top level is of App is causing it* ]. We explore more about  - why this is needed in later videos.

### Special Assignments ==============

- **Assignment 3** : Create a Page with multiple React Apps. Both React Apps should be independent of each other.

- **Assignment 4** : Try to build a react app using other toolchains like `Vite`


