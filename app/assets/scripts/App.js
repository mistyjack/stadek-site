import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
import $ from 'jquery';
import Carousel from './modules/Carousel';


var mobileMenu = new MobileMenu();
new RevealOnScroll($(".service-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();
var modal = new Modal();
var carousel = new Carousel();