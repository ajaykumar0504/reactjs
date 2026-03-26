import React from 'react';
// import Destructprops from "./Destructprops";
// import "./index.css"; 
import ListRendering from "./Component/ListRendering";

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

export default function App() {
  return (
    <div>
      <ListRendering />
      
    </div>
  )
}
 