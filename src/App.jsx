// import React from 'react';
// import Destructprops from "./Destructprops";
// import "./index.css"; 
//task3//
// import ListRendering from "./Component/ListRendering";


// function App() {
//   const users = [
//     { name: "Ajay", email: "ajay@thestackly.com", role: "Software Engineer" },
//     { name: "Vijay", email: "vjay@thestackly.com", role: "HTML Developer" },
//     { name: "Sanjay", email: "sanjay@thestackly.com", role: "Python Developer" },
//     { name: "Jay", email: "jay@thestackly.com", role: "Data Analyst" },
//     { name: "James", email: "james@thestackly.com", role: "Software Testing" }
//   ];

//   return (
//     <div className="App">
//       <h1 style={{ textAlign: 'center' }}>Task2-DestructuringProps(parent and child components)</h1>
      
//       <div className="card-container">
//         {users.map((user, index) => (
//           <Destructprops 
//             key={index} 
//             name={user.name} 
//             email={user.email} 
//             role={user.role} 
//           />
        
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

//task 3//

// export default function App() {
//   return (
//     <div>
//       <ListRendering />
      
//     </div>
//   )
// }

 //task4//
// import React from "react";
// import StudentCard from "./Component/StudentCard";

// function App() {
//   const students = [
//     { id: 1, name: "Ajay", course: "React", isActive: true },
//     { id: 2, name: "Vijay", course: "Node", isActive: false },
//     { id: 3, name: "Ram", course: "Javascript", isActive: true },
//     { id: 4, name: "Sowmya", course: "Python", isActive: false }
//   ];

//   const containerStyle = {
//     display: 'flex',
//     flexWrap: 'wrap',
//     fontFamily: 'Arial, sans-serif',
//     padding: '20px'
//   };

//   return (
//     <div className="App">
//       <h1>Student List App</h1>
//       <div style={containerStyle}>
//         {students.map((student) => (
//           <StudentCard key={student.id} student={student} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

//task5//
// import React from 'react'
// import RegistrationForm from "./Component/RegistrationForm";

// export default function App() {
//   return (
//     <div>
//     <RegistrationForm />
//     </div>
//   )
// }

//Task6//
// import React from 'react'
// import Stopwatch from "./Component/Stopwatch";

// export default function App() {
//   return (
//     <div>
//     <Stopwatch />  
//     </div>
//   )
// }

//task7//
// import React from 'react'
// import UseEffect from "./Component/UseEffect";

// export default function App() {
//   return (
//     <div>
//       <UseEffect/>
      
//     </div>
//   )
// }

//task8//
// import React from 'react'
// import MiniChatApp from './Component/MiniChatApp';

// export default function App() {
//   return (
//     <div>
//       <MiniChatApp/>
      
//     </div>
//   )
// }

//Task9//

// import React, { useState } from "react";
// import {Theme} from "./Component/Theme";
// import ProfileImage from "./Component/ProfileImage";

// export default function App() {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));
//   };

// const appStyle = {
//   textAlign: "center",
//   padding: "40px 20px",
//   minHeight: "100vh",
//   transition: "0.3s",
//   background:
//     theme === "light"
//       ? "linear-gradient(to right, #e3f2fd, #fce4ec)"
//       : "linear-gradient(to right, #1e1e2f, #121212)",
//   color: theme === "light" ? "#000" : "#faf5f5",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
// };

// const titleStyle = {
//   fontSize: "28px",
//   marginBottom: "20px",
//   color: theme === "light" ? "#d32f2f" : "#ff6b6b", 
// };

// const buttonStyle = {
//   padding: "10px 20px",
//   marginBottom: "50px",
//   border: "none",
//   background: "linear-gradient(45deg, #4caf50, #2e7d32)",
//   color: theme === "light" ? "#fff" : "#fff",
//   borderRadius: "25px",
//   cursor: "pointer",
// };

