import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import QuestionField from './QuestionField';

describe('<QuestionField />', () => {

    test('renders', () => {
        render(<QuestionField />);
    });

    test('displays the question', () => {
        render(<QuestionField question="12345678asdfghj"/>);
        expect(screen.getByText(/12345678asdfghj/)).toBeInTheDocument();
    });

    test('calls onChange when input is changed', async () => {
        const onChange = jest.fn();

        render(<QuestionField onChange={onChange}/>);

        await userEvent.type(screen.getByRole('textbox'), '123456789');

        expect(onChange).toHaveBeenCalledTimes(9)
    });

    test('calls onChange with the input value', async () => {
        const onChange = jest.fn();

        render(<QuestionField onChange={onChange}/>);

        fireEvent.change(screen.getByRole('textbox'), {
            target: { value: 'Answer123' },
        });

        // hmm this is rather more roundabout than just using toHaveBeenCalledWith
        // might point at a mistake in straight up passing in prop onChange into react input onChange
        const firstArg = onChange.mock.calls[0][0];
        expect(firstArg.target.value).toEqual('Answer123')
    });

    test('calls onSubmit on button click', async () => {
        const onSubmit = jest.fn();

        render(<QuestionField onSubmit={onSubmit}/>);

        await userEvent.click(screen.getByRole('button'));
        
        expect(onSubmit).toHaveBeenCalledTimes(1)
    });

})