import Logo from "@/components/ui/logo";
import Navigation from "./navigation";

export default function Header() {
  return (
    <header className="py-5 z-50 fixed top-0 left-0 w-full">
      <div className="container">
        <div className="w-full flex items-center justify-between">
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  );
}
