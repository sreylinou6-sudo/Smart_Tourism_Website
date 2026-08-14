import nav from './nav.json';
import footer from './footer.json';
import explore from './explore.json';
import about from './about.json';
import info from './info.json';
import slideshow from './slideshow.json';
import slideData from './slideData.json';
import gallery from './gallery.json';
import galleryData from './placesGallery.json';
import eventData from './eventData.json';
import PrivacyPolicy from './PrivacyPolicy.json';
import TermsAndConditions from './TermsAndConditions.json';
import destinations from './destinations.json';

export default {
  nav,
  footer,
  explore,
  about: about.about,
  info,
  slideshow,
  slideData,
  gallery,
  galleryData,
  eventData,
  PrivacyPolicy,
  TermsAndConditions,
  ...destinations   
};