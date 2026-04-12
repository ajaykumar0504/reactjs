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

import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  Outlet 
} from 'react-router-dom';


const styles = {
  navbar: {
    display: 'flex',
    gap: '20px',
    padding: '1rem',
    background: '#333',
    color: 'white'
  },
  link: {
    color: '#00d8ff',
    textDecoration: 'none',
    fontSize: '18px'
  },
  nestedNav: {
    display: 'flex',
    gap: '15px',
    margin: '20px 0',
    padding: '10px',
    background: '#eee',
    borderRadius: '5px'
  },
  container: {
    padding: '20px',
    fontFamily: 'sans-serif'
  }
};

const Home = () => <div><h1>Home</h1><p>Welcome to the main page.</p></div>;
const About = () => <div><h1>About</h1><p>This is the about section.</p></div>;
const Contact = () => <div><h1>Contact</h1><p>Contact us at support@example.com</p></div>;
const Profile = () => <div><h1>Profile</h1><p>Welcome back, User!</p></div>;

const WebDev = () => <h2>Web Development Services</h2>;
const AppDev = () => <h2>App Development Services</h2>;
const UIUX = () => <h2>UI/UX Design Services</h2>;

const Services = () => {
  return (
    <div>
      <h1>Services</h1>
      <nav style={styles.nestedNav}>
        <Link style={styles.link} to="web">Web Development</Link>
        <Link style={styles.link} to="app">App Development</Link>
        <Link style={styles.link} to="uiux">UI/UX Design</Link>
      </nav>
      <div style={{ border: '1px dashed #ccc', padding: '20px' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <nav style={styles.navbar}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/about">About</Link>
        <Link style={styles.link} to="/services">Services</Link>
        <Link style={styles.link} to="/contact">Contact</Link>
        <Link style={styles.link} to="/profile">Profile</Link>
      </nav>

      <div style={styles.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/services" element={<Services />}>
            <Route index element={
              <p>Select a service to view details.</p>
              } />
            <Route path="web" element={<WebDev />} />
            <Route path="app" element={<AppDev />} />
            <Route path="uiux" element={<UIUX />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}