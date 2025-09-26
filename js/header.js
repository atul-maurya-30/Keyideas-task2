//Line 2:15 used in mobile toggler header 
// -- Header (p)
$(document).ready(function () {
  $(window).scroll(function () {
    $alreadyOpened = $(".crossbar__toggler").hasClass("opened");
      if ($(this).scrollTop() > 100 && (!$alreadyOpened) ) {
          $(".scroll_top").addClass('active');
        } else {
          $(".scroll_top").removeClass('active');
      }
  });
  $(".scroll_top").click(function () {
      $("html, body").animate({ scrollTop: 0 }, "400");
      return false;
  });
});

// Line 38:46 used in Desktop Header making it fixed while scrolling -- Header (p)
  /********On scroll header fixed JS Start*********/
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 50) {
    $("header").addClass("fixedHeader");
  } else {
    $("header").removeClass("fixedHeader");
  }
});
(jQuery)

// Career Form File upload custom validation New Form Apply Now V3 & existing
$("#File").change(function() {
  $(".wpcf7-not-valid-tip").html('');
  var filesize=$(this)[0].files[0].size;
  if(filesize>'4194304'){
     $(".filegroup >.wpcf7-not-valid-tip").remove();
    return true;
  }else{
    return false;
  }
});
const target = document.querySelector('.filegroup');
if (target) {
  const observer = new MutationObserver(() => {
    $('#File').next('.wpcf7-not-valid-tip:contains("The field is required.")').hide();
  });
  observer.observe(target, { childList: true, subtree: true });
}

// New form Apply Now V3
var wpcf7Elm = document.querySelector( '.wpcf7' );
if (wpcf7Elm) {
  wpcf7Elm.addEventListener( 'wpcf7submit', function( event ) {
    if ($('#File').get(0) && $('#File').get(0).files.length === 0) {
      $(".filegroup .wpcf7-not-valid-tip").remove();
      $(".filegroup").append('<span class="wpcf7-not-valid-tip" aria-hidden="true">The field is required.</span>');
    }
  }, false );
}

// New form Apply Now V3
document.addEventListener("DOMContentLoaded", function () {
const applyForm = document.querySelector('.apply-job.apply-jobform');
if(applyForm){
document.addEventListener("DOMContentLoaded", function() {
  var selectElement = document.getElementById("hearaboutus");
  // Find the option with a blank value and set its text content
  var blankOption = selectElement.querySelector('option[value=""]');
  if (blankOption) {
      blankOption.textContent = "How Did You Hear About Us?*"; // Add your desired text here
  }
});
}
});

// New form Apply Now V3
$(document).ready(function () {
  $(".submit-btn").click(function(){
    var set_post_title = $('#set-post-title').val();
    var set_referer_page = $('#set-referer-page').val();
    $("input[name=post-title]").val(set_post_title);
    $("input[name=referer-page]").val(set_referer_page);
  });

  $('#PhoneNumber').keydown(function(e) {
    if (event.key === ' ') {
        return false;
    }      
  });

  $('#PhoneNumber').on('keypress', function(e) {
    //if the letter is not digit then display error and don't type anything
    if (e.which != 8 && e.which != 0 && (e.which < 43 || e.which > 57)) {
        return false;
    }
  });
});

/* -----CHECKOUT-----*/

//Double Submission on Contact Form 7! Temporarily disable CF7 Button on Submission
jQuery(document).ready(function($) {
  $(".wpcf7").on('submit.wpcf', function(){
    if ($(".wpcf7-spinner").is(":visible")){
      $('input[type="submit"]').attr('disabled', 'disabled');
      setTimeout(function() {
        $('input[type="submit"]').removeAttr('disabled');
      },3000);
    }
  });
});
  
// SEO pricing
// Used DM Page pricing table ( need to discuss https://www.keyideasinfotech.com/best-seo-packages/)  (seprate -- can be added in tech js)
// Function to handle button click
function handleButtonClick(button) {
  // Remove the 'active' class from all plan child divs
  planChildren.forEach(planChild => {
    planChild.classList.remove("active");
  });

  // Add the 'active' class to the corresponding plan child div
  const planChildId = button.id + "_child";
  const targetPlanChild = document.getElementById(planChildId);
  if (targetPlanChild) {
    targetPlanChild.classList.add("active");
  }
}

