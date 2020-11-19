import React, { FC } from 'react'
import { Box } from '@material-ui/core'

interface IProps {
    children?: React.ReactNode
    index: number
    value: number
    [propName: string]: any
}

const TabPanel: FC<IProps> = (props) => {
    const { children, index, value, ...others } = props
    return (
        <div hidden={value !== index} {...others}>
            {value === index && <Box p={3}>{children}</Box>}
        </div>
    )
}

export default TabPanel
