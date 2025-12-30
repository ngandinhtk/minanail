import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BookingSection from "@/sections/BookingSection";
import CustomerSection from "@/sections/CustomerSection";
import GallerySection from "@/sections/GallerySection";
import HeroSection from "@/sections/HeroSection";
import LocationSection from "@/sections/LocationSection";
import PrivateSection from "@/sections/PrivateSection";
import ServiceSection from "@/sections/ServiceSection";
import SignatureSection from "@/sections/SignatureSection";
// import StudioSection from "@/sections/StudioSection";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* <Header /> */}
      <Navbar/>
      <HeroSection/>
      {/* <StudioSection /> */}
      <PrivateSection />
      <ServiceSection/>
      <SignatureSection/>
      <GallerySection/>
      <CustomerSection/>
      <BookingSection/>
      <LocationSection/>
      <Footer />     
    </div>
  );
}
