import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/react app/i);
  expect(linkElement).toBeInTheDocument();
});

test("render logo image",()=>{
  render(<App/>)
  const ImageElement = screen.getByRole("img")
  expect(ImageElement).toBeInTheDocument();
  expect(ImageElement).toHaveAttribute('src', 'logo.svg');
  expect(ImageElement).toHaveAttribute('alt', 'logo');
})

test.only('renders Learn React Link',()=>{
  render(<App/>)
  const LinkElment = screen.getByRole('link')
  expect(LinkElment).toBeInTheDocument();
  expect(LinkElment).toHaveAttribute('href', 'https://reactjs.org');
  expect(LinkElment).toHaveAttribute('target', "_blank");
  expect(LinkElment).toHaveAttribute('rel', "noopener noreferrer");
})
