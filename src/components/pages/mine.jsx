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
          Passionate software engineer with a robust foundation in various programming languages
          including JavaScript, PHP, Java, and Python. My expertise extends to modern frameworks such as
          Laravel and React.js, and I have hands-on experience with web development and automation tools.
          I thrive in dynamic environments, continually seeking opportunities to expand my skills
          and contribute to innovative projects. {isExpanded && (
            <>
              My professional journey includes successfully developing and optimizing web applications
              and automating testing processes. Fluent in Arabic and advanced in French, I am equipped
              to collaborate effectively in diverse, multilingual teams.
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
