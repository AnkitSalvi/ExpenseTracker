import React, { FC } from 'react'
import { Link } from 'react-router-dom'
/* Styles */
import useStyles from './styles'
/* Components */
import Typography from '@material-ui/core/Typography'




const Header: FC = () => {

  const classes = useStyles()

  return (
      <div className={classes.root}>
        <div className={classes.text}>
        <Link to='/expense-tracker' className={classes.link}>
                Home
        </Link>
        </div>
        <div className={classes.text}>
        <Link to='/graphs' className={classes.link}>
            Graphs
        </Link>
        </div>
    
    </div>
  )
}

export default Header