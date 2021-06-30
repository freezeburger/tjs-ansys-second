import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QuestionListItem from './QuestionListItem';

describe('<QuestionListItem />', () => {
  test('it should mount', () => {
    render(<QuestionListItem />);
    
    const questionListItem = screen.getByTestId('QuestionListItem');

    expect(questionListItem).toBeInTheDocument();
  });
});