import React from 'react';

function ChangeCredentials() {
    return (
        <div>
            <h2>Change User ID/Password</h2>
            <table>
                <tr>
                    <td>Old User ID: </td>
                    <td>31425</td>
                </tr>
                <tr>
                    <td>New User ID:</td>
                    <td><input/></td>
                </tr>
                <tr>
                    <td>Old Password: </td>
                    <td>XXXXX</td>
                </tr>
                <tr>
                    <td>New Password:</td>
                    <td><input/></td>
                </tr>
            </table>

            <button>Change Credentials</button>

        </div>

    );
}

export default ChangeCredentials;