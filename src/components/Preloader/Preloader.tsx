import preloader from '../../img/Ell.gif'
import classes from './Preloader.module.css'

const Preloader = () => {
  return (
    <div className={classes.preloader}>     
        <img src={preloader} alt="preloder" />   
    </div>
  )
}

export default Preloader;

