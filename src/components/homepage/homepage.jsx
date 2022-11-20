import './homepage.css';
import TimeImage from '../../images/12hours.png';
import HomeImage from '../../images/homeimage.png';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body2,
    // padding: theme.spacing(1),
    // textAlign: 'center',
    // color: theme.palette.text.secondary,
  }));
function HomePage() {
  return (
    <div className="apphome">
      <Grid container spacing={1} className='home-grid'>
        <Grid item xs={12} sm={5}>
        <img className='approvedimg' src={HomeImage}/>
      </Grid>
          <Grid item xs={12} sm={7} >
            <div>
              <p className='home-heading'>You are just a click away from your dream university</p>
            </div>  
            <div>
              <p className='experts-para'>Our experts help you prepare personal essays that get 100% University admissions across the globe.</p>
            </div>
            <div className='submit-button'>
            <Button className='action-button' href='https://www.google.com' variant="contained">fill the form </Button>
            </div>
          </Grid>
          {/* <Grid item xs={12} sm={1} >
          </Grid> */}
         
      </Grid>    
      <Grid container spacing={3}>
      {/* <Grid item xs={12} sm={1} >

</Grid>    */}
          <Grid item xs={12} sm={11}>

            <div className='delivery-div'>
              <p className='delivery-para'>Delivery In</p> 
            </div>

          </Grid>
      </Grid> 
      <Grid container spacing={0}>
      {/* <Grid item xs={12} sm={1} >

        </Grid>    */}
          <Grid item xs={12} sm={8}>
          <div className='time-flex'>
            <div>
              <p className='delivery-para'>Just</p> 
            </div>
            <div>    
              <img className='time-image' src={TimeImage}/>
            </div>
          </div>  
          </Grid>
          
          <Grid item xs={12} sm={4}>
          <div className='actions-div'>  
            <div className='check-flex'>    
            <CheckCircleOutlineIcon/>

              <p className='action-para'>
              Fill the form
              </p>

            
            </div>
            <div className='action-flex'>    
            <CheckCircleOutlineIcon/>
       
              <p className='action-para'>
                Talk to the writer
              </p>
            
            
            </div>
            <div className='action-flex'>    
            <CheckCircleOutlineIcon/>
            <span>
              <p className='action-para'>
                Get your essays delivered
              </p>
            </span>
            
            </div>
          </div>
            
          </Grid>

        </Grid>  
    </div>
  );
}

export default HomePage;
