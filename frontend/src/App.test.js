import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the footer with copyright text', async () => {
  render(<App />);
  // Using findByText to handle lazy loading
  const footerElement = await screen.findByText(/Onclick Infotech LLP. All rights reserved./i);
  expect(footerElement).toBeInTheDocument();
});