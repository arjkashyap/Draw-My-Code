import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Theme, AppBar, Tabs, Tab } from '@material-ui/core'

import BFS from '../components/BFS'
import SearchAlgos from '../components/SearchAlgos'
import DFS from '../components/DFS'
import ConwaysGOL from '../components/ConwaysGOL'
import '../styles/NavBar.css'
import Home from '../components/Home'
import TabPanel from '../components/TabPanel'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}))

const NavBar = () => {
    const classes = useStyles()
    const [currentTab, setCurrentTab] = useState<number>(0)

    const handleTabChange = (
        event: React.ChangeEvent<{}>,
        newValue: number
    ) => {
        setCurrentTab(newValue)
    }

    return (
        <div className={classes.root}>
            <AppBar position={'sticky'}>
                <Tabs
                    value={currentTab}
                    onChange={handleTabChange}
                    variant="fullWidth"
                >
                    <Tab label="Home" />
                    <Tab label="Array Search Algorithms" />
                    <Tab label="Breadth First Search" />
                    <Tab label="Depth First Search" />
                    <Tab label="Conways Game of Life" />
                </Tabs>
            </AppBar>
            <Router>
                <TabPanel index={0} value={currentTab}>
                    <Home />
                </TabPanel>
                <TabPanel index={1} value={currentTab}>
                    <SearchAlgos />
                </TabPanel>
                <TabPanel index={2} value={currentTab}>
                    <BFS />
                </TabPanel>
                <TabPanel index={3} value={currentTab}>
                    <DFS />
                </TabPanel>
                <TabPanel index={4} value={currentTab}>
                    <ConwaysGOL />
                </TabPanel>
            </Router>
        </div>
    )
}

export default NavBar
