import App from "../App.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {act, fireEvent, render, screen} from "@testing-library/react";
import {expect, test} from "vitest";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    }
  }
})

vi.useFakeTimers()

test('test search', async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <App/>
    </QueryClientProvider>
  )
  const search = document.querySelector('[data-testsearch]')
  fireEvent.change(search, {target: {value: 'corgi'}})

  expect(search.value).toBe('corgi')
})