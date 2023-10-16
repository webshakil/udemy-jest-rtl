import { render, screen } from '@testing-library/react';
import App from './App';


let appComponet;
beforeEach(()=>{
  appComponet= render(<App/>);
})

afterEach(()=>{
  appComponet.unmount();
})

describe("App componet testing",()=>{
  test('renders learn react link', () => {
   
    const linkElement = screen.getByText(/react app/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test("render logo image",()=>{
    const ImageElement = screen.getByRole("img")
    expect(ImageElement).toBeInTheDocument();
    expect(ImageElement).toHaveAttribute('src', 'logo.svg');
    expect(ImageElement).toHaveAttribute('alt', 'logo');
  })
  
  test('renders Learn React Link',()=>{
    const LinkElment = screen.getByRole('link')
    expect(LinkElment).toBeInTheDocument();
    expect(LinkElment).toHaveAttribute('href', 'https://reactjs.org');
    expect(LinkElment).toHaveAttribute('target', "_blank");
    expect(LinkElment).toHaveAttribute('rel', "noopener noreferrer");
  })
  
})







































