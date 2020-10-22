import React from 'react';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import App from './App';
import { Provider } from 'react-redux';

let mockStore;

const renderWithStore = (component, store) => {
    render(<Provider store={store}>
        {component}
    </Provider>);
}

describe('<App />', () => {
    beforeAll(() => {
        mockStore = configureStore([]);
    })

    test('renders', () => {
        const initialState = { quiz: {} };
        const store = mockStore(initialState)
        renderWithStore(<App />, store);
    });

})