//   return (
//     <Theme.Provider value={{ theme, toggleTheme }}>
//       <div style={appStyle}>
//         <h1 style={{ color: theme === "light" ? "red" : "#ff6b6b" }}>
//           Profile Image Upload & Theme Change</h1>

//         <button onClick={toggleTheme} style={buttonStyle}>
//           Change Theme
//         </button>

//         <ProfileImage />
//       </div>
//     </Theme.Provider>
//   );
// }
  
//task10//
// import React from 'react'
// import UseReducer from './Component/UseReducer'


// export default function App() {
//   return (
//     <div>
//       <UseReducer/>
//     </div>
//   )
// }

//task11//
// import React from 'react'
// import TicTacToe from './Component/TicTacToe'

// export default function App() {
//   return (
//     <div>
//       <TicTacToe/>
//     </div>
//   )
// }

//task12//
//routing with Nested routes//
// import React from 'react';
// import { 
//   BrowserRouter as Router, 
//   Routes, 
//   Route, 
//   Link, 
//   Outlet 
// } from 'react-router-dom';


// const styles = {
//   navbar: {
//     display: 'flex',
//     gap: '20px',
//     padding: '1rem',
//     background: '#333',
//     color: 'white'
//   },
//   link: {
//     color: '#00d8ff',
//     textDecoration: 'none',
//     fontSize: '18px'
//   },
//   nestedNav: {
//     display: 'flex',
//     gap: '15px',
//     margin: '20px 0',
//     padding: '10px',
//     background: '#eee',
//     borderRadius: '5px'
//   },
//   container: {
//     padding: '20px',
//     fontFamily: 'sans-serif'
//   }
// };

// const Home = () => <div><h1>Home</h1><p>Welcome to the main page.</p></div>;
// const About = () => <div><h1>About</h1><p>This is the about section.</p></div>;
// const Contact = () => <div><h1>Contact</h1><p>Contact us at support@example.com</p></div>;
// const Profile = () => <div><h1>Profile</h1><p>Welcome back, User!</p></div>;

// const WebDev = () => <h2>Web Development Services</h2>;
// const AppDev = () => <h2>App Development Services</h2>;
// const UIUX = () => <h2>UI/UX Design Services</h2>;

