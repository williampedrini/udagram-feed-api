"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
exports.IocLoader = () => routing_controllers_1.useContainer(typedi_1.Container);
//# sourceMappingURL=IocLoader.js.map