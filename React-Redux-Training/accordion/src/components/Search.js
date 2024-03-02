import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = () => {

    const [term, setTerm] = useState('web design')
    const [results, setResults] = useState([])

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get("https://en.wikipedia.org/w/api.php?", {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            })
            setResults(data.query.search)
            console.log(results)
        }

        if (!results.length) {
            search()
        }

        const timeoutID = setTimeout(() => {
            if (term) {
                search()
            }
        }, 500)


        return () => {
        clearTimeout(timeoutID)
        }

    }, [term])

    const renderedResults = results.map((result) => {
        return (
            <div className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>GO</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }} ></span>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="">Enter Search term</label>
                    <input
                        type="text"
                        className="input"
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search