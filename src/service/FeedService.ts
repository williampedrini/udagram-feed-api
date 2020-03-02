import Feed from "../model/Feed";
import {Inject, Service} from "typedi";
import AWSService from "./AWSService";
import FeedDTO from "../dto/FeedDTO";
import {BadRequestError} from "routing-controllers";
import FeedMapper from "../mapper/FeedMapper";
import FeedCreateRequestDTO from "../dto/FeedCreateRequestDTO";

@Service()
export default class FeedService {

    @Inject()
    private awsService: AWSService;

    @Inject()
    private mapper: FeedMapper;

    /**
     * Persists a specific feed into the database.
     * @param request The object holding the data to be persisted.
     * @return The persisted feed if success.
     */
    public async create(request: FeedCreateRequestDTO): Promise<FeedDTO> {
        if (!request.caption) {
            throw new BadRequestError('Caption is required or malformed');
        }
        if (!request.url) {
            throw new BadRequestError('File url is required');
        }
        const feed: Feed = this.mapper.dtoToModel(request);
        const persistedFeed: Feed = await feed.save();
        persistedFeed.url = this.awsService.getGetSignedUrl(persistedFeed.url);
        return this.mapper.modelToDto(persistedFeed);
    }

    /**
     * Search for all existing feeds into database.
     * @return All existing feeds found.
     */
    public async findAll(): Promise<FeedDTO[]> {
        const items = await Feed.findAndCountAll({
            order: [['id', 'DESC']]
        });
        return items.rows.filter(item => item.url)
            .map(feed => {
                feed.url = this.awsService.getGetSignedUrl(feed.url);
                return feed;
            })
            .map(feed => this.mapper.modelToDto(feed));
    }

    /**
     * Search for a specific feed by its identifier.
     * @param id The feed identifier.
     * @return The feed if found any.
     */
    public async findById(id: string): Promise<FeedDTO> {
        const feed: Feed = await Feed.findByPk(id);
        return this.mapper.modelToDto(feed);
    }
}
