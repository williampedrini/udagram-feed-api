import {Service} from 'typedi';
import {config} from '../config/Config';
import AWS from 'aws-sdk';
import {CredentialsOptions} from "aws-sdk/lib/credentials";

@Service()
export default class AWSService {

    private S3: AWS.S3;
    private configuration: any;

    constructor() {
        this.configuration = config;

        AWS.config.credentials = {
            accessKeyId: this.configuration.aws_access_key_id,
            secretAccessKey: this.configuration.aws_secret_access_Key
        } as CredentialsOptions;

        this.S3 = new AWS.S3({
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
    public getGetSignedUrl(key: string): string {
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
    public getPutSignedUrl(key: string) {
        const signedUrlExpireSeconds = 60 * 5;
        return this.S3.getSignedUrl('putObject', {
            Bucket: this.configuration.aws_media_bucket,
            Key: key,
            Expires: signedUrlExpireSeconds
        });
    }
}
