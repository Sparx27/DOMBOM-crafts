import hMenu from "./Hamburger_Menu/h_menu.js";
import { clock, alarm } from "./Clock/clock.js";
import ballMovement from "./Ball/ball.js";
import scrollBtn from "./Scroll_Button/scrollBtn.js";
import darkTheme from "./Dark_Theme/DarkTheme.js";
import resObj from "./Responsive_Objects/responsiveObjects.js";
import webTester from "./Responsive_tester/webTester.js";
import userAgent from "./User_Agent/userAgent.js";
import networkStatus from "./NetWork_Status/networkStatus.js";
import webcam from "./Webcam/webcam.js";
import getGeolocation from "./Geolocation/geo.js";
import searchFilter from "./Search_Filter/searchFilter.js";
import draw from "./Draw/draw.js";
import slider from "./Slider/slider.js";
import scrollSpy from "./Scroll_Spy/scrollSpy.js";
import smartVideo from "./Responsive_Video/responsiveVideo.js";
import formValidators from "./Form_Validations/formValidator.js";
import textSpeaker from "./Text_Speaker/textSpeaker.js";

let d = document;

d.addEventListener("DOMContentLoaded", e => {
  hMenu(".btn-menu", ".panel", ".menu a");

  clock(".clock", ".turnClock", ".shutClock");
  alarm("./assets/alarm.mp3", ".setAlarm", ".shutAlarm");

  scrollBtn(".scroll-btn");

  resObj("gmaps", "(min-width: 800px)", 
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7784.124701553728!2d-56.0570595581281!3d-34.88583394551269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f878402d51445%3A0x769bb7e4cb65aea2!2s!5e0!3m2!1ses-419!2suy!4v1663981608707!5m2!1ses-419!2suy" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '<a href="https://goo.gl/maps/U97PDtP6VKn12j2J7">Ver en Maps</a>',
  );

  resObj("youtube", "(min-width: 800px)", 
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/9j_IXvBt_7E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<a href="https://www.youtube.com/watch?v=9j_IXvBt_7E">Ver Video</a>');

  webTester("wform");

  userAgent("user-device");

  webcam("webcam", ".play-webcam");

  getGeolocation("geo");

  searchFilter(".card-filter", ".card");

  draw(".draw-btn", ".player");

  slider();

  scrollSpy();

  smartVideo();

  formValidators();
});

d.addEventListener("keydown", e => {
  ballMovement(e, ".stage", ".ball");
});

darkTheme(".theme-btn", "dark-mode", "dark-panel");

networkStatus();

textSpeaker();