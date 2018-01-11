import $ from 'jquery'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'

const mobileMenu = new MobileMenu()
new RevealOnScroll($('.feature-item'), '85%')
new RevealOnScroll($('.testimonial'), '75%')
const stickyHeader = new StickyHeader()
