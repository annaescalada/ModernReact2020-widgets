import React, { useState } from 'react'
import Dropdown from './Dropdown';
import Convert from './Convert'

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
]

const Translate = () => {
 const [language, setLanguage] = useState(options[0])
 const [text, setText] = useState('')

 return <div>
     <div className="ui form">
        <label>Enter text</label>
        <input className="field" type="text" value={text.value} onChange={(event) => setText(event.target.value)} />
     </div>
     <Dropdown 
        label="Select a language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options} 
    />
    <hr />
    <h3 className="ui header">Output</h3>
    <Convert language={language} text={text} />
 </div>
}

export default Translate