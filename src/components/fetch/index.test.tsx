import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { HttpResponse, http } from 'msw';
import { setupServer } from 'msw/node';
import { afterAll, afterEach, beforeAll, expect, test } from 'vitest';
import Fetch from '.';

const server = setupServer(
  http.get('/greeting', () => {
    return HttpResponse.json({ greeting: 'hello there' });
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('loads and displays greeting', async () => {
  render(<Fetch url="/greeting" />);

  fireEvent.click(screen.getByText('Fetch data'));

  await screen.findByTestId("fetch-payload");

  expect(screen.getByTestId('fetch-payload')).toHaveTextContent('hello there');
  expect(screen.getByRole('button')).toBeDisabled();
});

test('handles server error', async () => {
  server.use(
    http.get('/greeting', () => {
      return new HttpResponse(null, { status: 500 });
    })
  );

  render(<Fetch url="/greeting" />);

  fireEvent.click(screen.getByText('Fetch data'));

  await screen.findByRole('alert');

  expect(screen.getByRole('alert')).toHaveTextContent('Error:');
  expect(screen.getByRole('button')).not.toBeDisabled();
});
