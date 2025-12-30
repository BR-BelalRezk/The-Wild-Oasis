import Logo from "@/components/ui/logo";
import Navigation from "./navigation";

export default function Header() {
  return (
    <header className="border-b border-primary-900 py-5">
      <div className="container">
        <div className="w-full flex items-center justify-between">
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  );
}
