import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjectSlugs, getProjectBySlug } from "@/data/projects";
import ProjectDetailLayout from "@/components/ProjectDetailLayout";

// Generate static params for all project slugs
export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Case Study | Ramesha Javed`,
    description: project.overview.problem.substring(0, 155) + "...",
    keywords: [...project.tags, "Case Study", "Portfolio", "Ramesha Javed"],
    openGraph: {
      title: `${project.title} - Case Study`,
      description: project.desc,
      type: "article",
      images: [
        {
          url: project.heroImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} - Case Study`,
      description: project.desc,
      images: [project.heroImage],
    },
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailLayout project={project} />;
}
