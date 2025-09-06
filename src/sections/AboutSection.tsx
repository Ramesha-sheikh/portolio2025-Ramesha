"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useTheme } from "next-themes";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useSection } from "../context/section";
import useOnScreen from "@/hooks/useOnScreen";
import useScrollActive from "@/hooks/useScrollActive";
import satNaing from "@/public/humo.png";
import AboutBgSvg from "@/components/AboutBgSvg";
import EduGroup from "@/components/EduGroup";

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null); // Type as HTMLDivElement
  const isSecOnScreen = useOnScreen(sectionRef);
  const { theme } = useTheme();
  const eduRef = useRef<HTMLDivElement>(null);
  const aboutSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();

useEffect(() => {
  if (!sectionRef.current) return;

    // Use HTMLDivElement for the selector
    const q = gsap.utils.selector(sectionRef.current as Element);

  gsap.registerPlugin(ScrollTrigger);
    // Animate profile-picture
    const profilePicture = q(".profile-picture");
    if (profilePicture.length > 0) {
      gsap.fromTo(
        profilePicture,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: profilePicture[0],
            start: "20% bottom",
            toggleActions: "play none none none",
          },
        }
      );
    }

    const fromAnimation = { y: 100, opacity: 0 };

    const toAnimation = (triggerTarget: string) => ({
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: q(`.${triggerTarget}`)[0],
        start: "top bottom",
      },
    });

    // Animate about-intro
    const aboutIntro = q(".about-intro");
    if (aboutIntro.length > 0) {
      gsap.fromTo(aboutIntro, fromAnimation, toAnimation("about-intro"));
    }

    // Animate edu-bg
    const eduBg = q(".edu-bg");
    if (eduBg.length > 0) {
      gsap.fromTo(eduBg, fromAnimation, toAnimation("edu-bg"));
    }

    // Animate bg-svg
    const bgSvg = q(".bg-svg");
    if (bgSvg.length > 0) {
      gsap.fromTo(
        bgSvg,
        { y: -80 },
        {
          y: 65,
          scrollTrigger: {
            trigger: bgSvg[0],
            scrub: true,
          },
          duration: 3,
        }
      );
    }

    // Animate img-svg
    const imgSvg = q(".img-svg");
    if (imgSvg.length > 0) {
      gsap.fromTo(
        imgSvg,
        { y: -30 },
        {
          y: 30,
          scrollTrigger: {
            trigger: imgSvg[0],
            start: "80% 75%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  useEffect(() => {
    if (onSectionChange) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      aboutSection ? onSectionChange("who am i?") : onSectionChange("");
    }
  }, [aboutSection, onSectionChange]);

  return (
    <div
      ref={sectionRef}
      className="about-panel bg-white dark:bg-[#1B2731] relative"
    >
      <section id="whoami" className="section">
        <RoughNotationGroup>
          <div className="text-center">
            <RoughNotation
              type="underline"
              color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
              strokeWidth={2}
              order={1}
              show={isSecOnScreen}
            >
              <h2 className="section-heading">Who am I?</h2>
            </RoughNotation>
          </div>
          <div className="md:grid grid-rows-5 lg:grid-rows-6 grid-cols-5">
            <div className="col-start-1 col-end-3 row-start-1 row-end-4 lg:row-end-7 lg:col-start-1 lg:col-end-3 flex justify-center items-center py-4 lg:mb-[20%]">
              <div className="relative w-72">
                <svg
                  width="96"
                  height="21"
                  viewBox="0 0 96 21"
                  aria-hidden="true"
                  className="img-svg hidden lg:block fill-marrsgreen dark:fill-carrigreen absolute -top-14 -left-14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M79.2202 0.959991L62.7802 17.32L46.3301 0.959991L29.8902 17.32L13.4501 0.959991L0.410156 13.94L0.400146 17.58L13.4501 4.58999L29.8902 20.95L46.3301 4.58999L62.7802 20.95L79.2202 4.58999L93.7302 19.02L95.5402 17.19L79.2202 0.959991Z" />
                </svg>

                <div className="profile-picture overflow-hidden md:overflow-visible rounded-md md:shadow-2xl">
                  <Image
                    src={satNaing}
                    width={1700}
                    height={1790}
                    priority
                    alt="Sat Naing profile picture"
                    className="rounded-md"
                  />
                </div>

                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  aria-hidden="true"
                  className="img-svg hidden lg:block fill-marrsgreen dark:fill-carrigreen absolute bottom-8 -right-12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.68 11.51L9.23 7.05998L13.68 2.61C14.24 2.05 14.24 1.12999 13.68 0.569994C13.12 0.00999391 12.2 0.00999391 11.64 0.569994L7.19002 5.02001L2.74001 0.569994C2.18001 0.00999391 1.26003 0.00999391 0.700029 0.569994C0.140029 1.12999 0.140029 2.05 0.700029 2.61L5.15004 7.05998L0.700029 11.51C0.140029 12.07 0.140029 12.99 0.700029 13.55C1.26003 14.11 2.18001 14.11 2.74001 13.55L7.19002 9.09999L11.64 13.55C12.2 14.11 13.12 14.11 13.68 13.55C14.24 12.99 14.24 12.08 13.68 11.51Z" />
                </svg>

                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="img-svg hidden lg:block fill-[#FF9D00] absolute -bottom-10 right-6 scale-150"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.6799 5.68002C11.6799 8.65002 9.27994 11.05 6.30994 11.05C3.33994 11.05 0.939941 8.65002 0.939941 5.68002C0.939941 2.71002 3.33994 0.309998 6.30994 0.309998C9.27994 0.309998 11.6799 2.71002 11.6799 5.68002Z" />
                </svg>
              </div>
            </div>

            <p className="col-start-1 col-end-4 row-start-3 row-end-6 lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-6 lg:ml-8 lg:mt-auto about-intro">
              I&apos;m a skilled full-stack developer with over 4 years of experience in HTML, CSS, TypeScript, Next.js, Node.js, and React. Since February 2024, I&apos;ve been advancing my skills at GIAIC and PIAIC, focusing on Agentic AI and n8n. My projects, including e-commerce platforms and intelligent chatbots, showcase scalable, innovative solutions blending full-stack development with AI technologies.
            </p>

            <div
              className="col-start-3 col-end-6 row-start-1 row-end-6 lg:row-start-2 lg:row-end-7 md:ml-8 place-content-end"
              ref={eduRef}
            >
              <p className="edu-bg my-4">Here is my educational background.</p>
              {educationInfo.map((edu) => (
                <EduGroup edu={edu} key={edu.id} />
              ))}
            </div>
          </div>
        </RoughNotationGroup>
      </section>

      <AboutBgSvg />
    </div>
  );
};

const educationInfo = [
  {
    id: 1,
    title: "Full-Stack Developer in GIAIC & PIAIC",
    subTitle: "Feb 2024 - Dec 2024",
    list: ["Mastered HTML, CSS, TypeScript, Next.js, Node.js, and React, building responsive web apps."]
  },
  {
    id: 2,
    title: "DHMS (Diploma in Homeopathic Medical Science)",
    subTitle: "2020",
    list: [
      "Completed Diploma in Homeopathic Medical Science",
      "Studied principles of homeopathy and medical practices",
    ],
  },
  {
    id: 3,
    title: "Full-Stack Developer Trainee",
    subTitle: "GIAIC | Feb 2024 - Dec 2024",
    list: [
      "Mastered HTML, CSS, TypeScript, Next.js, Node.js, and React",
      "Built responsive web applications",
    ],
  },
  {
    id: 4,
    title: "AI Developer Trainee",
    subTitle: "GIAIC & PIAIC | Feb 2025 - Present",
    list: [
      "Training in Python and Agentic AI",
      "Developing autonomous AI agents",
    ],
  },
];

export default AboutSection;