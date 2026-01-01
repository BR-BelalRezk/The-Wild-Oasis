import SignOut from "@/components/features/auth/sign-out";
import { asideLinks } from "@/constants";
import Link from "next/link";

export default function Aside() {
  return (
    <aside className="border-r border-primary-900 h-full">
      <ul className="flex flex-col gap-2 h-full text-lg">
        {asideLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="group flex items-center gap-4 py-3 px-5 font-semibold text-primary-200 transition-colors hover:bg-primary-900 hover:text-primary-100"
            >
              <span className="transition-transform group-hover:scale-110">
                <link.icon className="h-5 w-5 text-primary-600" />
              </span>
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto">
          <SignOut />
        </li>
      </ul>
    </aside>
  );
}
