// import React from 'react';
// import { render, screen, waitFor } from '@testing-library/react';
// import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';
// import UserList from './UserList';

// const mock = new MockAdapter(axios);

// test('renders user list', async () => {
//   const mockData = [
//     { id: 1, name: 'User 1' },
//     { id: 2, name: 'User 2' },
//   ];

//   mock.onGet('https://jsonplaceholder.typicode.com/users').reply(200, mockData);

//   render(<UserList />);

//   await waitFor(() => {
//     mockData.forEach(user => {
//       expect(screen.getByText(user.name)).toBeInTheDocument();
//     });
//   });
// });




import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import UserList from './UserList';

const mock = new MockAdapter(axios);

test('renders user list', async () => {
  const mockData = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
  ];

  // Spy on axios.get and create a mock
  const axiosGetSpy = jest.spyOn(axios, 'get');

  mock.onGet('https://jsonplaceholder.typicode.com/users').reply(200, mockData);

  render(<UserList />);

  await waitFor(() => {
    mockData.forEach(user => {
      expect(screen.getByText(user.name)).toBeInTheDocument();
    });
  });

  // Assert that axios.get was called with the expected URL
  expect(axiosGetSpy).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
});




