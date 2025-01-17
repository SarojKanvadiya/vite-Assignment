import { useState } from "react"

let initObj = {
    username: "",
    email: "",
    password: "",
    isAgree: false
}

export default function RegisterationForm() {

    const [formData, setFormData] = useState(initObj)
    const [data, setData] = useState([]);
    function handleChange(e) {
        e.preventDefault();
        console.log(e.target.value, e.target.name)
        console.log('checkbox checked:', e.target.checked);
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        setData([...data, formData]);
    }
    console.log(data)
    return (
        <div className="form-container">

            <form onSubmit={handleSubmit}>
                <h2>Registration Form</h2>
                <label><span>Name: </span>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Enter Name Here..." />
                </label>
                <label><span>Email: </span>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email Here...." />
                </label>
                <label htmlFor="password"><span>Password: </span>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter Password Here...." />
                </label>
                <label>
                    <input type="checkbox" checked={formData.isAgree} name="isAgree" onChange={handleChange} />
                    I agree to the terms and conditions
                </label>
                <div>
                    <input type="submit" />
                </div>
            </form>
            {
                data && data.map((el, i) => {
                    return (
                        <div className="card" key={i}>
                            <p><strong>Name:</strong> {el.name}</p>
                            <p><strong>Email:</strong> {el.email}</p>
                            <p><strong>Password:</strong> {el.password}</p>
                            <p><strong>Agreed to Terms:</strong> {el.isAgree ? 'Yes' : 'No'}</p>
                        </div>
                    )

                })
            }
        </div>
    )

}