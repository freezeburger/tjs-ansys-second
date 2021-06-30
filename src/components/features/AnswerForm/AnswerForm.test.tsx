import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AnswerForm from './AnswerForm';

describe('<AnswerForm />', () => {
  test('it should mount', () => {
    render(<AnswerForm />);
    
    const answerForm = screen.getByTestId('AnswerForm');

    expect(answerForm).toBeInTheDocument();
  });
});