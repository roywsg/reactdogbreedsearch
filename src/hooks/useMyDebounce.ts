import {useEffect, useState} from "react";

export default function useMyDebounce<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState<T>("")

  useEffect(() => {
    const intv = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(intv)
    }
  }, [value, delay])
  
  return debouncedValue
}