import React from 'react'
import '../styles/Header.css'
import { Card, CardContent, CardHeader } from '@material-ui/core'

const Header = () => {
    return (
        <Card elevation={5}>
            <CardHeader
                title={'Draw My Code'}
                subheader={'Learn by Visualizing'}
                className={'header'}
            />
        </Card>
    )
}

export default Header
