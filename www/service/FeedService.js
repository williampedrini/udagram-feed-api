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
const Feed_1 = __importDefault(require("../model/Feed"));
const typedi_1 = require("typedi");
const AWSService_1 = __importDefault(require("./AWSService"));
const routing_controllers_1 = require("routing-controllers");
const FeedMapper_1 = __importDefault(require("../mapper/FeedMapper"));
let FeedService = class FeedService {
    /**
     * Persists a specific feed into the database.
     * @param request The object holding the data to be persisted.
     * @return The persisted feed if success.
     */
    create(request) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!request.caption) {
                throw new routing_controllers_1.BadRequestError('Caption is required or malformed');
            }
            if (!request.url) {
                throw new routing_controllers_1.BadRequestError('File url is required');
            }
            const feed = this.mapper.dtoToModel(request);
            const persistedFeed = yield feed.save();
            persistedFeed.url = this.awsService.getGetSignedUrl(persistedFeed.url);
            return this.mapper.modelToDto(persistedFeed);
        });
    }
    /**
     * Search for all existing feeds into database.
     * @return All existing feeds found.
     */
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const items = yield Feed_1.default.findAndCountAll({
                order: [['id', 'DESC']]
            });
            return items.rows.filter(item => item.url)
                .map(feed => {
                feed.url = this.awsService.getGetSignedUrl(feed.url);
                return feed;
            })
                .map(feed => this.mapper.modelToDto(feed));
        });
    }
    /**
     * Search for a specific feed by its identifier.
     * @param id The feed identifier.
     * @return The feed if found any.
     */
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const feed = yield Feed_1.default.findByPk(id);
            return this.mapper.modelToDto(feed);
        });
    }
};
__decorate([
    typedi_1.Inject(),
    __metadata("design:type", AWSService_1.default)
], FeedService.prototype, "awsService", void 0);
__decorate([
    typedi_1.Inject(),
    __metadata("design:type", FeedMapper_1.default)
], FeedService.prototype, "mapper", void 0);
FeedService = __decorate([
    typedi_1.Service()
], FeedService);
exports.default = FeedService;
//# sourceMappingURL=FeedService.js.map