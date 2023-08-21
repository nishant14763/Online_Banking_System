import React from 'react';

function AddPayee() {
    return (
        <div>
            <h2>Add Payee</h2>
            <table>
            <tr>
                <td>Beneficiary Name: </td>
                <td><input/></td>
            </tr>
            <tr>
                <td>Beneficiary Account No: </td>
                <td><input/></td>
            </tr>
            </table>
            <button>Save Payee</button>
            
        </div>

    );
}

export default AddPayee;