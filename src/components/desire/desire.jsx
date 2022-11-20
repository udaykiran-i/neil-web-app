import Grid from '@mui/material/Grid';
import './desire.css';
function Desire(){
    return(
        <div>
            <div class="desire-root">
                <h1 class='headings no-margin'>CHOOSE YOUR DESIRED SERVICES</h1>
                <Grid container>
                <Grid item xs={12} sm={6}>
                <div className="title-div">
                        <h2 class='titles'>
                            Statement Of Purpose 
                        </h2>
                        </div>
                        <p class='contents'>Editing outstanding SoPs that assuages the admissions Council of finding a right candidate for their University. </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                <div className="title-div">
                        <h2 class='titles'>
                            Cover letters  
                        </h2>
                        </div>
                        <p class='contents'>Concocting cover letters that are deep in purpose and ooze your zeal to get through the recruiters eyes at University and other internship companies</p>
                </Grid>
                <Grid item xs={12} sm={6}>
                <div className="title-div">
                        <h2 class='titles'>
                            Letter Of Recommendation
                        </h2>
                        </div>
                        <p class='contents'>Helping you or your faculty write genuine recommendation letters that reflect your personality while leaving the admissions panel impressed. </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                <div className="title-div">
                        <h2 class='titles'>
                            Common App Essays
                        </h2>
                        </div>
                        <p class='contents'>Your undergrad essays shall get precise shape and personality through consistent counseling. The universities would love to review your application more curiosuly. </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                <div className="title-div">
                        <h2 class='titles'>
                            Short Answer Essays
                        </h2>
                        </div>
                        <p class='contents'>Get you through submitting on-point short answers that struck a chord with the examiners and grab their attention. </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                <div className="title-div">
                        <h2 class='titles'>
                           Scholarship Essays
                        </h2>
                        </div>
                        <p class='contents'>Handholding support and extensive counselling in writing scholarship Essays that exponentially increase your chances of winning a jawdropping scholarship. </p>
                </Grid>
                </Grid> 
            </div>
        </div>
    )
}
export default Desire;