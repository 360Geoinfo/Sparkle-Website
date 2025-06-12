// import React from "react";
// import styles from "./Team.module.css";
// import notesIcon from "../assets/notes.png"; // replace with your actual path
// import pencilIcon from "../assets/pencil.png"; // replace with your actual path

// const teamMembers = [
//   {
//     name: "Meela Aliuddin",
//     title: "Speech and Language Therapist Lead",
//     image: "/assets/meela.png",
//   },
//   {
//     name: "Sayyidah Masri",
//     title: "Speech and Language Therapist (i-Ready)",
//     image: "/assets/sayyidah.png",
//   },
//   {
//     name: "Hannah Ong",
//     title: "Speech and Language Therapist",
//     image: "/assets/hannah.png",
//   },
// ];

// export default function Team() {
//   return (
//     <div className={styles.teamSection}>
//       <img src={notesIcon} alt="notes" className={styles.notesIcon} />
//       <h2 className={styles.title}>Meet Our Team!</h2>
//       <div className={styles.teamContainer}>
//         {teamMembers.map((member, index) => (
//           <div className={styles.card} key={index}>
//             <img src={member.image} alt={member.name} className={styles.image} />
//             <div className={styles.textContainer}>
//               <h3 className={styles.name}>{member.name}</h3>
//               <p className={styles.titleText}>{member.title}</p>
//             </div>
//           </div>
//         ))}

//         {/* Center Quote Box */}
//         <div className={styles.quoteBox}>
//           <p>
//             <span className={styles.quoteMark}>“</span>
//             Dayana graduated from the UK and has joined the team since January 2024. 
//             She empowers children, builds parents’ confidence as communicator partners, 
//             and is passionate about adult dysphagia. A cat lover and photography enthusiast!
//             <span className={styles.quoteMark}>”</span>
//           </p>
//         </div>
//       </div>
//       <img src={pencilIcon} alt="pencil" className={styles.pencilIcon} />
//     </div>
//   );
// }
