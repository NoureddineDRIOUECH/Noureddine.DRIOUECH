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
  "express",
  // "nextdotjs",
  "prisma",
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
    <div className="relative flex  w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg p-6  md:p-12 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
