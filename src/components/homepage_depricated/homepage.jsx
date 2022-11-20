import './homepage.css';
import TimeImage from '../../images/12hours.png';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
function HomePage() {
  return (
    <div className="apphome">
        <div>
            <img className='approvedimg' src={ApprovedImage}/>
       </div>
       <div>
           <h2 className='no-margin'>You are just a <a className='action-link' href='https://api.whatsapp.com/send/?phone=917093337139&text&app_absent=0'>click</a> away from your dream University</h2>
       </div>
       <div>
           <p>Our experts help you prepare personal essays that get 100% University admissions across the globe.</p>
       </div>
       <div>
            <p className='fontsize-18'>PROFFESIONAL | PRECISE | PERSONAL</p> 
       </div>
       <div>
            <p className='fontsize-46'>ESSAYS</p> 
       </div>
       <div>
            <p className='fontsize-46'>In</p>
        </div>
        <div>    
            <img className='time-image' src={TimeImage}/>
       </div>
    </div>
  );
}

export default HomePage;
