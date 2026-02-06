import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { SectionDivider } from "./components/ui";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";
import { About } from "./sections/About";
import { Resources } from "./sections/Resources";
import { Contact } from "./sections/Contact";

export function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Resources />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
