import { setupWorker } from 'msw'
import handlers from "../shared/mock-services";
export const worker = setupWorker(...handlers)
const mockServicesMsw = () => {
    // TODO set conditional env (enable_services_mock)
    worker.start();
};

export default mockServicesMsw;
