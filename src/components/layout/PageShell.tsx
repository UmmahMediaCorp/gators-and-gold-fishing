import type { ReactNode } from "react";
import { useEffect } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

interface Props {
  children: ReactNode;
  title?: string;
}

export function PageShell({ children, title }: Props) {
  useEffect(() => {
    if (title) document.title = title;
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [title]);

  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
