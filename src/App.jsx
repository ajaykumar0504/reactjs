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

import React from 'react'
import Stopwatch from "./Component/Stopwatch";

export default function App() {
  return (
    <div>
    <Stopwatch />  
    </div>
  )
}
