const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require("path");
const config = require('config');

const DataManager = require("./server/DataManager");
const dm = new DataManager();

class App {

    /**
     * Creates and start the application
     * @param {express} application 
     */
    constructor(application) {

        if(!config.has("server")) {
          throw("Please fill the server configs!");
        }
        this.app = application;

        App.dm = dm;
        this.initEngine();
        this.initRoutes();
        this.start();
    }

    /**
     * Initializes the EJS engine and the required resources
     */
    initEngine() {
        let bodyParser = require('body-parser');

        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.set('view engine', 'ejs');
        this.app.set('views', path.join(__dirname, '/template'));
        this.app.use(express.static(path.join(__dirname , '/data/css')));
    }

    /**
     * Creates and assigns a Controller present in ./server/controllers
     * @param {nameof Controller} object 
     */
    initRoute(object) {
        let controller = require("./server/controllers/"+object);
        new controller(App.dm).assign(this.app);
    }

    /**
     * Initializes every controller 
     */
    initRoutes() {
        this.initRoute("RootController");
        this.initRoute("RegisterController");
        this.initRoute("ProfileController");

        this.initRoute("DBTestController");
        
        this.initRoute("NotFoundController");
    }

    /**
     * Starts the application's listening for requests
     */
    start() {
        app.listen(config.get("server.port"), function () {
            console.log("CDP app listening on port "+config.get("server.port")+"!");
        })
    }
}

const application = new App(app);