import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    /*
     * To describe the styling in the below main tag, we are using Tailwind CSS:
     * 1. Flex is used to make the content in the main tag to be in a row
     * 2. min-h-screen is used to make the height of the main tag to be the height of the screen
     * 3. bg-[#121212] is used to give the background color to the main tag
     * 4. container is used to make the content in the main tag to be in the center
     * 5. mx-auto is used to give the margin to the left and right of the main tag
     * 6. py-4 is used to give the padding to the top and bottom of the main tag
     * 7. px-12 is used to give the padding to the left and right of the main tag
     */
    <main className="flex flex-col min-h-screen bg-[#121212] ">
      <div className="container px-12 py-4 mx-auto">
        <HeroSection />
      </div>
    </main>
  );
}
