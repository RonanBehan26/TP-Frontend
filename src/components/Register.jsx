import {useNavigate} from "react-router-dom";
import './LoginRegisterElements.css';
import axios from 'axios';
import {useState} from "react";


const Register = () => {

    //need to do this for all the valriables in springboot
    //end of this - https://www.youtube.com/watch?v=T9LnzDMINF8&t=12s

    const [userData, setUserData] = useState({
        employeeId: 0,
        email: '',
        pass: '',
        firstName: '',
        lastName: '',
        employeeAddress: '',
        employeePhoneNumber: '56678',
        salaryPA: '5600',
        b2b: 'No',
        team: 'HR',
        departmentId: 102
    });

    const COURSE_API_URL = "http://localhost:9001/api/v1/employee";

    const COURSE_API_URLPut = "http://localhost:9191/api/v1/employee/1302";

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/sign-in`;
        navigate(path);
    }

    //I included this
    const axiosConfig = {
        headers : {
        "Access-Control-Allow-Origin": "*",
        //'Access-Control-Allow-Credentials': 'true',
        //'Content-Type': 'application/json;charset=UTF-8' //, application/json;charset=UTF-8, Access-Control-Allow-Headers'
        'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, POST, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With,X-HTTP-Method-Override, Content-Type, Accept, Authorization'
        }
    };

//     9191
// - get - id/all - works
// - delete/put/post - doesn't work


    async function handleSubmit(event) {
        event.preventDefault(); //provides this event
        /*await axios.post(COURSE_API_URL, userData).then(res => {
            headers: axiosConfig,
            setUserData({
                email: '',
                pass: '',
                firstName: '',
                lastName: '',
                employeeAddress: '',
                employeePhoneNumber: '56678',
                salaryPA: '5600',
                b2b: 'No',
                team: 'HR',
                departmentId: 102
            })
        }).catch(
            err => {

                alert("error");
            })*/
        
              
                    var postData = {
                        email: "test@test.com",
                        password: "password"
                      };
                      
                      let axiosConfigd = {
                        headers: {
                            'Content-Type': 'application/json;charset=UTF-8',
                             "Access-Control-Allow-Origin": "*",
                            "Access-Control-Allow-Credentials": "true",
                            //"Access-Control-Allow-Methods":  "POST, GET, OPTIONS, DELETE, PUT",
                            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
                        }
                      };
                      
                      axios.post(COURSE_API_URL, postData, axiosConfigd)
                      .then((res) => {
                        alert("response");
                        console.log("RESPONSE RECEIVED: ", res);
                      })
                      .catch((err) => {
                        alert("error");
                        console.log("AXIOS ERROR: ", err);
                      })
    }

    async function handleSubmitlll(event) {
        event.preventDefault(); //provides this event
        await axios.get(COURSE_API_URL).then(res => {
            alert("success");
        }).catch(
            err => {

                alert("error");
            })
    }

//     try{
//          await axios.post(COURSE_API_URL,

//          function (req) {
//             req.header("Access-Control-Allow-Origin", "*");
//             req.header("Access-Control-Allow-Headers", "Content-Type");
//             req.header('Accept', 'application/json, text/plain');
//             req.header('Content-Type', 'application/json;charset=UTF-8');
//             req.header('Access-Control-Allow-Methods', 'POST');
//             req.header('Access-Control-Allow-Credentials', 'true');

//             req.send(
//                 employee
//                 );
//         });
//           alert("Employee Registation Successfully");
//           setFirstName("");
//           setLastName("");
//           setPass("");
//           setEmail("");
//         }
//     catch(err)
//         {
//           alert("User Registation Failed");
//         }
//    }

    return (
        <div className="auth-form-container">

            <h2>Register</h2>

            <form className="register-form" onSubmit={handleSubmit}>

                <label htmlFor="firstName">
                    First Name:
                </label>
                <input
                    type="text"
                    value={userData.firstName}
                    name="firstName"
                    id="firstName"
                    autoComplete="on" //don't want to see previous suggestions
                    onChange={(e) => setUserData({...userData, firstName: e.target.value})} placeholder="First Name" //sets state
                />

                <label htmlFor="lastName">
                    Last Name:
                </label>
                <input
                    type="text"
                    value={userData.lastName}
                    name="lastName"
                    id="lastName"
                    autoComplete="on" //don't want to see previous suggestions
                    //onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" //sets state
                    onChange={(e) => setUserData({...userData, lastName: e.target.value})} placeholder="Last Name" //sets state
                />

                <label htmlFor="password">
                    Password:
                </label>
                <input
                    value={userData.pass}
                    onChange={(e) => setUserData({...userData, pass: e.target.value})} placeholder="Password" //sets state
                    type="password"
                    id="password"
                    name="password"
                />


                <label htmlFor="email">
                    Email:
                </label>
                <input
                    value={userData.email}
                    onChange={(e) => setUserData({...userData, email: e.target.value})} placeholder="Email" //sets state
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="on"
                />

                <button type="submit">Register</button>

            </form>
            <button className="link-btn" onClick={routeChange}>Already have an account? Login here.</button>
        </div>
    )
}

export default Register;

// import { useNavigate } from "react-router-dom";
// import './LoginRegisterElements.css';
// import axios from 'axios';
// import {useState } from "react";


// const Register = () => {

//     //need to do this for all the valriables in springboot
//     //end of this - https://www.youtube.com/watch?v=T9LnzDMINF8&t=12s
//     // const [email, setEmail] = useState('');

//     // const [pass, setPass] = useState('');

//     // const [firstName, setFirstName] = useState('');

//     // const [lastName, setLastName] = useState('');

//     const [userData, setUserData] = useState({
//         email: '',
//         pass: '',
//         firstName: '',
//         lastName: '',
//         employeeAddress: '',
//         employeePhoneNumber: '',
//         salaryPA: '',
//         b2b: '',
//         team: '',
//         departmentId: ''
//     });
    

//     // const employee = {
//     //     //these values may need to be in ""
//     //     employeeFirstName: firstName,
//     //     employeeLastName: lastName,
//     //     employeeEmail: email,
//     //     employeePassword: pass,

//     //     // firstName: firstName,
//     //     // lastName: lastName,
//     //     // employeeEmail: email,
//     //     // employeePassword: pass,
//     //     //he said try the other data
//     //     // employeeAddress: "Cory",
//     //     // employeePhoneNumber: "56678",
//     //     // salaryPA: "5600",
//     //     // b2b: "No",
//     //     // team: "HR",
//     //     // departmentId: 102

//     // }

//     const COURSE_API_URL = "http://localhost:9191/api/v1/employee";

//     let navigate = useNavigate(); 
//     const routeChange = () =>{ 
//       let path = `/sign-in`; 
//       navigate(path);
//     }

//     async function handleSubmit(event){
//         event.preventDefault(); //provides this event
//         await axios.post(COURSE_API_URL, userData).then(res => {...}).catch(
//             err=> {
//                 alert("error");
//             })
//         }

// //     try{
// //          await axios.post(COURSE_API_URL,

// //          function (req) {
// //             req.header("Access-Control-Allow-Origin", "*");
// //             req.header("Access-Control-Allow-Headers", "Content-Type");
// //             req.header('Accept', 'application/json, text/plain');
// //             req.header('Content-Type', 'application/json;charset=UTF-8');
// //             req.header('Access-Control-Allow-Methods', 'POST');
// //             req.header('Access-Control-Allow-Credentials', 'true');

// //             req.send( 
// //                 employee
// //                 );
// //         });
// //           alert("Employee Registation Successfully");
// //           setFirstName("");
// //           setLastName("");
// //           setPass("");
// //           setEmail("");
// //         }
// //     catch(err)
// //         {
// //           alert("User Registation Failed");
// //         }
// //    }

//     return (
//         <div className="auth-form-container">

//             <h2>Register</h2>
            
//         <form className="register-form" onSubmit={handleSubmit}> 

//             <label htmlFor="firstName">
//                 First Name:
//             </label>
//             <input 
//             type="text"
//             value={firstName} 
//             name="firstName" 
//             id="firstName"
//             autoComplete="on" //don't want to see previous suggestions
//             //onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" //sets state
//             onChange={(e) => setFirstName(e.target.value)}
//             />

//             <label htmlFor="lastName">
//                 Last Name:
//             </label>
//             <input 
//             type="text"
//             value={lastName} 
//             name="lastName" 
//             id="lastName"
//             autoComplete="on" //don't want to see previous suggestions
//             //onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" //sets state
//             onChange={(e) => setLastName(e.target.value)}
//             />

//             <label htmlFor="password">
//                 Password:
//             </label>
//             <input 
//             value={pass} 
//             onChange={(e) => setPass(e.target.value)} 
//             type="password"  
//             id="password" 
//             name="password" 
//             />

            
//             <label htmlFor="email" >
//                 Email:
//             </label>
//             <input 
//             value={email} 
//             onChange={(e) => setEmail(e.target.value)}
//             type="email" 
//             id="email" 
//             name="email" 
//             autoComplete="on"
//             />

//             <button type="submit">Register</button>

//         </form>
//         <button className="link-btn" onClick={routeChange}>Already have an account? Login here.</button>
//     </div>
//     )
// }

// export default Register;