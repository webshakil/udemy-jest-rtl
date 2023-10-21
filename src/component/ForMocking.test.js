import React from 'react';
import { render, screen, act } from '@testing-library/react';
import axios from 'axios'
import ForMocking from './ForMocking';

// Mock Axios
jest.mock('axios');

describe('MyComponent', () => {
  it('fetches and displays data from the API', async () => {
    //Mock Axios response for the specific API endpoint
    
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          name: 'User 1',
        },
        {
          id: 2,
          name: 'User 2',
        },
      ],
    });

    await act(async () => {
      render(<ForMocking />);
    });

    // Wait for any asynchronous operations to complete
    jest.advanceTimersByTime(0);

    // Assertions
    expect(screen.getByText('Users')).toBeInTheDocument();
    expect(screen.getByText('User 1')).toBeInTheDocument();
    expect(screen.getByText('User 2')).toBeInTheDocument();
  });
});