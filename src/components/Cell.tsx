import React, { FC, ReactElement, useState } from 'react'
import { Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

interface IProps {
    height: number | string
    width: number | string
    backgroundColor: string
    onClick: () => void
    children?: any
    onHoverElevation: number
}

const Cell: FC<IProps> = (props) => {
    const {
        height,
        width,
        onHoverElevation,
        backgroundColor,
        onClick,
        children,
    } = props

    const [elevation, setElevation] = useState<number>(3)

    return (
        <div
            className={'grid-cell'}
            onClick={onClick}
            style={{ backgroundColor, height, width, margin: 2 }}
        >
            {children}
        </div>
    )
}

export default Cell
