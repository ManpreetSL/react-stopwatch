/**
 * render: lets us render the component as React would
 * screen: a utility for finding elements the same way the user does
 */
import { render, screen } from '@testing-library/react';
import App from './App';

test('says GurFateh', () => {
  render(<App />);
  expect(screen.getByRole('heading')).toHaveTextContent('Vaheguru Jee Kaa Khalsa; Vaheguru Jee Kee Fateh!');
});
