import React, { useState } from "react";
import WordPullUp from "@/components/ui/word-pull-up";

const MyComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className='flex flex-col md-space-y-0 space-y-3 justify-between px-1 md:px-3 items-center'>
        <div className="avatar mt-6 md:mt-0">
          <div className="w-40 rounded-full ring-primary">
            <img src="/me.jpg" alt="Noureddine DRIOUECH" />
          </div>
        </div>

        <div className='flex-1 flex flex-col items-center'>
          <WordPullUp
            className="text-3xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-5xl md:leading-[5rem]"
            words="Noureddine DRIOUECH"
          />
          <div className="flex items-center justify-center text-center flex-col text-base gap-2 text-muted-foreground">
            <p>Software Engineer Based in Morocco 🇲🇦</p>
            <div className="flex mx-auto items-center">
              <span className="flex w-2 h-2 me-2 bg-green-400 rounded-full pulsing-shadow"></span>
              <span className="text-base">Available for new opportunities</span>
            </div>
          </div>
        </div>
      </div>

      <div className="card-body text-justify text-lg">
        <p>
          I am a passionate and results-driven Software Engineer with expertise in JavaScript, PHP, Java, and Python. My skill set spans modern frameworks such as React.js and Laravel, enabling me to build high-performance web applications. I specialize in frontend development, state management, API integration, and automation, with a keen focus on delivering scalable and user-friendly solutions. {isExpanded && (
            <>
              With a background in SaaS development, web scraping, and process automation, I thrive in dynamic environments where I can innovate, optimize, and push technical boundaries. Fluent in Arabic and French, I seamlessly collaborate in multilingual teams and global projects.
            </>
          )}
        </p>
        <button
          onClick={toggleDescription}
          className="text-cyan-500 hover:text-blue-500"
        >
          {isExpanded ? "See Less" : "See More"}
        </button>
      </div>
    </>
  );
};

export default MyComponent;
