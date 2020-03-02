"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Feed_1 = __importDefault(require("../model/Feed"));
const typedi_1 = require("typedi");
let FeedMapper = class FeedMapper {
    /**
     * Converts a model into a data transfer object.
     * @param feed The model to be converted.
     * @return The converted data transfer object.
     */
    modelToDto(feed) {
        if (feed) {
            return {
                id: feed.id,
                caption: feed.caption,
                url: feed.url,
                createdAt: feed.createdAt,
                updatedAt: feed.updatedAt
            };
        }
        return null;
    }
    /**
     * Converts a data transfer object into a model.
     * @param request The data transfer object to be converted.
     * @return The converted model.
     */
    dtoToModel(request) {
        if (request) {
            return new Feed_1.default({
                url: request.url,
                caption: request.caption
            });
        }
        return null;
    }
};
FeedMapper = __decorate([
    typedi_1.Service()
], FeedMapper);
exports.default = FeedMapper;
//# sourceMappingURL=FeedMapper.js.map