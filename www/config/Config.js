"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    "username": process.env.POSTGRESS_USERNAME,
    "password": process.env.POSTGRESS_PASSWORD,
    "database": process.env.POSTGRESS_DB,
    "host": process.env.POSTGRESS_HOST,
    "dialect": "postgres",
    'aws_access_key_id': process.env.AWS_ACCESS_KEY_ID,
    'aws_media_bucket': process.env.AWS_S3_BUCKET,
    'aws_region': process.env.AWS_REGION,
    'aws_secret_access_Key': process.env.AWS_SECRET_ACCESS_KEY
};
//# sourceMappingURL=Config.js.map