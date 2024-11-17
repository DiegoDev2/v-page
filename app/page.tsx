import Footer from "@/components/footer/Footer";
import Header from "@/components/header/header";
import Collaborators from "@/components/landing/contributors";
import SupportedIDEs from "@/components/landing/ide";
import LandingPage from "@/components/landing/landing";
import Why from "@/components/landing/why";
import { Sponsors } from "@/components/marquee/sponsors";

export default function Home() {
  return (
    <>
    <Header />
    <LandingPage />
    <Why />
    <SupportedIDEs />
    <Sponsors />
    <Collaborators />
    <Footer />
    </>
    
  );
}
