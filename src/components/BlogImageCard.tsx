"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MdxMeta } from "@/types/mxd";
import DateTime from "@/components/DateTime";

type Props = {
  post: MdxMeta;
  fullWH?: boolean;
  className?: string;
};

const BlogImageCard: React.FC<Props> = ({
  post,
  fullWH = false,
  className = "",
}) => {
  const { title, coverImage, coverImageAlt, slug, excerpt, datetime } = post;
  const sectionRef = useRef<HTMLDivElement>(null);

  // GSAP Animation (wahi jo pehle tha)
  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const q = gsap.utils.selector(sectionRef.current);

    const tl = gsap.timeline({
      scrollTrigger: { trigger: sectionRef.current, start: "70% bottom" },
    });

    tl.fromTo(q(".blog-image"), { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 })
      .fromTo(q(".blog-title"), { y: 100 }, { y: 0, stagger: 0.2 }, "<25%")
      .fromTo(q(".blog-text"), { opacity: 0 }, { opacity: 1, stagger: 0.2 }, "<10%");
  }, []);

  // ——————————————— 100% SAFE IMAGE HANDLING (Yeh main ne theek kiya) ———————————————
  const safeImage = (() => {
    // Agar coverImage hi nahi hai ya string nahi
    if (!coverImage || typeof coverImage !== "string") return "/fallback.png";

    const trimmed = coverImage.trim();
    if (trimmed === "") return "/fallback.png";

    // Valid cases: ya to external URL hai ya public folder se start hota hai
    if (trimmed.startsWith("http://") || trimmed.startsWith("https://") || trimmed.startsWith("/")) {
      return trimmed;
    }

    // Baqi sab cases mein fallback image
    return "/fallback.png";
  })();

  const safeAlt = coverImageAlt?.trim() || title?.trim() || "Blog post image";
  // ——————————————————————————————————————————————————————————————————

  return (
    <div
      ref={sectionRef}
      className={`sm:min-w-[17rem] transition translate-y-2 hover:-translate-y-0 max-w-md bg-gray-100 dark:bg-carddark p-4 rounded shadow-md hover:shadow-xl ${
        fullWH ? "w-full" : "w-72 my-2"
      } ${className}`}
    >
      <div className="flex flex-col-reverse">
        {/* TITLE */}
        <div className="mb-2 overflow-hidden h-14">
          <Link href={`/blog/posts/${slug}`} className="blog-title link inline-block">
            <h3 className={`${fullWH ? "text-lg sm:text-md" : "text-md"} font-medium line-clamp-2`}>
              {title}
            </h3>
          </Link>
        </div>

        {/* IMAGE — Ab 100% safe hai */}
        <div className="blog-image relative w-full h-48 md:h-40 mb-3 bg-gray-200 rounded-md overflow-hidden">
          <Image
            src={safeImage}
            alt={safeAlt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
            onError={(e) => {
              e.currentTarget.src = "/fallback.png"; // final safety net
            }}
          />
        </div>
      </div>

      {/* DATE */}
      <div className="italic text-sm mb-1 text-carddark dark:text-gray-300 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <DateTime datetime={datetime} />
      </div>

      {/* EXCERPT */}
      <p className={`blog-text dark:text-gray-300 ${fullWH ? "text-base sm:text-sm" : "text-sm"} line-clamp-4 leading-7`}>
        {excerpt}
      </p>
    </div>
  );
};

export default BlogImageCard;



// "use client";
// import { useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { MdxMeta } from "@/types/mxd";
// import DateTime from "@/components/DateTime";

// type Props = {
//   post: MdxMeta;
//   fullWH?: boolean;
//   className?: string;
// };

// const BlogImageCard: React.FC<Props> = ({
//   post,
//   fullWH = false,
//   className = "",
// }) => {
//   const { title, coverImage, coverImageAlt, slug, excerpt, datetime } = post;
//   const sectionRef = useRef<HTMLDivElement>(null);

//   // --------------------------------
//   // GSAP Scroll Animation
//   // --------------------------------
//   useEffect(() => {
//     if (!sectionRef.current) return;

//     gsap.registerPlugin(ScrollTrigger);
//     const q = gsap.utils.selector(sectionRef.current);

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "70% bottom",
//       },
//     });

//     tl.fromTo(
//       q(".blog-image"),
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, ease: "Power3.easeInOut", duration: 0.5, stagger: 0.2 }
//     )
//       .fromTo(q(".blog-title"), { y: 100 }, { y: 0, stagger: 0.2 }, "<25%")
//       .fromTo(
//         q(".blog-text"),
//         { opacity: 0 },
//         { opacity: 1, stagger: 0.2 },
//         "<10%"
//       );
//   }, []);

//   // --------------------------------
//   // SAFE IMAGE SRC + ALT HANDLING
//   // --------------------------------
//   const safeImage =
//     coverImage && coverImage.trim() !== "" ? coverImage : "/fallback.png";

//   const safeAlt =
//     coverImageAlt && coverImageAlt.trim() !== ""
//       ? coverImageAlt
//       : title && title.trim() !== ""
//       ? title
//       : "Blog post image";

//   return (
//     <div
//       ref={sectionRef}
//       className={`sm:min-w-[17rem] transition translate-y-2 hover:-translate-y-0 max-w-md bg-gray-100 dark:bg-carddark p-4 rounded shadow-md hover:shadow-xl ${
//         fullWH ? "w-full" : "w-72 my-2"
//       } ${className}`}
//     >
//       <div className="flex flex-col-reverse">

//         {/* TITLE */}
//         <div className="mb-2 overflow-hidden h-14">
//           <Link
//             href={`/blog/posts/${slug}`}
//             className="blog-title link inline-block outline-none dark:outline-none focus-within:underline"
//           >
//             <h3
//               className={`${fullWH ? "text-lg sm:text-md" : "text-md"} font-medium line-clamp-2`}
//             >
//               {title}
//             </h3>
//           </Link>
//         </div>

//         {/* IMAGE — fully safe */}
//         <div className="blog-image relative w-full h-48 md:h-40 mb-3">
//           <Image
//             src={safeImage}
//             alt={safeAlt}
//             sizes="100vw"
//             fill
//             className="object-contain"
//           />
//         </div>
//       </div>

//       {/* DATE */}
//       <div className="italic text-sm mb-1 text-carddark dark:text-gray-300 flex items-center">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-4 w-4 mr-2"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//           />
//         </svg>

//         <DateTime datetime={datetime} />
//       </div>

//       {/* EXCERPT */}
//       <p
//         className={`blog-text dark:text-gray-300 ${
//           fullWH ? "text-base sm:text-sm" : "text-sm w-60"
//         } overflow-hidden text-ellipsis line-clamp-4 leading-7 sm:leading-6`}
//       >
//         {excerpt}
//       </p>
//     </div>
//   );
// };

// export default BlogImageCard;
