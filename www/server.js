"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const microframework_w3tec_1 = require("microframework-w3tec");
const ExpressLoader_1 = require("./loader/ExpressLoader");
const IocLoader_1 = require("./loader/IocLoader");
const DatabaseLoader_1 = require("./loader/DatabaseLoader");
microframework_w3tec_1.bootstrapMicroframework({
    loaders: [
        IocLoader_1.IocLoader,
        DatabaseLoader_1.DatabaseLoader,
        ExpressLoader_1.ExpressLoader
    ]
})
    .then(() => console.log('Application is up and running.'))
    .catch(error => console.log('Application is crashed: ' + error));
//# sourceMappingURL=server.js.map