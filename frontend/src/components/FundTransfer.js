import { Button } from 'bootstrap';
import React from 'react';

function FundTransfer() {
    return (
        <div>
            <h2>Fund Transfer</h2>
            <table>
                <tr>
                    <td>Mode of Payment:</td>
                    <td>
                        <select>
                            <option value="NEFT">NEFT</option>
                            <option value="RTGS">RTGS</option>
                            <option value="IMPS">IMPS</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>From Account : </td>
                    <td>
                    <select>
                            <option value="1">Savings</option>
                            <option value="2">Current</option>
                            <option value="3">Fixed Deposit</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>To Account No: </td>
                    <td><input/></td>
                </tr>
                <tr>
                    <td>Amount:</td>
                    <td><input/></td>
                </tr>
            </table>

            <button>Send Money</button>
            
        </div>

    );
}

export default FundTransfer;