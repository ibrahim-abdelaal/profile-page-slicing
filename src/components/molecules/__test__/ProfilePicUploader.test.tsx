import { queryByRole, render, screen } from '@testing-library/react';
import { ProfilePicUploader } from '../ProfilePicUploader';

/**
 * Mock fetch
 * 
 * @returns {Promise}
 */
const mockFetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({
    url: 'https://robohash.org/test'
  })
}));

describe('Test ProfilePicUploader component', () => {
  it('should render image after it is loaded', async() => {
    render(<ProfilePicUploader />);
    await mockFetch();
    const imageElement = await screen.findByRole('img');
    expect(imageElement).toBeInTheDocument()
    
  });
});

