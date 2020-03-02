import 'reflect-metadata';
import {Body, Get, JsonController, Param, Post} from "routing-controllers";
import {Inject} from "typedi";
import FeedService from "../service/FeedService";
import AWSService from "../service/AWSService";
import FeedDTO from "../dto/FeedDTO";
import FeedCreateRequestDTO from "../dto/FeedCreateRequestDTO";

@JsonController("/feeds")
export default class FeedController {

    @Inject()
    private feedService: FeedService;

    @Inject()
    private awsService: AWSService;

    @Get()
    public async findAll(): Promise<FeedDTO[]> {
        return this.feedService.findAll();
    }

    @Get('/:id')
    public async findById(@Param('id') id: string): Promise<FeedDTO> {
        return await this.feedService.findById(id);
    }

    @Post()
    public async create(@Body() request: FeedCreateRequestDTO): Promise<FeedDTO> {
        return await this.feedService.create(request);
    }

    @Get('/signed-url/:fileName')
    public getSignedUrl(@Param('fileName') fileName: string): string {
        return this.awsService.getPutSignedUrl(fileName);
    }
}
