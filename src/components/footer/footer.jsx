import 'font-awesome/css/font-awesome.min.css';
import './footer.css';
function Footer() {
    return (
        <div>
            {/* <div class="social"><a href="#" class="insta"><i class="fa fa-instagram"></i></a><a href="#"><i class="fa fa-snapchat"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-facebook"></i></a></div> */}
            <div class="social-media-icons col-xs-12">
            <ul class="list-inline col-xs-12">
              <a href="#"><i class="fa fa-instagram fa-3x"></i></a>
              <a href="#"><i class="fa fa-twitter-square fa-3x"></i></a>
              <a href="#"><i class="fa fa-facebook-square fa-3x"></i></a>
              <a href="#"><i class="fa fa-youtube-square fa-3x"></i></a>               
            </ul>
          </div>
            <p class="copyright">© 2022 All rights reserved</p>
        </div>
    )
}
export default Footer;