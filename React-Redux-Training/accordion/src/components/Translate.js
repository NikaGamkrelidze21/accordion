import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
    {
        label: 'Afrikans',
        value: 'af'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
]

const Translate = () => {
    const [Text, setText] = useState('')
    const [Language, setLanguage] = useState(options[0])

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="">Enter Text</label>
                    <input type="text" value={Text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown label={'Select a language'} options={options} selected={Language} onSelectedChange={setLanguage} />
            <h3>output</h3>
            <Convert language={Language} text={Text} />
        </div >
    )
}

export default Translate