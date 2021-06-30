import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QuestionForm from './QuestionForm';

describe('<QuestionForm />', () => {
  test('it should mount', () => {
    render(<QuestionForm />);
    
    const questionForm = screen.getByTestId('QuestionForm');

    expect(questionForm).toBeInTheDocument();
  });
});