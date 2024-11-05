

// debounce.test.js
const { debounce, throttle } = require('./debounce');

jest.useFakeTimers();

test('debounce should delay the function execution', () => {
    const mockFunction = jest.fn();
    const debouncedFunction = debounce(mockFunction, 1000);

    // Call the debounced function multiple times
    debouncedFunction();
    debouncedFunction();
    debouncedFunction();

    // Verify that the mock function hasn't been called yet
    expect(mockFunction).not.toBeCalled();

    // Fast-forward time
    jest.advanceTimersByTime(1000);

    // Now the mock function should have been called
    expect(mockFunction).toBeCalledTimes(1);
});

test('debounce should call the function with the correct context and arguments', () => {
    const mockFunction = jest.fn();
    const debouncedFunction = debounce(mockFunction, 1000);

    const context = { value: 'test' };
    debouncedFunction.call(context, 'arg1', 'arg2');

    // Fast-forward time
    jest.advanceTimersByTime(1000);

    // Check that the function was called with the correct arguments and context
    expect(mockFunction).toHaveBeenCalledWith('arg1', 'arg2');
    expect(mockFunction.mock.instances[0]).toBe(context);
});



test('throttle should limit the number of function calls', () => {
    const mockFunction = jest.fn();
    const throttledFunction = throttle(mockFunction, 1000);

    // Call the throttled function multiple times within the wait time
    throttledFunction();
    throttledFunction();
    throttledFunction();

    // The mock function should only be called once initially
    expect(mockFunction).toBeCalledTimes(1);

    // Fast-forward time by 1000ms (wait time)
    jest.advanceTimersByTime(1000);

    // The mock function should be called again after the wait time
    expect(mockFunction).toBeCalledTimes(2);

    // Fast-forward time again and check if the function is called at the next throttle window
    jest.advanceTimersByTime(1000);
    expect(mockFunction).toBeCalledTimes(2);
});
