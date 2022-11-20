import 'font-awesome/css/font-awesome.min.css';
import './whatsapp.css';
function Whatsapp(){
    return(
        <div>
            {/* <p class="text-us">Text us right now !!</p> */}
            <a class="whatsapp" href="https://api.whatsapp.com/send/?phone=917093337139&text&app_absent=0" target="_blank">
                <i class="fa fa-whatsapp my-float"></i>
            </a>
        </div>
    );
}

export default Whatsapp;