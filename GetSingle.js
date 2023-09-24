import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function Getsingle(){
    var { id } = useParams()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobil_number, setNumber] = useState('')
    const [roll, setRoll] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        fetch('http://localhost:3003/getsingle/'+id)
            .then(res => res.json())
            .then((data) => {
                setName(data[0].name)
                setEmail(data[0].email)
                setNumber(data[0].mobil_number)
                setRoll(data[0].roll)
                setPassword(data[0].password)
            })
    })
    return(
        <>
        <h1 className="text-center">User</h1>
            <table className="table table-striped mt-2">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile_number</th>
                        <th>Roll</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{mobil_number}</td>
                        <td>{roll}</td>
                        <td>{password}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}