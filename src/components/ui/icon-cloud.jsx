// import React, { useState, useEffect, useMemo } from 'react';
// import { useTheme } from 'next-themes';
// import { Cloud, fetchSimpleIcons, renderSimpleIcon } from 'react-icon-cloud';

// const cloudProps = {
//   containerProps: {
//     style: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       width: "100%",
//       paddingTop: 40,
//       id: "c0ebcbb6-d9fe-af0c-a899-02eb199a75d5"
//     },
//   },
//   options: {
//     reverse: true,
//     depth: 1,
//     wheelZoom: false,
//     imageScale: 2,
//     activeCursor: "default",
//     tooltip: "native",
//     initial: [0.1, -0.1],
//     clickToFront: 500,
//     tooltipDelay: 0,
//     outlineColour: "#0000",
//     maxSpeed: 0.04,
//     minSpeed: 0.02,
//   },
// };

// const renderCustomIcon = (icon, theme) => {
//   const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
//   const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
//   const minContrastRatio = theme === "dark" ? 2 : 1.2;

//   return renderSimpleIcon({
//     icon,
//     bgHex,
//     fallbackHex,
//     minContrastRatio,
//     size: 42,
//     aProps: {
//       href: undefined,
//       target: undefined,
//       rel: undefined,
//       onClick: (e) => e.preventDefault(),
//     },
//   });
// };

// // Export as default and named export
// export const IconCloudDemo = () => {
//   const [data, setData] = useState(null);
//   const { theme } = useTheme();

//   const slugs = [
//     "typescript", "javascript", "dart", "java", "react", "flutter",
//     "android", "html5", "css3", "nodedotjs", "amazonaws", "firebase",
//     "docker", "git", "github", "gitlab", "visualstudiocode",
//     "androidstudio", "figma"
//   ];

//   useEffect(() => {
//     const fetchIcons = async () => {
//       try {
//         const iconData = await fetchSimpleIcons({ slugs });
//         setData(iconData);
//       } catch (error) {
//         console.error("Failed to fetch icons:", error);
//       }
//     };

//     fetchIcons();
//   }, []);

//   const renderedIcons = useMemo(() => {
//     if (!data) return null;
//     return Object.values(data.simpleIcons).map((icon) =>
//       renderCustomIcon(icon, theme || "light")
//     );
//   }, [data, theme]);

//   return (
//     <div className="relative flex max-w-[32rem] items-center justify-center overflow-hidden rounded-lg p-3 md:p-6">
//       {data && (
//         <Cloud
//           {...cloudProps}
//           id="c0ebcbb6-d9fe-af0c-a899-02eb199a75d5"
//         >
//           {renderedIcons}
//         </Cloud>
//       )}
//     </div>
//   );
// };

// export default IconCloudDemo;

import React, { useState, useEffect } from 'react';
import { fetchSimpleIcons } from 'react-icon-cloud';
import { Cloud } from 'react-icon-cloud';

const IconCloudDemo = () => {
  const [icons, setIcons] = useState([]);

  const slugs = [
    "typescript", "javascript", "dart", "java", "react", "flutter",
    "android", "html5", "css3", "nodedotjs", "amazonaws", "firebase",
    "docker", "git", "github", "gitlab", "visualstudiocode",
    "androidstudio", "figma"
  ];

  const cloudProps = {
    containerProps: {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "300px",
        margin: "0 auto"
      },
    },
    options: {
      reverse: true,
      depth: 1,
      wheelZoom: false,
      imageScale: 2,
      activeCursor: "default",
      tooltip: "native",
      initial: [0.1, -0.1],
      clickToFront: 500,
      tooltipDelay: 0,
      outlineColour: "#0000",
      maxSpeed: 0.04,
      minSpeed: 0.02,
    },
  };

  useEffect(() => {
    const loadIcons = async () => {
      try {
        const iconData = await fetchSimpleIcons({ slugs });
        const loadedIcons = Object.values(iconData.simpleIcons);
        setIcons(loadedIcons);
      } catch (error) {
        console.error("Failed to load icons:", error);
      }
    };

    loadIcons();
  }, []);

  if (icons.length === 0) {
    return <div>Loading icons...</div>;
  }

  return (
    <div className="w-full max-w-[500px] mx-auto">
      <Cloud {...cloudProps}>
        {icons.map((icon, index) => (
          <img
            key={index}
            src={`https://cdn.simpleicons.org/${icon.slug}t?viewbox=auto`}
            // src={`https://cdn.simpleicons.org/${icon.slug}/256/${icon.hex}`}
            alt={icon.title}
            width="42"
            height="42"
          />
        ))}
      </Cloud>
    </div>
  );
};

export default IconCloudDemo;