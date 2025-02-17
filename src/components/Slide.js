import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../style/ComponentStyle/Slide.css";

const Example = () => {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "/Users/ryanclark/Documents/BuildOutdoorsSpace/src/photos/57731919149__C8E7AEF1-7388-4524-B7BB-500B8E99A66D.JPG",
  ];

  return (
    <div style={{ paddingLeft: "20%", width: "80%" }}>
      <Slide>
        <div className="each-slide-effect">
          <div
            style={{ backgroundImage: `url(${images[0]})`, height: "500px" }}
          >
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            style={{ backgroundImage: `url(${images[1]})`, height: "500px" }}
          >
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            style={{ backgroundImage: `url(${images[2]})`, height: "500px" }}
          >
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Example;

// const Example = () => {
//   const images = [
//     "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//     "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
//     "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//   ];

//   return (
//     <Slide>
//       <div
//         style={{
//           height: "400px",
//           width: "100%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           backgroundSize: "cover",
//           position: "relative",
//         }}
//       >
//         <div
//           style={{
//             width: "100%",
//             height: "0",
//             paddingBottom: "56.25%",
//             backgroundImage: `url(${images[0]})`,
//             backgroundSize: "cover",
//             position: "relative",
//           }}
//         >
//           <span
//             style={{
//               padding: "20%",
//               fontSize: "20px",
//               background: "#efefef",
//               textAlign: "center",
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//             }}
//           >
//             Slide 1
//           </span>
//         </div>
//       </div>
//       <div
//         style={{
//           height: "400px",
//           width: "100%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           backgroundSize: "cover",
//           position: "relative",
//         }}
//       >
//         <div
//           style={{
//             width: "100%",
//             height: "0",
//             paddingBottom: "56.25%",
//             backgroundImage: `url(${images[1]})`,
//             backgroundSize: "cover",
//             position: "relative",
//           }}
//         >
//           <span
//             style={{
//               padding: "20%",
//               fontSize: "20px",
//               background: "#efefef",
//               textAlign: "center",
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//             }}
//           >
//             Slide 2
//           </span>
//         </div>
//       </div>
//       <div
//         style={{
//           height: "400px",
//           width: "100%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           backgroundSize: "cover",
//           position: "relative",
//         }}
//       >
//         <div
//           style={{
//             width: "100%",
//             height: "0",
//             paddingBottom: "56.25%",
//             backgroundImage: `url(${images[2]})`,
//             backgroundSize: "cover",
//             position: "relative",
//           }}
//         >
//           <span
//             style={{
//               padding: "20%",
//               fontSize: "20px",
//               background: "#efefef",
//               textAlign: "center",
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//             }}
//           >
//             Slide 3
//           </span>
//         </div>
//       </div>
//     </Slide>
//   );
// };

// export default Example;
