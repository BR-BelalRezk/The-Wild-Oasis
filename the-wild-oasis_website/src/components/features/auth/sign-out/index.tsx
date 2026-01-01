import { HiArrowRightOnRectangle } from "react-icons/hi2";

export default function SignOut() {
  return (
    <button className="w-full py-3 px-5 flex items-center gap-4 font-semibold text-primary-200 transition-colors hover:bg-primary-900 hover:text-primary-100">
      <HiArrowRightOnRectangle className="h-5 w-5 text-primary-600" />
      <span>Sign out</span>
    </button>
  );
}
