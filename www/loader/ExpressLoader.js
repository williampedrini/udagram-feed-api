"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const GlobalErrorHandlerMiddleware_1 = __importDefault(require("../middleware/GlobalErrorHandlerMiddleware"));
const FeedController_1 = __importDefault(require("../controller/FeedController"));
exports.ExpressLoader = (settings) => {
    if (settings) {
        const application = routing_controllers_1.createExpressServer({
            defaultErrorHandler: false,
            controllers: [FeedController_1.default],
            middlewares: [GlobalErrorHandlerMiddleware_1.default]
        });
        settings.setData('express_app', application);
        settings.setData('express_server', application.listen(8082));
    }
};
//# sourceMappingURL=ExpressLoader.js.map