$(".mob-btn-swap .btn").click(function() {
  $('button').removeClass('active-in');
  $(this).addClass('active-in');
});
// Get all the buttons and plan child divs
const buttons = document.querySelectorAll(".btn");
const planChildren = document.querySelectorAll(".tab-plans");

// Check the window width on page load
if (window.innerWidth < 1180) {
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      handleButtonClick(button);
    });
  });
}

// Listen for window resize
window.addEventListener("resize", () => {
  // Check the window width when it's resized
  if (window.innerWidth < 1180) {
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        handleButtonClick(button);
      });
    });
  } else {
    // Remove event listeners if the width is greater or equal to 1180
    buttons.forEach(button => {
      button.removeEventListener("click", () => {
        handleButtonClick(button);
      });
    });
  }
});

$(document).ready(function() {
  // Add a click event to the "Show more" button
  $('.show-more').click(function() {
    // Toggle the visibility of the content
    $('.hide-mob').slideToggle();

    // Change the text of the button
    if ($(this).text() === 'Show more') {
      $(this).text('Show less');
    } else {
      $(this).text('Show more');
      $('html, body').animate({
        scrollTop: 1200
      }, 100);
    }
  });
});

// Used in (https://www.keyideasinfotech.com/portfolio/ui-ux-gallery/)
$(document).ready(function() {
  $(".main-wrapper-box").click(function() {
    $(".scroll_top").removeClass('active');
  });
  $('.modal-footer .next-modal, .modal-footer .prev-modal').click(function() {
    setTimeout(function() {
      $(".scroll_top").removeClass('active');
    }, 1000); // Adjust delay if needed
  });
});

const ourWorks = document.querySelector('.our--works');
if(ourWorks){
  $(document).ready(function () {
    $(".modal-footer").each(function () {
        let modalFooter = $(this);
        let popups = modalFooter.siblings(".popup-wrapper");
        let currentIndex = 0;

        // Initially hide all except the first
        popups.hide().eq(currentIndex).show();

        modalFooter.find(".next-slide").click(function () {
            popups.eq(currentIndex).hide();
            currentIndex = (currentIndex + 1) % popups.length; // Loop forward
            popups.eq(currentIndex).show();
        });

        modalFooter.find(".prev-slide").click(function () {
            popups.eq(currentIndex).hide();
            currentIndex = (currentIndex - 1 + popups.length) % popups.length; // Loop backward
            popups.eq(currentIndex).show();
        });
    });
});

}



// ----------------------------- Header new JS starts ---------------------------------------------------//

