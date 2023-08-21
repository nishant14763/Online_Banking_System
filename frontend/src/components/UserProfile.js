import React from 'react';
import axios from 'axios';

function UserProfile() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get("http://localhost:8081/users/1").then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
            <h2>User Profile</h2>
            <table>
                <tr>
                    <td>Name: {post.firstName}</td>
                </tr>
                <tr>
                    <td>Mobile No: {post.mobile}</td>
                </tr>
                <tr>
                    <td>Email Id: {post.email}</td>
                </tr>
                <tr>
                    <td>Aadhar No: {post.aadhaarNumber}</td>
                </tr>
                <tr>
                    <td>DOB: {post.dob}</td>
                </tr>
                <tr>
                    <td>Residential Address: {post.address}</td>
                </tr>

            </table>

            <button>Update Details</button>
            
        </div>
  );
}

export default UserProfile;