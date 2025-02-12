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
// 所有test 執行前
beforeAll(() => server.listen());
// 每次test 執行後
afterEach(() => server.resetHandlers());
// 所有test 執行後
afterAll(() => server.close());

test('loads and displays greeting', async () => {
  render(<Fetch url="/greeting" />);

  fireEvent.click(screen.getByText('Load Greeting'));

  await screen.findByRole('heading');

  expect(screen.getByRole('heading')).toHaveTextContent('hello there');
  expect(screen.getByRole('button')).toBeDisabled();
});

test('handles server error', async () => {
  server.use(
    http.get('/greeting', () => {
      return new HttpResponse(null, { status: 500 });
    })
  );

  render(<Fetch url="/greeting" />);

  fireEvent.click(screen.getByText('Load Greeting'));

  await screen.findByRole('alert');

  expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!');
  expect(screen.getByRole('button')).not.toBeDisabled();
});
