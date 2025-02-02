import { IconCloud } from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  // "dart",
  "java",
  "react",
  "laravel",
  "python",
  "selenium",
  "mysql",
  "linux",
  "fedora",
  "scrapy",
  "tailwindcss",
  "shadcnui",
  // "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  // "express",
  "nextdotjs",
  // "prisma",
  // "amazonaws",
  // "postgresql",
  // "firebase",
  // "nginx",
  "vercel",
  // "testinglibrary",
  // "jest",
  // "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  // "sonarqube",
  "figma",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex items-center justify-center overflow-hidden rounded-lg bg-background w-full md:w-full lg:w-full xl:w-1/2">
      <IconCloud images={images} />
    </div>
  );
}

export default IconCloudDemo;