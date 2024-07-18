import React from 'react'
import * as C from './styles'

export default function Btn({ link1, link2 }) {
    return (
        <C.Actions>
            <C.Button href={link1.link}>
                {link1?.text}
            </C.Button>
            <C.Button2 href={link2.link}>
                {link2?.text}
            </C.Button2>
        </C.Actions>
    )
}
