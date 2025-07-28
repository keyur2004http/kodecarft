import React from "react";
import { IconCloud } from "./ui/IconCloud";

const slugs = [
  "typescript", "javascript", "dart", "java", "react",
  "flutter", "android", "html5", "css3", "nodedotjs",
  "express", "nextdotjs", "prisma", "amazonaws",
  "postgresql", "firebase", "nginx", "vercel",
  "testinglibrary", "jest", "cypress", "docker",
  "git", "jira", "github", "gitlab", "visualstudiocode",
  "androidstudio", "sonarqube", "figma"
];

const IconCloudDemo = () => {
  return (
    <div className="relative flex w-full max-w-2xl items-center justify-center overflow-hidden r bg-transparent px-10 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
};

export default IconCloudDemo;
