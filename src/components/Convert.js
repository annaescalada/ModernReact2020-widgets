import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Convert = ({ language, text }) => {
    const [debouncedText, setDebouncedText] = useState(text)
    const [translated, setTranslated] = useState('')

    const API_KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
    useEffect(() => {
        const timerId = setTimeout(() => setDebouncedText(text), 500)
        return () => clearInterval(timerId)
    }, [text])

    useEffect(() => {
        const doTranslation = async () => {
            const { data: { data: { translations } }} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: API_KEY,
                }
            })

            setTranslated(translations[0].translatedText)
        }

        doTranslation()
    }, [debouncedText, language])

    return <div>
        <h1 className="ui header">{translated}</h1>

    </div>
}

export default Convert