if (document.documentElement.clientWidth > 1299) {

  $(document).ready(function(){
      $(".comp__menu").mouseenter(function(){
          $(this).addClass("active");
          $(this).find(".down-main-icon").addClass("rotate");
      });
      $(".comp__menu").mouseleave(function(){
          $(this).removeClass("active");
          $(this).find(".down-main-icon").removeClass("rotate");
      });
      $(".casestudies__menu").mouseenter(function(){
          $(this).addClass("active");
          $(this).find(".down-main-icon").addClass("rotate");
      });
      $(".casestudies__menu").mouseleave(function(){
          $(this).removeClass("active");
          $(this).find(".down-main-icon").removeClass("rotate");
      });
      $(".industries__menu").mouseenter(function(){
          $(this).addClass("active");
          $(this).find(".down-main-icon").addClass("rotate");
      });
      $(".industries__menu").mouseleave(function(){
          $(this).removeClass("active");
          $(this).find(".down-main-icon").removeClass("rotate");
      });
    });
   
  } 


  if (document.documentElement.clientWidth > 1023 && document.documentElement.clientWidth <= 1299) {

    // Click event for document to detect clicks outside menu items
    $(document).click(function() {
      $(".comp__menu, .casestudies__menu, .industries__menu").removeClass("active");
      $(".comp__menu .down-main-icon, .casestudies__menu .down-main-icon, .industries__menu .down-main-icon").removeClass("rotate");
    });

    // Prevent click events from closing the menu if clicking inside the menu
    $(".comp__menu, .casestudies__menu, .industries__menu").click(function(event) {
      event.stopPropagation();
    });

    $(".down-main-icon").click(function (event) {
      event.preventDefault();
    });

    $(".comp__menu").click(function(){
      $(".casestudies__menu, .industries__menu").removeClass("active");
      $(".casestudies__menu .down-main-icon, .industries__menu .down-main-icon").removeClass("rotate");
      $(this).toggleClass("active");
      $(this).find(".down-main-icon").toggleClass("rotate");
    });
    $(".casestudies__menu").click(function(){
      $(".comp__menu, .industries__menu").removeClass("active");
      $(".comp__menu .down-main-icon, .industries__menu .down-main-icon").removeClass("rotate");
      $(this).toggleClass("active");
      $(this).find(".down-main-icon").toggleClass("rotate");
    });

    $(".industries__menu").click(function(){
      $(".casestudies__menu, .comp__menu").removeClass("active");
      $(".casestudies__menu .down-main-icon, .comp__menu .down-main-icon").removeClass("rotate");
      $(this).toggleClass("active");
      $(this).find(".down-main-icon").toggleClass("rotate");
    });
  }
  
  
  
  if (document.documentElement.clientWidth <= 1023) {
  
      $(".crossbar__toggler").click(function () {
          $("#company-menu, #case_study_menu, #industry_menu").removeClass("show_main_ul");
          $(".plus_minus_header").text("+");
          $(".sub-dropdown-list").removeClass("show_sub_ul");
          $(".inverted-v").removeClass("rotate");
          $(this).toggleClass("opened");
          $(".scroll_top").removeClass("active");
          $('body').toggleClass('no-scroll');
      });
  
      $("#companyDropdown__new").click(function () {
          $("#case_study_menu, #industry_menu").removeClass("show_main_ul");
          $("#company-menu").toggleClass("show_main_ul");
      });
      $("#workDropdown__new").click(function () {
          $("#company-menu, #industry_menu").removeClass("show_main_ul");
          $("#case_study_menu").toggleClass("show_main_ul");
      });
      $("#resourcesDropdown__new").click(function () {
          $("#company-menu, #case_study_menu").removeClass("show_main_ul");
          $("#industry_menu").toggleClass("show_main_ul");
      });
      
      $(".inverted-v").click(function () {
          var $this = $(this);
          var alreadyRotated = $this.hasClass("rotate");
          $(".sub-dropdown-list").removeClass("show_sub_ul");
          $(".inverted-v").removeClass("rotate");
          if (!alreadyRotated) {
              $this.addClass("rotate");
              $this.closest(".sub_main_link_wrapper").next(".sub-dropdown-list").addClass("show_sub_ul");
          }
      });
      $(document).ready(function () {
          $(".plus_minus_header").click(function(){
              $(".plus_minus_header").not(this).text("+");
              var currentText = $(this).text();
              $(this).text(currentText === "+" ? "-" : "+");
          });
      });
      $(document).ready(function() {
          $('.crossbar__toggler').prop('disabled', true);
      });
      $(window).on('load', function() {
          $('.crossbar__toggler').prop('disabled', false);
      });
      
         
  }
  
  

// ------------------------------Header new JS ends ------------------------------------------------------//

// --- Service shortcode tabs (used in blog(https://www.keyideasinfotech.com/blog/impact-of-smartphone-on-society/) and Homepage)
function removeActiveClasses(sections, buttons) {
  sections.forEach(section => {
    section.classList.remove('active');
  });
  buttons.forEach(button => {
    button.classList.remove('active');
  });
}
const scBtn = document.querySelectorAll(".sc-tabs-ele")
const scDisplay = document.querySelectorAll('.services-sc');
// console.log(cservicesBtn)
const tabplay = () => {
if (window.innerWidth > 767) {
scBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    // console.log(index);
    removeActiveClasses(scDisplay, scBtn);
    btn.classList.add('active');
    scDisplay[index].classList.add('active');
  });
});
}}
// Initial setup
tabplay();
window.addEventListener("resize", tabplay);


$(".btn-new").click(function () {
  var $this = $(this);
  var alreadyOpened = $this.hasClass("open");
  $(".btn-new").removeClass("open");
  if (!alreadyOpened) {
      $this.addClass("open");
  }
});
// --------  Service shortcode tabs end -----------

