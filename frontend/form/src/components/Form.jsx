import React, { useState } from "react";

import axios from 'axios'
function Form() {
    const [username, setUsername] = useState('');
    const [language, setLanguage] = useState('Java');
    const [input, setInput] = useState('');
    const [code, setCode] = useState('');
    function handleSubmit(event) {
        //console.log("data submitted");

        event.preventDefault();
        axios.post('http://localhost:3000/insert', { username, language, input, code })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        event.target.reset();


    }
    return (
        <div className="flex h-screen items-center justify-center py-3 align-items-center bg-teal-lighter">

            <form onSubmit={handleSubmit} className="">
                <label className="mb-2  tracking-wide font-bold text-lg text-gray-500">Enter UserName: </label>
                <input className="border py-2 px-3 bg-teal-lighter text-blue-darkest md:mr-2" required type="text" placeholder="Your name" onChange={e => setUsername(e.target.value)} /> <br /> <br />
                <label className="mb-2  tracking-wide font-bold text-lg text-gray-500">Choose Preferred Language:  </label>
                <select className="border py-2 px-3 text-gray-darkest md:mr-2" defaultValue="Java" onChange={e => setLanguage(e.target.value)}>

                    <option className="text-gray-600" value="C++">C++</option>
                    <option className="text-gray-600" value="Java">Java</option>
                    <option className="text-gray-600" value="Javascript">Javascript</option>
                    <option className="text-gray-600" value="Python">Python</option>


                </select><br /><br />
                <label className="mb-2  tracking-wide font-bold text-lg text-gray-500">Enter Standard Input: </label>
                <input className="border py-2 px-3 text-gray-darkest md:mr-2" type="text" required placeholder="Your Input" onChange={e => setInput(e.target.value)} /><br /><br />
                <label className="mb-2  tracking-wide font-bold text-lg text-gray-500">Enter Source Code: </label> <br />
                <textarea className="border py-2 px-3 text-gray-darkest md:mr-2" cols="40" rows="10" required onChange={e => setCode(e.target.value)}></textarea><br /> <br />
                <button className="btn hover:text-grey-darker bg-black-500 border-black" type="submit">Submit</button>
            </form>

        </div>
    )
}
export default Form;