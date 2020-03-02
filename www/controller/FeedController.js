"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
const FeedService_1 = __importDefault(require("../service/FeedService"));
const AWSService_1 = __importDefault(require("../service/AWSService"));
let FeedController = class FeedController {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.feedService.findAll();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.feedService.findById(id);
        });
    }
    create(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.feedService.create(request);
        });
    }
    getSignedUrl(fileName) {
        return this.awsService.getPutSignedUrl(fileName);
    }
};
__decorate([
    typedi_1.Inject(),
    __metadata("design:type", FeedService_1.default)
], FeedController.prototype, "feedService", void 0);
__decorate([
    typedi_1.Inject(),
    __metadata("design:type", AWSService_1.default)
], FeedController.prototype, "awsService", void 0);
__decorate([
    routing_controllers_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FeedController.prototype, "findAll", null);
__decorate([
    routing_controllers_1.Get('/:id'),
    __param(0, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FeedController.prototype, "findById", null);
__decorate([
    routing_controllers_1.Post(),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FeedController.prototype, "create", null);
__decorate([
    routing_controllers_1.Get('/signed-url/:fileName'),
    __param(0, routing_controllers_1.Param('fileName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], FeedController.prototype, "getSignedUrl", null);
FeedController = __decorate([
    routing_controllers_1.JsonController("/feeds")
], FeedController);
exports.default = FeedController;
//# sourceMappingURL=FeedController.js.map