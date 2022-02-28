import React, { FC, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
/* Redux */
import { useStoreActions } from '../store'
/* Styles */
import useStyles from './styles.'
/* Components */
import Header from '../components/Header/index'
/* Views */
import Home from '../views/Home/index'
import Graph from '../views/Graphs/index'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'


const App: FC = () => {
  const classes = useStyles()

  const { saveTransactions, loadTransactions, saveCategories, loadCategories, saveGraphData, loadGraphData } = useStoreActions(
    (actions) => actions.transactions
  )

  /* Before refresh/closing tab save data to localStorage */
  window.addEventListener('beforeunload', (e) => {
    e.preventDefault()
    saveTransactions()
    saveCategories()
    saveGraphData()
  })

  useEffect(() => {
    /* Load transactions from localStorage */
    loadTransactions()
  }, [loadTransactions])

  useEffect(() => {
    loadCategories()
  }, [loadCategories])

  useEffect(() => {
    loadGraphData()
  }, [loadGraphData])

  return (
    <>
      {/* Material-UI css rest */}
      <Header/>
      <CssBaseline />
      <Container maxWidth='lg' className={classes.root}>
  
        <Switch>
          <Route exact path='/graphs' component={Graph} />
        </Switch>

        <Switch>
          <Route exact path='/expense-tracker' component={Home} />
        </Switch>

        {/* <BottomAppBar /> */}
      </Container>
    </>
  )
}

export default App
