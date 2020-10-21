import { makeStyles } from '@material-ui/core/styles';
import cityImage from '../../assets/city.jpg';

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${cityImage})`,
    backgroundSize: 'cover',
    height: '600px',
    width: '100vw',
    padding: '50px',
  },
  heroContainer: {
    marginBottom: '20px',
  },
}));
