import { useEffect, useState } from "react";
export function useTyping(words, speed = 70, pause = 1600) {
  const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [i, setI] = useState(0), [n, setN] = useState(0), [del, setDel] = useState(false);
  useEffect(() => {
    if (reduce) return;
    const w = words[i];
    const t = setTimeout(() => {
      if (!del && n === w.length) return setDel(true);
      if (del && n === 0) { setDel(false); return setI((i + 1) % words.length); }
      setN(n + (del ? -1 : 1));
    }, !del && n === w.length ? pause : del ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [n, del, i, words, speed, pause, reduce]);
  return reduce ? words[0] : words[i].slice(0, n);
}
