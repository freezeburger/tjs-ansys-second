import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QuestionList from './QuestionList';

describe('<QuestionList />', () => {
  test('it should mount', () => {
    render(<QuestionList />);
    
    const questionList = screen.getByTestId('QuestionList');

    expect(questionList).toBeInTheDocument();
  });
});