import type { Viewport } from "next"; // Import Viewport
import AppHead from "@/components/AppHead";
import Footer from "@/components/Footer";
import LinkButton from "@/components/LinkButton";
import Link from "next/link";
import { metadata as layoutMetadata } from "@/app/layout"; // Rename to avoid confusion
import { Meta } from "@/components/AppHead";

export const viewport: Viewport = {
  themeColor: "#1d2a35", // Match layout.tsx or customize
};

const NotFound = () => {
  // Transform metadata to match Meta type
  const metaForAppHead: Meta = {
    description: layoutMetadata.description ?? undefined,
    // Include other Meta fields if needed
  };

  return (
    <>
      <AppHead
        title="Ramesha - Page Not Found"
        url={`${process.env.NEXT_PUBLIC_URL}/404`}
        meta={metaForAppHead}
      />
      <div className="bg-bglight dark:bg-bgdark overflow-hidden">
        <div className="h-screen flex flex-col justify-center selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <div className="flex justify-center items-center flex-col mt-auto">
            <h1 className="text-8xl xs:text-9xl font-bold text-marrsgreen dark:text-carrigreen">
              404
            </h1>
            <div className="text-lg xs:text-2xl my-2">
              Page Not Found :&apos;&#40;
            </div>
            <div className="max-w-xs text-center mb-10">
              It seems the page you&apos;re looking for does not exist, or there
              might be a typo in the URL.
            </div>
            <div className="flex space-x-4">
              <LinkButton href="/" outline>
                Go back Home
              </LinkButton>
              <Link
                href="/blog"
                className="link flex items-center px-4 lg:text-xl hover:underline"
              >
                Go to Blog
              </Link>
            </div>
          </div>
          <Footer noPadding />
        </div>
      </div>
    </>
  );
};

export default NotFound;