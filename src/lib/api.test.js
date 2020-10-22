import { get } from './api';


describe('get', () => {

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