//--------------------------- Jewelry Integration Tabs (seprate) ---------------------------
const integrationBtn = document.querySelectorAll(".integration-tabs-ele")
  if(integrationBtn){
  function removeActiveClasses(sections, buttons) {
    sections.forEach(section => {
      section.classList.remove('active');
    });
    buttons.forEach(button => {
      button.classList.remove('active');
    });
  }
  const integrationBtn = document.querySelectorAll(".integration-tabs-ele")
  const integrationDisplay = document.querySelectorAll('.services-integration');
  // console.log(cservicesBtn)
  const tabsplay = () => {
  if (window.innerWidth > 767) {
    integrationBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      // console.log(index);
      removeActiveClasses(integrationDisplay, integrationBtn);
      btn.classList.add('active');
      integrationDisplay[index].classList.add('active');
    });
  });
  }}
  // Initial setup
  tabsplay();
  window.addEventListener("resize", tabsplay);


  $(".btn-new-integration").click(function () {
    var $this = $(this);
    var alreadyOpened = $this.hasClass("open");
    $(".btn-new-integration").removeClass("open");
    if (!alreadyOpened) {
        $this.addClass("open");
    }
  });
}
//--------------------------- Jewelry Integration Tabs end (seprate) ---------------------------

// ------ Industry shortcode tabs (used in blog(https://www.keyideasinfotech.com/blog/impact-of-smartphone-on-society/) and Homepage
const scShowmore = document.querySelector('.sc-box-wrapper');
if(scShowmore != null){
const scShowMoreBtn = scShowmore.querySelector('.industry-sm-sl');
const scShowMoreBtnText = scShowmore.querySelector('.industry-sm-sl-text');
const scHomeWhyWeStandOut = document.getElementById('blog-article-page');
const scMobHiddenElements = scShowmore.querySelectorAll('.industry-mob')

if(scShowMoreBtn)
{scShowMoreBtn.addEventListener('click', () => {
  scShowmore.classList.toggle('active');
    if (scShowmore.classList.contains('active')) {
      scMobHiddenElements.forEach(element => {
            element.classList.add('active');
        });
        scShowMoreBtnText.innerHTML = 'Show Less';
        scShowMoreBtn.style.gridRow = "11";
        scShowMoreBtn.style.gridColumn = "2";
        scHomeWhyWeStandOut.style.gridRow = "12";
    } else {
      scMobHiddenElements.forEach(element => {
            element.classList.remove('active');
        });
        scShowMoreBtnText.innerHTML = 'Show More';
        scShowMoreBtn.style.gridRow = "3";
        scShowMoreBtn.style.gridColumn = "2";
        scHomeWhyWeStandOut.style.gridRow = "4";
    }
})};
}
// ------ Industry shortcode tabs end (used in blog(https://www.keyideasinfotech.com/blog/impact-of-smartphone-on-society/) and Homepage

// ----------   New Faq Js (common) -----------
$(document).ready(function(){
  $("#reviews-faq").click(function(){
    $(this).toggleClass("active");
    $(this).next('#reviews-faq-show').toggleClass('d-none');
  });
  var images = $('.jewelry-pillar-image-container img');
  var currentIndex = 0;
  function showNextImage() {
      images.eq(currentIndex).removeClass('active');
      currentIndex = (currentIndex + 1) % images.length;
      images.eq(currentIndex).addClass('active');
  }
  setInterval(showNextImage, 3000);
})
$(document).ready(function() {
  // Check if screen width is greater than 992px
  if ($(window).width() > 992) {
      // Get the height of the existing element, including margin
      var elementHeight = $('.faq-heading-box1 h2').outerHeight(true); // `true` includes margin

      // Assign this height to a new element
      $('.faq-heading-box2').height(elementHeight);
  }
 //store the last selected box index
 var lastSelectedBox = null;
 // Function to get a random number different
 function getRandomBox() {
   var randomBox;
   do {
     randomBox = Math.floor(Math.random() * 4) + 1; // Random number between 1 and 4
   } while (randomBox === lastSelectedBox); // Regenerate 
   lastSelectedBox = randomBox; // Update last selected box
   return randomBox;
 }
 var randomBox = getRandomBox();
 $('.faq-review-content').hide();
 $('.faq-review-content').eq(randomBox - 1).css('display', 'block');
});
// ----------   New Faq Js end -----------

// ----------------------- front-page tech-logo slider (seprate technology) -------------------------
const logoSlider = document.querySelector('.logo-slider');
if(logoSlider){
$('.logo-slider').owlCarousel({
  margin:30,
  loop:true,
  dots:false,
  autoplay:true,
  drag: false,          
  touchDrag: false,     
  mouseDrag: false,     
  nav: false,        
  slideTransition:'linear',
  autoplayTimeout:2000,
  autoplaySpeed:2000,
  responsive: {
    0: { 
      items: 2.4
    },
    768:{
      items: 4,
    },
    1024: { 
      items: 5
    },
    1200: { 
      items: 6.59 ,
      margin:0,
    },
    1500: { 
      items: 7 
    },
    1600: { 
      items: 8.6
    }
  }
})};
// ----------------------- front-page tech-logo end slider (seprate) -------------------------

