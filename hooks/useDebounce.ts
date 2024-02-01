import { useEffect, useRef } from "react";

// Accepts any number of arguments of any type and does not return anything
type AnyFunction = (...args: any[]) => void;

// Infers the type of setTimeout
type Timer = ReturnType<typeof setTimeout>;

export function useDebounce<Func extends AnyFunction>(
  func: Func,
  delay = 3000,
) {
  const timer = useRef<Timer>();

  useEffect(() => {
    return () => {
      if (!timer.current) return;
      clearTimeout(timer.current);
    };
  }, []);

  const debouncedFunction = ((...args) => {
    const newTimer = setTimeout(() => {
      func(...args);
    }, delay);
    clearTimeout(timer.current);
    timer.current = newTimer;
  }) as Func;

  return debouncedFunction;
}
