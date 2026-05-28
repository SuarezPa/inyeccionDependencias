import 'reflect-metadata';
import { AppContainer } from './inversify.config.js';
import { TYPES } from './utils/constants.js';
export const handler = async (event) => {
    const controller = AppContainer.get(TYPES.getClientAdapter);
    const response = await controller.getClient('https://rickandmortyapi.com/api/character?page=2');
    return {
        statusCode: 200,
        body: JSON.stringify(response),
    };
};
