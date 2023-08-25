import axios from "axios";


function handleToken (jwtToken) {
  return(
    {
      baseURL: "http://localhost:8081",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + jwtToken

      }
      
    }
  )

}
export default axios.create((jwtToken) => handleToken(jwtToken)

 );