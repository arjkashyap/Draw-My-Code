import React from 'react'
import '../styles/Footer.css'
import { Card, CardContent, IconButton, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { GitHub } from '@material-ui/icons'

const useStyle = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.primary.light,
    },
}))

const Footer = () => {
    const classes = useStyle()
    return (
        <Card className={classes.root} elevation={4}>
            <CardContent>
                <h6
                    style={{
                        textAlign: 'center',
                        fontSize: '1rem',
                    }}
                >
                    {' '}
                    This Project is open for contribution @{' '}
                    <a
                        href="https://github.com/bing101/Draw-My-Code"
                        className="link"
                        target="__blank"
                    >
                        {' '}
                        <IconButton>
                            <GitHub />
                        </IconButton>
                    </a>
                </h6>
            </CardContent>
        </Card>
    )
}

export default Footer
