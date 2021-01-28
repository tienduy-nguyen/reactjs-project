import React from 'react';
import {
  render,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import App from './App';
import { act } from 'react-dom/test-utils';

jest.useFakeTimers();

describe('App', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });
  describe('creating', () => {
    it('should be able to create a book', async () => {
      fetchMock
        .mockResponseOnce(JSON.stringify([]))
        .mockResponseOnce(
          JSON.stringify({ id: '1', name: 'The Great Gatsby' })
        );

      const { getByText, getByLabelText } = render(<App />);

      // we "type" in the value
      const input = getByLabelText('Add a book');
      fireEvent.change(input, {
        target: {
          value: 'The Great Gatsby',
        },
      });

      getByText('Submit').click();

      // we submit form, and wait for API response
      // we should now have in the DOM our Book
      // and it's delete and edit buttons
      await waitFor(() => getByText('The Great Gatsby'));
      expect(getByText('Edit')).toBeDefined();
      expect(getByText('Delete')).toBeDefined();
    });
  });

  describe('editing', () => {
    it('should be able to edit a book', async () => {
      fetchMock
        .mockResponseOnce(
          JSON.stringify([{ id: '1', name: 'The Great Gatsby' }])
        )
        .mockResponseOnce(JSON.stringify({ id: '1', name: 'Harry Potter' }));

      const { getByTestId, getByText } = render(<App />);

      const editButton = await waitFor(() => getByText('Edit'));
      editButton.click();

      const editInput = getByTestId('edit-input');
      fireEvent.change(editInput, {
        target: {
          value: 'Harry Potter',
        },
      });

      getByText('Save').click();

      await waitFor(() => getByText('Harry Potter'));
      expect(getByText('Edit')).toBeDefined();
      expect(getByText('Delete')).toBeDefined();
    });
  });

  const harryPotter = {
    id: '1',
    name: 'Harry Potter',
  };
  const greatGatsby = {
    id: '2',
    name: 'The Great Gatsby',
  };

  describe('searching', () => {
    it.only('should be able to search for a book', async () => {
      fetchMock
        .mockResponseOnce(JSON.stringify([harryPotter, greatGatsby]))
        .mockResponseOnce(JSON.stringify([greatGatsby]));

      const { getByText, getByLabelText } = render(<App />);

      expect(fetchMock.mock.calls.length).toEqual(1);

      // after API call is resolved, it should display the book
      await waitFor(() => getByText('Harry Potter'));

      const searchInput = getByLabelText('Search for a book');

      fireEvent.change(searchInput, {
        target: {
          value: 'The Great Gatsby',
        },
      });

      act(() => {
        jest.advanceTimersByTime(500);
      });

      await waitFor(() => getByText('The Great Gatsby'));

      expect(fetchMock.mock.calls[1][0]).toEqual(
        'http://localhost:3001/books?q=The Great Gatsby'
      );
      expect(fetchMock.mock.calls.length).toEqual(2);
    });
  });

  describe('deleting', () => {
    it('should be able to delete', async () => {
      fetchMock
        .mockResponseOnce(JSON.stringify([{ id: '1', name: 'Harry Potter' }]))
        .mockResponseOnce(JSON.stringify({}));
      const { getByText } = render(<App />);

      await waitFor(() => getByText('Harry Potter'));

      getByText('Delete').click();
      getByText('Confirm?').click();

      await waitForElementToBeRemoved(() => getByText('Harry Potter'));
    });
  });
});
