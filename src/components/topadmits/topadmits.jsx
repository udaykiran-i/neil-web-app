import './topadmits.css';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImageTest from "../../images/12hours.png"
import TestimonialStudent from "../../images/testimonialstudent.png";
import UnvImage1 from "../../images/unvimage1.png";
import UnvImage2 from "../../images/unvimage2.png";
import UnvImage3 from "../../images/unvimage3.png";
import UnvImage4 from "../../images/unvimage4.png";
import UnvImage5 from "../../images/unvimage5.png";
import UnvImage6 from "../../images/unvimage6.png";
import UnvImage7 from "../../images/unvimage7.png";
import UnvImage8 from "../../images/unvimage8.png";
import UnvImage9 from "../../images/unvimage9.png";
import UnvImage10 from "../../images/unvimage10.png";
import UnvImage11 from "../../images/unvimage11.png";
import UnvImage12 from "../../images/unvimage12.png";
import StarIcon from '@mui/icons-material/Star';
import Satisfaction from "../../images/satisfaction.png";


function TopAdmits() {
    return (
        <div className='testimonials'>
        <div className='admits-bar'>
           <div className='admits-text'> <p>OUR TOP ADMITS</p></div>
        </div>
        <div className='admits-logos'>
        <Grid container spacing={2}>
          <Grid item xs={4} sm={3}>
           <img src={UnvImage1} className='top-admits-img' />
          </Grid>
          <Grid item xs={4} sm={3}>
          <img src={UnvImage2} className='top-admits-img' />
          </Grid>
          <Grid item xs={4} sm={3}>
          <img src={UnvImage3} className='top-admits-img' />
          </Grid>
          <Grid item xs={4} sm={3}>
          <img src={UnvImage4} className='top-admits-img' />
          </Grid>
          <Grid item xs={4} sm={3}>
          <img src={UnvImage5} className='top-admits-img' />
          </Grid>
          <Grid item xs={4} sm={3}>
          <img src={UnvImage6} className='top-admits-img' />
          </Grid>
          <Grid item xs={4} sm={3}>
          <img src={UnvImage7} className='top-admits-img' />
          </Grid>
          <Grid item xs={4} sm={3}>
          <img src={UnvImage8} className='top-admits-img' />
          </Grid>
          <Grid item xs={4} sm={3}>
           <img src={UnvImage9} className='top-admits-img' />
          </Grid>
          <Grid item xs={4} sm={3}>
          <img src={UnvImage10} className='top-admits-img' />
          </Grid>
          <Grid item xs={4} sm={3}>
          <img src={UnvImage11} className='top-admits-img' />
          </Grid>
          <Grid item xs={4} sm={3}>
           <img src={UnvImage12} className='top-admits-img' />
          </Grid>
          <Grid item xs={12} sm={12} className='testi-heading'>
            <p className='testi-heading'>What our student has to say about us </p>
          </Grid>
          <div className='testi-content'>
          <Grid container spacing={2} className='testi-grid'>
          <Grid item xs={12} sm={3}>
           <img className='testi-image' src={TestimonialStudent}></img>
           <div className='testi-stars'>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
           </div>
           <img className='satisfaction-image-landscape' src={Satisfaction}/>
          </Grid>
          <Grid item xs={12} sm={9}>
              
            <p className='testi-body'><span className='aphos-design'>&ldquo;</span> One of my friends recommended Neil Essays and his team to me. I must say that I am quite pleased, and the service they provide is exceptional. The importance of essays and SOPs in gaining admission to your dream universities cannot be overstated. </p>
           
            <p className='testi-body'>My experience was completely hassle-free, and everything arrived far ahead of schedule. I spoke to Neil on the call, and we discussed my essays and shared ideas. I had to pressure him for the final edited draft because the deadline was approaching quickly, but guess what? It was in my hands in a matter of hours.</p>

            <p className='testi-body'>the edited work finished so beautifully and just how i wanted it to turn out; plus, it also helped me receive a huge scholarship grant to attend my dream university.<span className='aphos-design'>&rdquo;</span> </p>
            
          </Grid>
          <Grid item xs={12} sm={9}>
          <img className='satisfaction-image-potrait' src={Satisfaction}/>
          </Grid>
        </Grid>
          </div>
         
        </Grid>
        </div>
      </div>  
    )
}

export default TopAdmits;