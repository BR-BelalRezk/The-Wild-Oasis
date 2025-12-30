import Lenis from "./lenis";

type props = {
  children: React.ReactNode;
};

export default function Providers({ children }: props) {
  return <Lenis>{children}</Lenis>;
}