// ------------------  Jewelry Client Logo Slider (shortcode)-------------------------
const clientLogoSlider = document.querySelector('.jewelry-client-slider');
if(clientLogoSlider){
$('.jewelry-client-slider').owlCarousel({
  margin:0,
  loop:true,
  dots:false,
  autoplay:true,
  drag: false,         
  touchDrag: false,     
  mouseDrag: false,     
  nav: false,        
  slideTransition:'linear',
  autoplayTimeout:2000,
  autoplaySpeed:2000,
  responsive: {
    390: { 
      items: 1.7
    },
    400: { 
      items: 2
    },
    768:{
      items: 3.3,
    },
    820:{
      items: 3.6,
    },
    1024: { 
      items: 4.5 
    },
    1180: { 
      items: 4.9 
    },
    1200: { 
      items: 5.5,
    },
    1400: { 
      items: 3.8,
    },
    1600: { 
      items: 4.2
    },
    1850: { 
      items: 5
    }
  }
})};

const clientLogoSliderrtl = document.querySelector('.jewelry-client-slider-reverse');
if(clientLogoSliderrtl){
$('.jewelry-client-slider-reverse').owlCarousel({
  margin:0,
  loop:true,
  dots:false,
  rtl:true,
  autoplay:true,
  drag: false,          
  touchDrag: false,     
  mouseDrag: false,     
  nav: false,        
  slideTransition:'linear',
  autoplayTimeout:2000,
  autoplaySpeed:2000,
  responsive: {
    390: { 
      items: 1.7
    },
    400: { 
      items: 2
    },
    768:{
      items: 3.3,
    },
    820:{
      items: 3.6,
    },
    1024: { 
      items: 4.5 
    },
    1180: { 
      items: 4.9 
    },
    1200: { 
      items: 5.7,
    },
    1600: { 
      items: 8
    }
  }
})};
// ------------------  Jewelry Client Logo Slider end -------------------------

// ------------------  Jewelry Page & Shopify Page Mobile version Slider -------------------------
function configureCarousel(className, loop, margin, nav, dots, items, slideBy){
  $(className).owlCarousel({
      loop:loop,
      margin:margin,
      nav:nav,
      dots:dots,
      rewind:true,
      items:items,
      slideBy:slideBy,
  })
}

const enhanceSalesWrapper = document.querySelector('.enhance_sales_wrapper');
if (document.documentElement.clientWidth <= 767 && enhanceSalesWrapper) {
  configureCarousel('.enhance_sales_wrapper', true, 10, false, false, 1.2, 1.2);
}
// ------------------  Jewelry Page & Shopify Page Mobile version Slider end -------------------------

// -------  Achievement Logo Slider (common)-----------
const achievementLogoSlider = document.querySelector('.achivement-card-wrapper');
if(achievementLogoSlider){
$('.achivement-card-wrapper').owlCarousel({
  margin:30,
  loop:true,
  dots:false,
  autoplay:true,
  drag: false,          
  touchDrag: false,     
  mouseDrag: false,    
  nav: false,        
  slideTransition:'linear',
  autoplayTimeout:5000,
  autoplaySpeed:5000,
  responsive: {
    360: { 
      items: 1.2
    },
    390: { 
      items: 1.27 
    },
    400: { 
      items: 1.4
    },
    768:{
      items: 2.4,
    },
    820:{
      items: 2.5,
    },
    1024: { 
      items: 3.4 
    },
    1180: { 
      items: 3.5,
    },
    1200: { 
      items: 4.2,
    },
    1400: { 
      items: 4.9, 
    },
    1600: { 
      items: 5.9
    }
  }
})};
const achievementLogoSliderRtl = document.querySelector('.achivement-card-wrapper-reverse');
if(achievementLogoSliderRtl){
$('.achivement-card-wrapper-reverse').owlCarousel({
  margin:30,
  loop:true,
  dots:false,
  rtl:true,
  autoplay:true,
  drag: false,          
  touchDrag: false,     
  mouseDrag: false,     
  nav: false,        
  slideTransition:'linear',
  autoplayTimeout:5500,
  autoplaySpeed:5500,
  responsive: {
    360: { 
      items: 1 
    },
    390: { 
      items: 1.2
    },
    400: { 
      items: 1.4
    },
    768:{
      items: 2.4,
    },
    820:{
      items: 2.5,
    },
    1024: { 
      items: 3.4 
    },
    1180: { 
      items: 3.5,
    },
    1200: { 
      items: 4.2,
    },
    1400: { 
      items: 4.9,
    },
    1600: { 
      items: 5.9
    }
  }
})};
// -------  Achievement Logo Slider end (common)-----------

