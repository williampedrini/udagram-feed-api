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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const Config_1 = require("../config/Config");
const aws_sdk_1 = __importDefault(require("aws-sdk"));
let AWSService = class AWSService {
    constructor() {
        this.configuration = Config_1.config;
        aws_sdk_1.default.config.credentials = {
            accessKeyId: this.configuration.aws_access_key_id,
            secretAccessKey: this.configuration.aws_secret_access_Key
        };
        this.S3 = new aws_sdk_1.default.S3({
            signatureVersion: 'v4',
            region: this.configuration.aws_region,
            params: {
                Bucket: this.configuration.aws_media_bucket
            }
        });
    }
    /**
     * Generates an aws signed url to retrieve an item.
     * @param key The filename to be put into the s3 bucket.
     * @return An url as a string.
     */
    getGetSignedUrl(key) {
        const signedUrlExpireSeconds = 60 * 5;
        return this.S3.getSignedUrl('getObject', {
            Bucket: this.configuration.aws_media_bucket,
            Key: key,
            Expires: signedUrlExpireSeconds
        });
    }
    /**
     * Generates an aws signed url to put an item.
     * @param key The filename to be retrieved from s3 bucket.
     * @return An url as a string.
     */
    getPutSignedUrl(key) {
        const signedUrlExpireSeconds = 60 * 5;
        return this.S3.getSignedUrl('putObject', {
            Bucket: this.configuration.aws_media_bucket,
            Key: key,
            Expires: signedUrlExpireSeconds
        });
    }
};
AWSService = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [])
], AWSService);
exports.default = AWSService;
//# sourceMappingURL=AWSService.js.map