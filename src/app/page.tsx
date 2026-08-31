import { ContactSection } from "@/components/sections/ContactSection";
import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header styles={styles} />
      <main id="top">
        <HeroSection styles={styles} />
        <ProjectsSection styles={styles} />
        <ContactSection styles={styles} />
      </main>
    </div>
  );
}