// --- Testimonial client Logo Slider(seprate)  used in testimonial listing  page-----
const testimonialLogoSlider = document.querySelector('.testimonial-animation-slide');
if(testimonialLogoSlider){
$('.testimonial-animation-slide').owlCarousel({
  margin:15,
  loop:true,
  dots:false,
  autoplay:true,
  drag: false,          
  touchDrag: false,     
  mouseDrag: false,     
  nav: false,        
  slideTransition:'linear',
  autoplayTimeout:4000,
  autoplaySpeed:4000,
  responsive: {
    360: { 
      items: 2.5
    },
    400: { 
      items: 3 
    },
    768:{
      items: 3.7,
    },
    820:{
      items: 3.8,
    },
    1024: { 
      items: 4.8
    },
    1180: { 
      items: 5.5,
    },
    1200: { 
      items: 6,
    },
    1400: { 
      items: 7, 
    },
    1600: { 
      items: 8
    }
  }
})};
const testimonialLogoSliderRtl = document.querySelector('.testimonial-animation-slide-rtl');
if(testimonialLogoSliderRtl){
$('.testimonial-animation-slide-rtl').owlCarousel({
  margin:15,
  loop:true,
  dots:false,
  rtl:true,
  autoplay:true,
  drag: false,          
  touchDrag: false,     
  mouseDrag: false,     
  nav: false,        
  slideTransition:'linear',
  autoplayTimeout:4000,
  autoplaySpeed:4000,
  responsive: {
    360: { 
      items: 2.5
    },
    400: { 
      items: 3
    },
    768:{
      items: 3.7,
    },
    820:{
      items: 3.8,
    },
    1024: { 
      items: 4.8 
    },
    1180: { 
      items: 5.5,
    },
    1200: { 
      items: 6,
    },
    1400: { 
      items: 7, 
    },
    1600: { 
      items: 8 
    }
  }
})};
$('.testimonial-animation-slide-rtl, .testimonial-animation-slide').trigger('play.owl.autoplay',[2000]);
function setSpeed(){
    $('.testimonial-animation-slide-rtl, .testimonial-animation-slide').trigger('play.owl.autoplay',[4000]);
}
setTimeout(setSpeed, 1000);
// --- Testimonial client Logo Slider end(seprate) -----

// --- Social Impect custom Slider(seprate) -----
$(".csr-arw").click(function () {
  var isSecondArrow = $(this).attr('id') === 'second-csr'; 
  var index = isSecondArrow ? 1 : 0;
  $(".partner-info-block, .partner-image-item, .csr-arw").removeClass("active");
  $(".partner-info-block").eq(index).addClass("active");
  $(".partner-image-item").eq(index).addClass("active");
  $(".csr-arw").eq(index).addClass("active");
});
// --- Social Impect custom Slider end(seprate) -----


//  --- testimonial custom slider js(seprate) ----
let counterTestimonial = 0;
let nextTestimonial=document.getElementById('prev-testimonial');
let prevTestimonial=document.getElementById('next-testimonial');
let currentTestimonial = document.querySelectorAll('.slider-box');
let Testimonialbtn = document.querySelectorAll('.testimonial-dots button');
function removeActiveTestimonial(ele) {
  ele.forEach(section => {
    section.classList.remove('active');
  });
}
function showTestimonial(activeIndex) {
  removeActiveTestimonial(currentTestimonial);
  removeActiveTestimonial(Testimonialbtn);
  currentTestimonial[activeIndex].classList.add('active');
  Testimonialbtn[activeIndex].classList.add('active');
}
nextTestimonial?.addEventListener('click', function () {
  counterTestimonial++;
  if (counterTestimonial >= currentTestimonial.length) {
    counterTestimonial = 0;
  }
  showTestimonial(counterTestimonial);
});

