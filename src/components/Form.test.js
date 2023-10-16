import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyForm from './Form';

describe('MyForm Component', () => {
  it('should find form inputs by their placeholders using getByPlaceholderText', () => {
    render(<MyForm />);
    const nameInput = screen.getByPlaceholderText('Enter your name');
    const emailInput = screen.getByPlaceholderText('Enter your email');

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
  });

  it('should find submit button by title using getByTitle', () => {
    render(<MyForm />);
    const submitButton = screen.getByTitle('Submit Button');

    expect(submitButton).toBeInTheDocument();
  });

  it('should find form inputs by their text content using getByText', () => {
    render(<MyForm />);
    const nameLabel = screen.getByText('Name:');
    const emailLabel = screen.getByText('Email:');

    expect(nameLabel).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
  });

  it('should find the submit button by text content using getByText', () => {
    render(<MyForm />);
    const submitButton = screen.getByText('Submit');

    expect(submitButton).toBeInTheDocument();
  });

it('should fill in and submit the form using userEvent', () => {
    render(<MyForm />);
    const nameInput = screen.getByPlaceholderText('Enter your name');
    const emailInput = screen.getByPlaceholderText('Enter your email');
    const submitButton = screen.getByTitle('Submit Button');
  
    userEvent.type(nameInput, 'John Doe');
    userEvent.type(emailInput, 'john@example.com');
    userEvent.click(submitButton);
  
    // Add assertions for the form submission
    expect(nameInput).toHaveValue('John Doe');
    expect(emailInput).toHaveValue('john@example.com');
    expect(submitButton).toBeEnabled(); // Check if the button is enabled after submission
  });

  it('should find an element by test id using getByTestId', () => {
    render(<MyForm />);
    const testElement = screen.getByTestId('title');

    expect(testElement).toBeInTheDocument();
  });
  
  
});
