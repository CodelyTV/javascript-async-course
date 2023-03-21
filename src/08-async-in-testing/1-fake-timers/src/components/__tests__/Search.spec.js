import { describe, it, expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/vue'
import HelloWorld from '../Search.vue'

describe('Search component', () => {
  it('does not trigger search callback after 5 seconds from last user input', async () => {
    vi.useFakeTimers({
      shouldAdvanceTime: false
    })

    const cb = vi.fn()

    render(HelloWorld, {
      props: {
        cb
      }
    })

    const input = screen.getByLabelText(/search/i)
    userEvent.type(input, 'a')

    expect(cb).not.toHaveBeenCalled()

    vi.advanceTimersByTime(5000)

    expect(cb).toHaveBeenCalled()
  })
})
