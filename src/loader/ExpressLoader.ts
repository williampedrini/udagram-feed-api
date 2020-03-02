import {MicroframeworkLoader, MicroframeworkSettings} from 'microframework-w3tec';
import {createExpressServer} from 'routing-controllers';
import {Application} from 'express';
import GlobalErrorHandlerMiddleware from '../middleware/GlobalErrorHandlerMiddleware';
import FeedController from "../controller/FeedController";

export const ExpressLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
    if (settings) {
        const application: Application = createExpressServer({
            defaultErrorHandler: false,
            controllers: [FeedController],
            middlewares: [GlobalErrorHandlerMiddleware]
        });
        settings.setData('express_app', application);
        settings.setData('express_server', application.listen(8082));
    }
};
