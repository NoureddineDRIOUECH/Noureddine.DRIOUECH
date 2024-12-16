export const dynamic = 'force-dynamic'
import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  // "express",
  // "nextdotjs",
  // "prisma",
  "amazonaws",
  // "postgresql",
  "firebase",
  // "nginx",
  "vercel",
  "testinglibrary",
  // "jest",
  // "cypress",
  "docker",
  "git",
  // "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  // "sonarqube",
  "figma",
];

export function IconCloudDemo() {
  return (
    <div className="relative flex  max-w-[32rem] items-center justify-center overflow-hidden rounded-lg p-3  md:p-6 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
