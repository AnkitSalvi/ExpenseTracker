import { colors } from './../../utils/constants';
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
  text:{
    fontSize:'1.6rem',
    margin: 'auto',
    marginBottom:'2rem',
    marginTop:'3rem'
  },
  container: {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    height: '1000px',
    paddingTop:'8rem'
  },
  boldText:{
      fontSize:'4rem',
      marginLeft:'7.7rem',
      marginTop:'4rem'
  }
}))

export default useStyles
