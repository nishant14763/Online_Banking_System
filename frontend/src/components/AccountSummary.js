import React from 'react';

function AccountSummary() {
    return (
        <div>
            <h2>Account Summary</h2>
            <table>
                <tr>
                    <th>Account Type</th>
                    <th>Account Number</th>
                    <th>Balance</th>
                </tr>
                <tr>
                    <td>Savings</td>
                    <td>3441245</td>
                    <td>2000</td>
                </tr>
            </table>
            
        </div>

    );
}

export default AccountSummary;