prevTestimonial?.addEventListener('click', function () {
  counterTestimonial--;
  if (counterTestimonial < 0) {
    counterTestimonial = currentTestimonial.length - 1;
  }
  showTestimonial(counterTestimonial);
});
if (window.matchMedia("(max-width: 1180px)").matches) {
  $('.slider-wrapper').on('touchstart', function (e) {
    var startX = e.originalEvent.touches[0].clientX;
    
    $(document).on('touchend', function (e) {
        var endX = e.originalEvent.changedTouches[0].clientX;
        
        if (startX > endX + 10) {
          counterTestimonial++;
          if (counterTestimonial >= currentTestimonial.length) {
            counterTestimonial = 0;
          }
          showTestimonial(counterTestimonial);
          
        } else if (startX < endX - 10) {
          counterTestimonial--;
          if (counterTestimonial < 0) {
            counterTestimonial = currentTestimonial.length - 1;
          }
        showTestimonial(counterTestimonial);
        }
        $(document).off('touchend'); // Clean up after touchend
    });
  })};
//  ----------------------------- testimonial custome slider end js ---------------------------


// -------------------------------- Client Review shortcode slider(common)  ------------------------------------ 
const clientReviewsSection = document.querySelector('.client-reviews-section');
if(clientReviewsSection){
let counter = 0;
let nextClient=document.getElementById('next-client');
let prevClient=document.getElementById('prev-client');
let clientName = document.querySelectorAll('.client-info-name');
let clientAdd = document.querySelectorAll('.client-info-add');
let clientProfile = document.querySelectorAll('.client-avatar');
let clienttext = document.querySelectorAll('.client-reviews-para');
let clientbtn = document.querySelectorAll('.dot-icon button');
let clientRating = document.querySelectorAll('.client-rating-block');
function removeActiveClient(ele) {
  ele.forEach(section => {
    section.classList.remove('active');
    section.style.zIndex = '';
  });
}

function showClient(review) {
  removeActiveClient(clientName);
  removeActiveClient(clientAdd);
  removeActiveClient(clientProfile);
  removeActiveClient(clientbtn);
  removeActiveClient(clienttext);
  removeActiveClient(clientRating);

  // Set z-index for client profiles
  clientProfile.forEach((section, index) => {
    if (index === review) {
      // Active element gets the highest z-index
      section.style.zIndex = 20;
    } else if (
      index === review - 1 || 
      (review === 0 && index === clientProfile.length - 1) || 
      index === review + 1 || 
      (review === clientProfile.length - 1 && index === 0)
    ) {
      // Adjacent elements (directly left or right) get the second highest z-index
      section.style.zIndex = 19;
    } else {
      // Remaining elements get progressively lower z-index
      section.style.zIndex = 10 - Math.abs(index - review);
    }
  });

  // Special case:
  if (review === clientProfile.length - 1) {
    clientProfile[0].style.zIndex = '';
  }
  if (review === 0) {
    clientProfile[clientProfile.length - 1].style.zIndex = '';
  }

  // Add active class to relevant elements
  clientName[review].classList.add('active');
  clientAdd[review].classList.add('active');
  clientProfile[review].classList.add('active');
  clienttext[review].classList.add('active');
  clientbtn[review].classList.add('active');
  clientRating[review].classList.add('active');
}

// Event listeners for navigation
nextClient.addEventListener('click', function () {
  counter++;
  if (counter >= clientName.length) {
    counter = 0;
  }
  showClient(counter);
});

prevClient.addEventListener('click', function () {
  counter--;
  if (counter < 0) {
    counter = clientName.length - 1;
  }
  showClient(counter);
});
if (window.matchMedia("(max-width: 992px)").matches) {
$('.reviews-box-wrapper').on('touchstart', function (e) {
  var startX = e.originalEvent.touches[0].clientX;
  
  $(document).on('touchend', function (e) {
      var endX = e.originalEvent.changedTouches[0].clientX;
      
      if (startX > endX + 10) {
        counter++;
        if (counter >= clientName.length) {
          counter = 0;
        }
        showClient(counter);
        
      } else if (startX < endX - 10) {
        counter--;
        if (counter < 0) {
          counter = clientName.length - 1;
        }
        showClient(counter);
      }
      
      $(document).off('touchend'); // Clean up after touchend
  });
})};
showClient(counter);
}
// ---------------------------------- Client Review shortcode slider end -------------------------------- 
