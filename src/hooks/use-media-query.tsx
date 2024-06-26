import { useEffect, useState, useLayoutEffect, useCallback } from "react";

export function useMediaQuery(query: string) {
  const [value, setValue] = useState(false);

  const onChange = useCallback(
    (event: MediaQueryListEvent) => setValue(event.matches),
    []
  );

  useEffect(() => {
    const result = matchMedia(query);
    result.addEventListener("change", onChange);
    setValue(result.matches);

    return () => result.removeEventListener("change", onChange);
  }, [query, onChange]);

  return value;
}