// const Services = () => {
//   return (
//     <div>
//       <h1>Services</h1>
//       <nav style={styles.nestedNav}>
//         <Link style={styles.link} to="web">Web Development</Link>
//         <Link style={styles.link} to="app">App Development</Link>
//         <Link style={styles.link} to="uiux">UI/UX Design</Link>
//       </nav>
//       <div style={{ border: '1px dashed #ccc', padding: '20px' }}>
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default function App() {
//   return (
//     <Router>
//       <nav style={styles.navbar}>
//         <Link style={styles.link} to="/">Home</Link>
//         <Link style={styles.link} to="/about">About</Link>
//         <Link style={styles.link} to="/services">Services</Link>
//         <Link style={styles.link} to="/contact">Contact</Link>
//         <Link style={styles.link} to="/profile">Profile</Link>
//       </nav>

//       <div style={styles.container}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/services" element={<Services />}>
//             <Route index element={
//               <p>Select a service to view details.</p>
//               } />
//             <Route path="web" element={<WebDev />} />
//             <Route path="app" element={<AppDev />} />
//             <Route path="uiux" element={<UIUX />} />
//           </Route>
//         </Routes>
//       </div>
//     </Router>
//   );
// }

//task 13//
// import React, { useEffect, useState } from "react";

// function UserDetails({ user }) {
//   return (
//     <div style={styles.detailCard}>
//       <h2 style={styles.detailTitle}>User Profile</h2>
//       <div style={styles.infoGroup}>
//         <p><strong>Name:</strong> {user.name}</p>
//         <p><strong>Email:</strong> {user.email}</p>
//         <p><strong>Phone:</strong> {user.phone}</p>
//         <p><strong>Website:</strong> <span style={styles.link}>{user.website}</span></p>
//       </div>

//       <h3 style={styles.subTitle}>Location</h3>
//       <div style={styles.addressBox}>
//         <p>{user.address.street}, {user.address.suite}</p>
//         <p>{user.address.city} - {user.address.zipcode}</p>
//       </div>
//     </div>
//   );
// }

// export default function App() {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => setUsers(data))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div style={styles.container}>
//       {/* Sidebar List */}
//       <div style={styles.list}>
//         <h2 style={styles.listHeader}>Directory</h2>
//         <div style={styles.scrollArea}>
//           {users.map((user) => (
//             <div
//               key={user.id}
//               onClick={() => setSelectedUser(user)}
//               style={{
//                 ...styles.userItem,
//                 ...(selectedUser?.id === user.id ? styles.activeUser : {}),
//               }}
//             >
//               {user.name}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Details View */}
//       <div style={styles.details}>
//         {selectedUser ? (
//           <UserDetails user={selectedUser} />
//         ) : (
//           <div style={styles.emptyState}>
//             <p>Please select a user to view their details</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: "flex",
//     gap: "25px",
//     padding: "40px",
//     background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
//     minHeight: "100vh",
//     color: "#f8fafc",
//     fontFamily: "'Inter', sans-serif",
//   },
//   list: {
//     width: "30%",
//     background: "rgba(255, 255, 255, 0.05)",
//     backdropFilter: "blur(10px)",
//     padding: "24px",
//     borderRadius: "20px",
//     border: "1px solid rgba(255, 255, 255, 0.1)",
//     display: "flex",
//     flexDirection: "column",
//   },
//   listHeader: {
//     marginTop: 0,
//     fontSize: "1.5rem",
//     borderBottom: "1px solid #334155",
//     paddingBottom: "15px",
//     color: "#38bdf8",
//   },
//   scrollArea: {
//     overflowY: "auto",
//     marginTop: "10px",
//   },
//   userItem: {
//     padding: "14px 18px",
//     marginBottom: "8px",
//     borderRadius: "12px",
//     cursor: "pointer",
//     transition: "all 0.2s ease",
//     fontSize: "1rem",
//     color: "#cbd5e1",
//     background: "transparent",
//     border: "1px solid transparent",
//   },
//   activeUser: {
//     background: "#2563eb",
//     color: "#fff",
//     boxShadow: "0 4px 12px rgba(37, 99, 235, 0.4)",
//     fontWeight: "600",
//   },
//   details: {
//     width: "70%",
//     background: "rgba(255, 255, 255, 0.03)",
//     padding: "40px",
//     borderRadius: "20px",
//     border: "1px solid rgba(255, 255, 255, 0.1)",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//   },
//   detailCard: {
//     animation: "fadeIn 0.5s ease",
//   },
//   detailTitle: {
//     fontSize: "2rem",
//     marginBottom: "20px",
//     color: "#38bdf8",
//   },
//   infoGroup: {
//     fontSize: "1.1rem",
//     lineHeight: "1.8",
//     color: "#e2e8f0",
//   },
//   subTitle: {
//     marginTop: "30px",
//     color: "#94a3b8",
//     textTransform: "uppercase",
//     letterSpacing: "1px",
//     fontSize: "0.9rem",
//   },
//   addressBox: {
//     background: "rgba(0, 0, 0, 0.2)",
//     padding: "20px",
//     borderRadius: "12px",
//     marginTop: "10px",
//     borderLeft: "4px solid #38bdf8",
//   },
//   link: {
//     color: "#38bdf8",
//     cursor: "pointer",
//   },
//   emptyState: {
//     textAlign: "center",
//     color: "#64748b",
//     fontSize: "1.2rem",
//     fontStyle: "italic",
//   },
// };

//task14//
import React from 'react'
import CRUD from './Component/CRUD'

export default function App() {
  return (
    <div>
      <CRUD/>
    </div>
  )
}
