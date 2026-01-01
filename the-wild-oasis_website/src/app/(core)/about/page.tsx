import AboutPage from "@/components/pages/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return <AboutPage />;
}
