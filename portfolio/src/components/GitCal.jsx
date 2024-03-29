import React from 'react';
import ReactGitHubCalendar from 'react-ts-github-calendar';

// your own component name
const GitCal = () => {
  return <ReactGitHubCalendar tooltips responsive userName="Ankit-yadav09" />;
};
export default GitCal;

// import React from "react";
// import Githubcalendar from "react-github-calendar";
// const GitCal = () => {
//   const colourTheme = {
//     background: "transparent",
//     text: "#ffffff",
//     grade4: "#8400b8",
//     grade3: "#b22ff4",
//     grade2: "#b265f6",
//     grade1: "#c084f5",
//     grade0: "#ecd9fc"
//   };
//   return (
//     <>
//       <div className="section" data-aos="fade-right">
//         <h2 className="section__title">
//           Days I <span className="different"> Code</span>
//         </h2>
//         <Githubcalendar
//           username="Ankit-yadav09"
//           blockSize={15}
//           blockMargin={5}
//           theme={colourTheme}
//           fontSize={16}
//         />
//       </div>
//     </>
//   );
// };
// export default GitCal;