import { RefObject, useEffect, useRef } from "react";

function useEventListener(eventType: string, callback: (e: any) => void) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (e: any) => callbackRef.current(e);
    window.addEventListener(eventType, handler);

    return () => window.removeEventListener(eventType, handler);
  }, [eventType]);
}

export default function useClickOutside(
  ref: RefObject<HTMLFormElement>,
  cb: (e: any) => void
) {
  useEventListener("click", (e) => {
    if (ref.current === null || ref.current.contains(e.target)) return;
    cb(e);
  });
}
