"use client";

import React, {
  useState,
  useEffect,
  ForwardRefExoticComponent,
  RefAttributes,
  CSSProperties,
} from "react";

import { PageDef } from "@/lib/data";


import Navbar from "@/components/Navbar";
import SkillsPage from "@/components/Skills";
import ContactPage from "@/components/Contact";
import ServicesPage from "@/components/Services";
import ExperiencePage from "@/components/Experience";
import GalleryPage from "@/components/Gallery";
import ProjectsPage from "@/components/Projects";
import AchievementsPage from "@/components/Achievements";
import HomePage from "@/components/HomePage";


/* --- Types --- */
type PageProps = {
  pageClass?: string;
  pageStyle?: CSSProperties;
};

type PageComponet = ForwardRefExoticComponent<
  PageProps & RefAttributes<HTMLDivElement>
>;


const pages: PageDef[] = [
  { name: "Home", id: "home", component: HomePage },
  { name: "Experience", id: "experience", component: ExperiencePage },
  { name: "Projects", id: "projects", component: ProjectsPage },
  { name: "Gallery", id: "gallery", component: GalleryPage },
  { name: "Services", id: "services", component: ServicesPage },
  { name: "Skills", id: "skills", component: SkillsPage  },
  { name: "Achievements", id: "achievements", component: AchievementsPage  },
  { name: "Contact", id: "contact", component: ContactPage },
];

/* --- Navbar --- */


/* --- Main Page Component --- */
const Page = () => {
  const [activeSectionId, setActiveSectionId] = useState("home")

  useEffect(() => {
    // Scroll listener to set "Home" as active when at the very top of the page
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActiveSectionId('home');
      }
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Lowered the threshold to make it more sensitive
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSectionId(entry.target.id);
        }
      });
    }, observerOptions);

    pages.forEach((page) => {
      const section = document.getElementById(page.id);
      if (section) {
        observer.observe(section);
      }
    });

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      // Clean up event listeners
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen font-poppins text-white bg-[#0E0E0F]">
      <Navbar
        activeSectionId={activeSectionId}
        pages={pages}
      />
      
      {pages.map((page) => {
        const PageComponent = page.component;
        return <PageComponent key={page.id} />;
      })}
    </div>
  );
};

export default Page;
