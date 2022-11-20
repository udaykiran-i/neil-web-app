import Grid from '@mui/material/Grid';
import './features.css';
function Features(){
    return(
        <div>
                <div class="main-root">
                <h1 class='heading'>WHY US?</h1>
                <Grid container>
                <Grid item xs={12} sm={4}>
                        <div className="title-div">
                        <h2 class='title'>
                            Research
                        </h2>        
                        </div>
                       
                        <p class='content'>A Statement of Purpose or a College Essay requires extensive research about self, the University, and the Course program before putting your pen on the paper. We lift off a huge burden on you in this regard by asking a few simple questions that our editors will infer to create a customized Essay</p>
                </Grid>
                <Grid item xs={12} sm={4}>
                <div className="title-div">
                        <h2 class='title'>
                        Winning Format 
                        </h2>
                        </div>
                        <p class='content'>We follow the most desirable format of the SoP or LoR that the top Universities have repeatedly accepted. It answers all the required questions of the essay while maintaining a coherent flow</p>
                </Grid>
                <Grid item xs={12} sm={4}>
                <div className="title-div">
                        <h2 class='title'>
                        Always fresh
                        </h2>
                        </div>
                        <p class='content'>We constantly reinvent our vocabulary and sentences to keep our essays fresh and impactful. This trait earned us repeat customers who recommended our services to yet some more</p>
                </Grid>
                <Grid item xs={12} sm={4}>
                <div className="title-div">
                        <h2 class='title'>
                        Genuineness
                        </h2>
                        </div>
                        <p class='content'>We do not cook up any lies but instead use your past achievements, interests, and hobbies to showcase your skills and throw light on your forte to impress the admissions panel, keeping the essay's truthfulness intact </p>
                </Grid>
                <Grid item xs={12} sm={4}>
                <div className="title-div">
                        <h2 class='title'>
                        Professional writers
                        </h2>
                        </div>
                        <p class='content'>Our content writers are time tested with an experience of more than 1000 cases each, delivering flawless, grammatically perfect, and winning essays by focusing on your core intent of the application</p>
                </Grid>
                </Grid> 
                </div>
        </div>
    )
}
export default Features;