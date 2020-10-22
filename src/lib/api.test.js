import { get } from './api';


describe('get', () => {

    test('fetches with the GET method', async () => {
        const url = 'http://test.com';
        const fetch = getFetchMock();
        await get(url);

        const [urlArg, optionsArg] = fetch.mock.calls[0];

        expect(optionsArg.headers).toMatchObject({ 
            method: 'GET',
        });
    });

    test('fetches with cors enabled', async () => {
        const url = 'http://test.com';
        const fetch = getFetchMock();
        await get(url);

        const [urlArg, optionsArg] = fetch.mock.calls[0];

        expect(optionsArg.headers).toMatchObject({ 
            mode: 'cors',
        });
    });

    test('returns the fetched response opbject', async () => {
        const url = ''
        const fetchData = {
            "id": 58971,
            "answer": "extradition",
        };        
        const fetch = getFetchMock({ ...fetchData });
        const randomQuestion = await get(url);
        expect(randomQuestion).toMatchObject(fetchData);
    });
});

const getFetchMock = (response = {}) => {
    const mockJsonPromise = Promise.resolve(response);
    const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise });
    return jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
}