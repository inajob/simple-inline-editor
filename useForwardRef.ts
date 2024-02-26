import { ForwardedRef, useEffect, useRef } from "./deps.ts";

/** make ForwardRef
 *
 * ported from https://stackoverflow.com/a/73748435
 */
export const useForwardRef = <T>(
  ref: ForwardedRef<T>,
  initialValue: T | null = null,
) => {
  const targetRef = useRef<T>(initialValue);

  useEffect(() => {
    if (!ref) return;

    if (typeof ref === "function") {
      ref(targetRef.current);
    } else {
      ref.current = targetRef.current;
    }
  }, [ref]);

  return targetRef;
};
