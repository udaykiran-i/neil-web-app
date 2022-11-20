import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Service from '../../images/service.png'
import './services.css'
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight:'270px',
    minWidth:'100px',
    backgroundColor:'#e7f5fe'
}));
function Services(){
    return(
        <div class="whyus-root">
        <Grid container spacing={3}>
          <Grid item xs={6} sm={4}>
            <Item>
                <h2>
                    Reseach 
                </h2>
                <p>A Statement of Purpose or a College Essay requires extensive research about self, the University, and the Course program before putting your pen on the paper. We lift off a huge burden on you in this regard by asking a few simple questions that our editors will infer to create a customized Essay.</p>
            </Item>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Item>
                <h2>
                    Genuineness 
                </h2>
                <p>We do not cook up any lies but instead use your past achievements, interests, and hobbies to showcase your skills and throw light on your forte to impress the admissions panel, keeping the essay's truthfulness intact.</p>
            </Item>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Item>
                <h2>
                    Winning Format
                </h2>
                <p>Our content writers are time tested with an experience of more than 1000 cases each, delivering flawless, grammatically perfect, and winning essays by focusing on your core intent of the application. </p>
            </Item>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Item>
                <h2>
                    Professional writers
                </h2>
                <p>We constantly reinvent our vocabulary and sentences to keep our essays fresh and impactful. This trait earned us repeat customers who recommended our services to yet some more. </p>
            </Item>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Item>
                <h2>
                    Always fresh
                </h2>
                <p>We're working round the clock to deliver your essays  within the scheduled deadlines</p>
            </Item>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Item>
                <h2>
                    Always fresh
                </h2>
                <img width={15} height={15} src={Service}></img>
                <p>We're working round the clock to deliver your essays  within the scheduled deadlines</p>
            </Item>
          </Grid>
        </Grid> 
        </div>
    )
}
export default Services;