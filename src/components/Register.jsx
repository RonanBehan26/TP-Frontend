import {useNavigate} from "react-router-dom";
import './LoginRegisterElements.css';
import axios from 'axios';
import {useState} from "react";


const Register = () => {

    //need to do this for all the valriables in springboot
    //end of this - https://www.youtube.com/watch?v=T9LnzDMINF8&t=12s

    const [userData, setUserData] = useState({
        employeeId: 0,
        employeeEmail: '',
        employeePassword: '',
        employeeFirstName: '',
        employeeLastName: '',
        employeeAddress: '',
        employeePhoneNumber: '',
        salaryPA: '',
        b2b: '',
        team: '',
        departmentId: 0
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

// submitHandler = (e) => {
//     e.preventDefault();
//     console.log(this.state);
//     axios
//       .post("http://localhost:8080/human/add/", this.state)
//       .then((response) => {
//         console.log(response);
//         this.clearFunc();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

// function clearForm () {
//     // use this to reset the states
//     userData.setUserData({
//         employeeId: 0,
//         employeeEmail: '',
//         employeePassword: '',
//         employeeFirstName: '',
//         employeeLastName: '',
//         employeeAddress: '',
//         employeePhoneNumber: '',
//         salaryPA: '',
//         b2b: '',
//         team: '',
//         departmentId: 0
//     });
// }


    async function handleSubmit(event) {
        event.preventDefault(); //provides this event
        await axios.post(COURSE_API_URL, userData, axiosConfig)
        .then(res => {
            //headers: axiosConfig,
            setUserData({
                userData
            })
            setUserData({
                ...userData, 
                employeeFirstName: '', 
                employeeLastName: '',
                employeePassword: '',
                employeeEmail: ''
            })
            alert("You have successfully registered. Please log in.");
            routeChange();
        }).catch(
            err => {

                alert("error");
            })
        
              
                    // var postData = {
                    //     // email: "test@test.com",
                    //     // password: "password"
                    //     userData
                    //   };
                      
                    //   let axiosConfigd = {
                    //     headers: {
                    //         'Content-Type': 'application/json;charset=UTF-8',
                    //          "Access-Control-Allow-Origin": "*",
                    //         "Access-Control-Allow-Credentials": "true",
                    //         //"Access-Control-Allow-Methods":  "POST, GET, OPTIONS, DELETE, PUT",
                    //         "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
                    //     }
                    //   };
                      
                    //   axios.post(COURSE_API_URL, postData, axiosConfigd)
                    //   .then((res) => {
                    //     alert("response");
                    //     console.log("RESPONSE RECEIVED: ", res);
                    //   })
                    //   .catch((err) => {
                    //     alert("error");
                    //     console.log("AXIOS ERROR: ", err);
                    //   })
    }

    return (
        <div className="auth-form-container">

            <h2>Register</h2>

            <form className="register-form" onSubmit={handleSubmit}>

                <label htmlFor="firstName">
                    First Name:
                </label>
                <input
                    type="text"
                    value={userData.employeeFirstName}
                    name="firstName"
                    id="firstName"
                    autoComplete="on" //don't want to see previous suggestions
                    onChange={(e) => setUserData({...userData, employeeFirstName: e.target.value})} placeholder="First Name" //sets state
                />

                <label htmlFor="lastName">
                    Last Name:
                </label>
                <input
                    type="text"
                    value={userData.employeeLastName}
                    name="lastName"
                    id="lastName"
                    autoComplete="on" //don't want to see previous suggestions
                    //onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" //sets state
                    onChange={(e) => setUserData({...userData, employeeLastName: e.target.value})} placeholder="Last Name" //sets state
                />

                <label htmlFor="password">
                    Password:
                </label>
                <input
                    value={userData.employeePassword}
                    onChange={(e) => setUserData({...userData, employeePassword: e.target.value})} placeholder="Password" //sets state
                    type="password"
                    id="password"
                    name="password"
                />


                <label htmlFor="email">
                    Email:
                </label>
                <input
                    value={userData.employeeEmail}
                    onChange={(e) => setUserData({...userData, employeeEmail: e.target.value})} placeholder="Email" //sets state
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


    // async function handleSubmitlll(event) {
    //     event.preventDefault(); //provides this event
    //     await axios.get(COURSE_API_URL).then(res => {
    //         alert("success");
    //     }).catch(
    //         err => {

    //             alert("error");
    //         })
    // }

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