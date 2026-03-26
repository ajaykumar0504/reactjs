import React from 'react'

export default function ListRendering() {
    const users = [
        { name:"Ajay", 
          email:"ajay@gmail.com",
          city:"coimbatore",
          age: 23,
          phone:"2548762114"},
         
              { 
                name:"vijay", 
          email:"vijay@gmail.com",
          city:"Thirchy",
          age: 21,
          phone:"9874512547"},

              { name:"Jai",
          email:"jai@gmail.com",
          city:"Coimbatore",
          age: 25,
          phone:"9842282456"},

              { name:"rama", 
          email:"ram@gmail.com",
          city:"Bangalore",
          age: 24,
          phone:"6452385478"},

              { name:"jeevan", 
          email:"jee@gmail.com",
          city:"ooty",
          age: 20,
          phone:"9845671247"},

    ];
  return(
    <div style={{textAlign:"center"}}>
          <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "20px"
        }}>
        
  <h1><u>User List</u></h1>
     </div>
        
           {users.map((user,index) => (
            <div
            key={index}
             style={{
               background: "linear-gradient(to right, #b5d4f3, #8be6d7)",
               padding: "20px",
               margin: "10px auto",
               width: "300px",
               borderRadius: "10px",
               boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
               fontFamily: "Times New Roman",
               color:"grey"    

          }}>

  <h2 style={{ color: "black" }}>{user.name}</h2>
  <p style={{ color: "#555" }}>Email: {user.email}</p>
  <p style={{ color: "#555" }}>City: {user.city}</p>
  <p style={{ color: "#555" }}>Age: {user.age}</p>
  <p style={{ color: "#555" }}>Phone: {user.phone}</p>
        </div>
        )
    )
        }
    </div>

);
}

