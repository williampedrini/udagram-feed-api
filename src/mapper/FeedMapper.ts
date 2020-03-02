import FeedDTO from "../dto/FeedDTO";
import Feed from "../model/Feed";
import {Service} from "typedi";
import FeedCreateRequestDTO from "../dto/FeedCreateRequestDTO";

@Service()
export default class FeedMapper {

    /**
     * Converts a model into a data transfer object.
     * @param feed The model to be converted.
     * @return The converted data transfer object.
     */
    public modelToDto(feed: Feed): FeedDTO {
        if (feed) {
            return {
                id: feed.id,
                caption: feed.caption,
                url: feed.url,
                createdAt: feed.createdAt,
                updatedAt: feed.updatedAt
            } as FeedDTO;
        }
        return null;
    }

    /**
     * Converts a data transfer object into a model.
     * @param request The data transfer object to be converted.
     * @return The converted model.
     */
    public dtoToModel(request: FeedCreateRequestDTO): Feed {
        if (request) {
            return new Feed({
                url: request.url,
                caption: request.caption
            });
        }
        return null;
    }
}
