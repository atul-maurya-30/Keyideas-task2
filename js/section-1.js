document.addEventListener("DOMContentLoaded", () => {
  const BannerAnimation = document.querySelector(".banner-animation");
  let gridAnimation, gridAnimationItems;
  if (BannerAnimation) {
    gridAnimation = BannerAnimation.querySelector(".grid-animation");
    gridAnimationItems = BannerAnimation.querySelectorAll(".grid-case");
  }
  // gsap for home banner animation

  gsap.registerPlugin(Flip);
  if (gridAnimationItems) {
    gridAnimationItems.forEach((box, index) => {
      let row = Math.floor(index / 4) + 1;
      let col = (index % 4) + 1;
      box.style.gridRow = row;
      box.style.gridColumn = col;
    });
  }

  const msImage = `
    <div class="ms-card">
    <div class="top-row">
      <img class="grid-ms-image img-fluid" alt="microsoft logo" width="40" height="40" src="/Images/banner/microsoft.webp">
      <div class="text-block">
        <div class="microsoft">Microsoft</div>
        <div class="partner">Solutions Partner</div>
      </div>
    </div>
    <div class="bottom-text">Microsoft Cloud</div>
  </div>
`;

  const transformContent = `
    <div>
        <span class="text-size-transform">Transform</span>
    </div>
`;

  const attractContent = `
    <div>
        <span class="text-size-transform">Attract</span>
    </div>
`;

  const growthContent = `
    <div>
        <span class="text-size-transform">Growth</span>
    </div>
`;

  const convertContent = `
    <div>
        <span class="text-size-transform">Convert</span>
    </div>
`;

  const strategyContent = `
    <div>
        <span class="text-size-transform">Strategy</span>
    </div>
`;

  const clutchB2B = `
    <div class="grid-clutch-cont">
        <img class="grid-clutch img-fluid" alt="clutch logo" width="100" height="100" src="/Images/banner/clutch1.webp">
        <div class="text-center">
            <span class="text-white text-h3-size">Top B2B</span>
            <span class="text-size-para">Providers in the Indian Emerging Tech Market for 2021</span>
        </div>
    </div>
`;

  const clutchShopify = `
    <div class="grid-clutch-cont">
        <img class="grid-good-firms img-fluid" alt="good firms logo" width="100" height="100" src="/Images/banner/goodfirms.webp">
        <div class="text-center">
            <span class="text-white text-h3-size">Top Shopify</span>
            <span class="text-size-para">Development Companies in 2019</span>
        </div>
    </div>
`;

  const clutch12 = `
    <div class="grid-clutch-cont">
        <img class="grid-clutch img-fluid" alt="clutch logo" width="100" height="100" src="/Images/banner/clutch1.webp">
        <div class="text-center">
            <span class="text-white text-h3-size">Top 12</span>
            <span class="text-size-para">Out of 400 top Mobile App Developers in India, 2020</span>
        </div>
    </div>
`;

  const clutch1000 = `
    <div class="grid-clutch-cont">
        <img class="grid-clutch img-fluid" alt="clutch logo" width="100" height="100" src="/Images/banner/clutch1.webp">
        <div class="text-center">
            <span class="text-white text-h3-size">Top 1000</span>
            <span class="text-size-para">B2B Companies 2018</span>
        </div>
    </div>
`;

  const crowd1 = `
    <div class="grid-clutch-cont">
        <img class="grid-crowd-rew img-fluid" height="100" width="100" alt="crowd review logo" src="/Images/banner/crowd.webp">
        <div class="text-center">
            <span class="text-white text-h3-size">#1</span>
            <span class="text-size-para">ASP.NET Development Company</span>
        </div>
    </div>
`;

  const crowdTop3 = `
    <div class="grid-clutch-cont">
        <img class="grid-crowd-rew img-fluid" height="100" width="100" alt="crowd review logo" src="/Images/banner/crowd.webp">
        <div class="text-center">
            <span class="text-white text-h3-size">Top 3</span>
            <span class="text-size-para">E-Commerce Development Company</span>
        </div>
    </div>
`;

  const crowdTop10 = `
    <div class="grid-clutch-cont">
        <img class="grid-crowd-rew img-fluid" height="100" width="100" alt="crowd review logo" src="/Images/banner/crowd.webp">
        <div class="text-center">
            <span class="text-white text-h3-size">Top 10</span>
            <span class="text-size-para">Web Development Company</span>
        </div>
    </div>
`;

  const oneChangeTime = 1;

  let one;
  let two;
  let three;
  let four;
  let six;
  let seven;
  let eight;
  let eleven;
  let twelve;

  let tempone,
    tempTwo,
    tempthree,
    tempfour,
    tempsix,
    tempseven,
    tempeight,
    tempeleven,
    temptwelve;

  if (BannerAnimation) {
    tempone = BannerAnimation.querySelector(".temp-one");
    tempone.style.gridColumn = 1;
    tempone.style.gridRow = 1;
    one = BannerAnimation.querySelector(".one");

    tempTwo = BannerAnimation.querySelector(".temp-two");
    tempTwo.style.gridColumn = 2;
    tempTwo.style.gridRow = 1;
    two = BannerAnimation.querySelector(".two");

    tempthree = BannerAnimation.querySelector(".temp-three");
    tempthree.style.gridColumn = 3;
    tempthree.style.gridRow = 1;
    three = BannerAnimation.querySelector(".three");

    tempfour = BannerAnimation.querySelector(".temp-four");
    tempfour.style.gridColumn = 4;
    tempfour.style.gridRow = 1;
    four = BannerAnimation.querySelector(".four");

    tempsix = BannerAnimation.querySelector(".temp-six");
    tempsix.style.gridColumn = 2;
    tempsix.style.gridRow = 2;
    six = BannerAnimation.querySelector(".six");

    tempseven = BannerAnimation.querySelector(".temp-seven");
    tempseven.style.gridColumn = 3;
    tempseven.style.gridRow = 2;
    seven = BannerAnimation.querySelector(".seven");

    tempeight = BannerAnimation.querySelector(".temp-eight");
    tempeight.style.gridColumn = 4;
    tempeight.style.gridRow = 2;
    eight = BannerAnimation.querySelector(".eight");

    tempeleven = BannerAnimation.querySelector(".temp-eleven");
    tempeleven.style.gridColumn = 3;
    tempeleven.style.gridRow = 3;
    eleven = BannerAnimation.querySelector(".eleven");

    temptwelve = BannerAnimation.querySelector(".temp-twelve");
    temptwelve.style.gridColumn = 4;
    temptwelve.style.gridRow = 3;
    twelve = BannerAnimation.querySelector(".twelve");
  }

  function assignContentForStageOne() {
    one.innerHTML = transformContent;
    two.innerHTML = clutchB2B;
    three.innerHTML = convertContent;
    four.innerHTML = clutchShopify;
    six.innerHTML = attractContent;
    seven.innerHTML = msImage;
    eight.innerHTML = growthContent;
    eleven.innerHTML = strategyContent;
    twelve.innerHTML = clutch12;
  }

  function stageOne() {
    // one.style.opacity = 0;
    let state1 = Flip.getState(".one", {
      props: "opacity,borderRadius,backgroundColor",
    }); //change color from light to medium
    one.classList.remove("grid-light-purple");
    one.classList.add("grid-medium-purple");
    // one.style.opacity = 1;

    two.style.gridRow = 2;
    two.style.borderRadius = "0px 0px 0px 32px";
    two.classList.remove("grid-medium-purple");
    two.classList.add("grid-dark-purple");
    two.style.opacity = 0;
    tempTwo.innerHTML = clutchB2B;
    two.innerHTML = crowd1;
    let state2 = Flip.getState(".two", {
      props: "opacity,borderRadius,backgroundColor",
    }); //change position from row 2 and col 2 to row 1 col 2, and from medium to dark
    two.style.borderRadius = "0px 0px 0px 0px";
    two.style.opacity = 1;
    two.style.gridRow = 1;

    let state3 = Flip.getState(".three", {
      props: "opacity,borderRadius,backgroundColor",
    }); //change color from dark to light
    three.classList.remove("grid-dark-purple");
    three.classList.add("grid-light-purple");

    four.style.gridColumn = 3;
    four.classList.remove("grid-medium-purple");
    four.classList.add("grid-dark-purple");
    four.style.opacity = 0;
    tempfour.innerHTML = clutchShopify;
    four.innerHTML = crowdTop10;
    let state4 = Flip.getState(".four", {
      props: "opacity,borderRadius,backgroundColor",
    }); //change color from light to medium
    four.style.gridColumn = 4;
    four.style.opacity = 1;

    // six.style.borderRadius = '0px 0px 0px 96px';
    tempsix.style.borderRadius = "0px 0px 0px 32px";
    let state6 = Flip.getState(".six", {
      props: "opacity,borderRadius,backgroundColor",
    }); //change color from dark to light and border radius from 96 to 32
    six.style.borderRadius = "0px 0px 0px 32px";
    six.classList.remove("grid-dark-purple");
    six.classList.add("grid-light-purple");

    seven.style.gridColumn = 4;
    seven.style.gridRow = 1;
    seven.classList.remove("grid-light-purple");
    seven.classList.add("grid-dark-purple");
    seven.style.opacity = 0;
    tempseven.innerHTML = msImage;
    seven.innerHTML = crowdTop3;
    let state7 = Flip.getState(".seven", {
      props: "opacity,borderRadius,backgroundColor",
    }); //change color from light to dark, position from row 1 and col 3 to row 2 col 3
    seven.style.gridColumn = 3;
    seven.style.gridRow = 2;
    seven.style.opacity = 1;

    let state8 = Flip.getState(".eight", {
      props: "opacity,borderRadius,backgroundColor",
    }); //change color from dark to light
    eight.classList.remove("grid-dark-purple");
    eight.classList.add("grid-light-purple");

    let state11 = Flip.getState(".eleven", {
      props: "opacity,borderRadius,backgroundColor",
    }); //change color from dark to light
    eleven.classList.remove("grid-dark-purple");
    eleven.classList.add("grid-light-purple");

    twelve.style.opacity = 0;
    twelve.innerHTML = clutch1000;
    let state12 = Flip.getState(".twelve", {
      props: "opacity,borderRadius,backgroundColor",
    }); //change content and opacity from 0 to 1
    twelve.classList.remove("grid-medium-purple");
    twelve.classList.add("grid-dark-purple");
    twelve.style.opacity = 1;

    Flip.from(state1, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state2, {
      absolute: true,
      duration: oneChangeTime,
      zIndex: 10,
      ease: "power2.inOut",
    });
    Flip.from(state3, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state4, {
      absolute: true,
      duration: oneChangeTime,
      zIndex: 10,
      ease: "power2.inOut",
    });
    Flip.from(state6, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state7, {
      absolute: true,
      duration: oneChangeTime,
      zIndex: 10,
      ease: "power2.inOut",
    });
    Flip.from(state8, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state11, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state12, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
  }

  function removeTempContentFromStageOne() {
    tempone.innerHTML = "";
    tempone.classList.remove("grid-light-purple");
    tempone.classList.add("grid-medium-purple");

    tempTwo.innerHTML = "";
    tempTwo.classList.remove("grid-medium-purple");
    tempTwo.classList.add("grid-dark-purple");

    tempthree.innerHTML = "";
    tempthree.classList.remove("grid-dark-purple");
    tempthree.classList.add("grid-light-purple");

    tempfour.innerHTML = "";
    tempfour.classList.remove("grid-medium-purple");
    tempfour.classList.add("grid-dark-purple");

    tempsix.innerHTML = "";
    tempsix.classList.remove("grid-dark-purple");
    tempsix.classList.add("grid-light-purple");
    tempsix.style.borderRadius = "0px 0px 0px 32px";

    tempseven.innerHTML = "";
    tempseven.classList.remove("grid-light-purple");
    tempseven.classList.add("grid-dark-purple");

    tempeight.innerHTML = "";
    tempeight.classList.remove("grid-dark-purple");
    tempeight.classList.add("grid-light-purple");

    tempeleven.innerHTML = "";
    tempeleven.classList.remove("grid-dark-purple");
    tempeleven.classList.add("grid-light-purple");

    temptwelve.innerHTML = "";
    temptwelve.classList.remove("grid-medium-purple");
    temptwelve.classList.add("grid-dark-purple");
  }

  function stageTwo() {
    // one.style.opacity = 0;
    let state1 = Flip.getState(".one", {
      props: "opacity,borderRadius,backgroundColor",
    });
    one.innerHTML = clutchB2B;
    // one.style.opacity = 1;

    two.style.opacity = 0;
    let state2 = Flip.getState(".two", {
      props: "opacity,borderRadius,backgroundColor",
    });
    two.classList.remove("grid-dark-purple");
    two.classList.add("grid-light-purple");
    two.innerHTML = attractContent;
    two.style.opacity = 1;

    three.style.opacity = 0;
    three.style.gridRow = 2;
    three.classList.remove("grid-light-purple");
    three.classList.add("grid-medium-purple");
    tempthree.innerHTML = convertContent;
    three.innerHTML = clutchShopify;
    let state3 = Flip.getState(".three", {
      props: "opacity,borderRadius,backgroundColor",
    });
    three.style.opacity = 1;
    three.style.gridRow = 1;

    four.style.opacity = 0;
    four.innerHTML = growthContent;
    let state4 = Flip.getState(".four", {
      props: "opacity,borderRadius,backgroundColor",
    });
    four.style.opacity = 1;

    tempsix.classList.remove("grid-light-purple");
    tempsix.classList.add("grid-medium-purple");
    six.style.opacity = 0;
    let state6 = Flip.getState(".six", {
      props: "opacity,borderRadius,backgroundColor",
    });
    six.classList.remove("grid-light-purple");
    six.classList.add("grid-medium-purple");
    six.innerHTML = transformContent;
    six.style.opacity = 1;

    seven.style.opacity = 0;
    seven.innerHTML = convertContent;
    let state7 = Flip.getState(".seven", {
      props: "opacity,borderRadius,backgroundColor",
    });
    seven.style.opacity = 1;

    eight.style.opacity = 0;
    eight.innerHTML = clutch12;
    let state8 = Flip.getState(".eight", {
      props: "opacity,borderRadius,backgroundColor",
    });
    eight.classList.remove("grid-light-purple");
    eight.classList.add("grid-medium-purple");
    eight.style.opacity = 1;

    eleven.style.opacity = 0;
    eleven.innerHTML = msImage;
    let state11 = Flip.getState(".eleven", {
      props: "opacity,borderRadius,backgroundColor",
    });
    eleven.style.opacity = 1;

    twelve.style.opacity = 0;
    twelve.innerHTML = strategyContent;
    let state12 = Flip.getState(".twelve", {
      props: "opacity,borderRadius,backgroundColor",
    });
    twelve.style.opacity = 1;

    Flip.from(state1, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state2, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state3, {
      absolute: true,
      duration: oneChangeTime,
      zIndex: 10,
      ease: "power2.inOut",
    });
    Flip.from(state4, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state6, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state7, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state8, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state11, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state12, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
  }

  function removeTempContentFromStageTwo() {
    tempone.innerHTML = "";

    tempTwo.innerHTML = "";
    tempTwo.classList.remove("grid-dark-purple");
    tempTwo.classList.add("grid-light-purple");

    tempthree.innerHTML = "";
    tempthree.classList.remove("grid-light-purple");
    tempthree.classList.add("grid-medium-purple");

    tempfour.innerHTML = "";

    tempsix.innerHTML = "";
    // tempsix.classList.remove('grid-light-purple');
    // tempsix.classList.add('grid-medium-purple');

    tempseven.innerHTML = "";

    tempeight.innerHTML = "";
    tempeight.classList.remove("grid-light-purple");
    tempeight.classList.add("grid-medium-purple");

    tempeleven.innerHTML = "";
    tempeleven.classList.remove("grid-light-purple");
    tempeleven.classList.add("grid-dark-purple");

    temptwelve.innerHTML = "";
  }

  function stageThree() {
    // one.style.opacity = 0;
    one.innerHTML = crowd1;
    let state1 = Flip.getState(".one", {
      props: "opacity,borderRadius,backgroundColor",
    });
    one.classList.remove("grid-medium-purple");
    one.classList.add("grid-dark-purple");
    // one.style.opacity = 1;

    two.classList.remove("grid-light-purple");
    two.style.gridRow = 2;
    two.innerHTML = transformContent;
    let state2 = Flip.getState(".two", {
      props: "opacity,borderRadius,backgroundColor",
    });
    two.style.gridRow = 1;

    three.style.opacity = 0;
    three.innerHTML = crowdTop3;
    let state3 = Flip.getState(".three", {
      props: "opacity,borderRadius,backgroundColor",
    });
    three.classList.remove("grid-medium-purple");
    three.classList.add("grid-dark-purple");
    three.style.opacity = 1;

    four.classList.remove("grid-dark-purple");
    four.style.gridRow = 3;
    four.innerHTML = strategyContent;
    let state4 = Flip.getState(".four", {
      props: "opacity,borderRadius,backgroundColor",
    });
    four.style.gridRow = 1;
    let tempState4 = Flip.getState(".temp-four", {
      props: "opacity,borderRadius,backgroundColor",
    });
    tempfour.classList.remove("grid-dark-purple");
    tempfour.classList.add("grid-medium-purple");

    six.style.opacity = 0;
    six.innerHTML = crowdTop10;
    let state6 = Flip.getState(".six", {
      props: "opacity,borderRadius,backgroundColor",
    });
    six.classList.remove("grid-medium-purple");
    six.classList.add("grid-dark-purple");
    six.style.opacity = 1;

    seven.classList.remove("grid-dark-purple");
    seven.style.gridRow = 1;
    seven.style.gridColumn = 2;
    seven.innerHTML = attractContent;
    let state7 = Flip.getState(".seven", {
      props: "opacity,borderRadius,backgroundColor",
    });
    seven.style.gridRow = 2;
    seven.style.gridColumn = 3;
    let tempState7 = Flip.getState(".temp-seven", {
      props: "opacity,borderRadius,backgroundColor",
    });
    tempseven.classList.remove("grid-dark-purple");
    tempseven.classList.add("grid-medium-purple");

    eight.style.gridColumn = 3;
    eight.style.gridRow = 3;
    eight.classList.remove("grid-medium-purple");
    eight.innerHTML = msImage;
    let state8 = Flip.getState(".eight", {
      props: "opacity,borderRadius,backgroundColor",
    });
    eight.style.gridColumn = 4;
    eight.style.gridRow = 2;
    let tempState8 = Flip.getState(".temp-eight", {
      props: "opacity,borderRadius,backgroundColor",
    });
    tempeight.classList.remove("grid-medium-purple");
    tempeight.classList.add("grid-light-purple");

    eleven.style.opacity = 0;
    eleven.innerHTML = clutch1000;
    let state11 = Flip.getState(".eleven", {
      props: "opacity,borderRadius,backgroundColor",
    });
    eleven.classList.remove("grid-light-purple");
    eleven.classList.add("grid-dark-purple");
    eleven.style.opacity = 1;

    twelve.classList.remove("grid-dark-purple");
    twelve.style.gridRow = 1;
    twelve.innerHTML = growthContent;
    let state12 = Flip.getState(".twelve", {
      props: "opacity,borderRadius,backgroundColor",
    });
    twelve.style.gridRow = 3;
    let tempState12 = Flip.getState(".temp-twelve", {
      props: "opacity,borderRadius,backgroundColor",
    });
    temptwelve.classList.remove("grid-dark-purple");
    temptwelve.classList.add("grid-medium-purple");

    Flip.from(state1, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state2, {
      absolute: true,
      duration: oneChangeTime,
      zIndex: 10,
      ease: "power2.inOut",
    });
    Flip.from(state3, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state4, {
      absolute: true,
      duration: oneChangeTime,
      zIndex: 10,
      ease: "power2.inOut",
    });
    Flip.from(tempState4, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state6, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state7, {
      absolute: true,
      duration: oneChangeTime,
      zIndex: 10,
      ease: "power2.inOut",
    });
    Flip.from(tempState7, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state8, {
      absolute: true,
      duration: oneChangeTime,
      zIndex: 10,
      ease: "power2.inOut",
    });
    Flip.from(tempState8, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state11, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state12, {
      absolute: true,
      duration: oneChangeTime,
      zIndex: 10,
      ease: "power2.inOut",
    });
    Flip.from(tempState12, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
  }

  function removeTempContentFromStageThree() {
    tempone.innerHTML = "";
    tempone.classList.remove("grid-medium-purple");
    tempone.classList.add("grid-dark-purple");

    tempTwo.innerHTML = "";
    two.classList.add("grid-light-purple");

    tempthree.innerHTML = "";
    tempthree.classList.remove("grid-medium-purple");
    tempthree.classList.add("grid-dark-purple");

    tempfour.innerHTML = "";
    tempfour.classList.add("grid-medium-purple");

    tempsix.innerHTML = "";
    tempsix.classList.remove("grid-medium-purple");
    tempsix.classList.add("grid-dark-purple");

    tempseven.innerHTML = "";
    seven.classList.add("grid-medium-purple");

    tempeight.innerHTML = "";
    eight.classList.add("grid-light-purple");

    tempeleven.innerHTML = "";
    tempeleven.classList.remove("grid-light-purple");
    tempeleven.classList.add("grid-dark-purple");

    temptwelve.innerHTML = "";
    twelve.classList.add("grid-medium-purple");
  }

  function stageFour() {
    // one.style.opacity = 0;
    one.innerHTML = transformContent;
    let state1 = Flip.getState(".one", {
      props: "opacity,borderRadius,backgroundColor",
    });
    one.classList.remove("grid-dark-purple");
    one.classList.add("grid-light-purple");
    // one.style.opacity = 1;

    two.style.opacity = 0;
    two.innerHTML = clutchB2B;
    let state2 = Flip.getState(".two", {
      props: "opacity,borderRadius,backgroundColor",
    });
    two.classList.remove("grid-light-purple");
    two.classList.add("grid-medium-purple");
    two.style.opacity = 1;

    three.style.opacity = 0;
    three.style.gridColumn = 2;
    three.style.gridRow = 2;
    three.innerHTML = convertContent;
    // console.log(three.style.gridColumn, three.style.gridRow);
    let state3 = Flip.getState(".three", {
      props: "opacity,borderRadius,backgroundColor",
    });
    three.style.gridColumn = 3;
    three.style.gridRow = 1;
    three.style.opacity = 1;

    four.style.opacity = 0;
    four.innerHTML = clutchShopify;
    four.style.gridColumn = 3;
    let state4 = Flip.getState(".four", {
      props: "opacity,borderRadius,backgroundColor",
    });
    four.style.gridColumn = 4;
    four.style.opacity = 1;

    // six.style.opacity = 0;
    six.style.gridColumn = 1;
    six.style.gridRow = 1;
    six.innerHTML = attractContent;
    let state6 = Flip.getState(".six", {
      props: "opacity,borderRadius,backgroundColor",
    });
    six.style.gridColumn = 2;
    six.style.gridRow = 2;
    // six.style.opacity = 1;

    seven.style.opacity = 0;
    seven.classList.remove("grid-medium-purple");
    seven.innerHTML = msImage;
    seven.style.gridColumn = 4;
    let state7 = Flip.getState(".seven", {
      props: "opacity,borderRadius,backgroundColor",
    });
    seven.style.gridColumn = 3;
    seven.style.opacity = 1;

    let tempState7 = Flip.getState(".temp-seven", {
      props: "opacity,borderRadius,backgroundColor",
    });
    tempseven.classList.remove("grid-medium-purple");
    tempseven.classList.add("grid-light-purple");

    eight.style.opacity = 0;
    eight.innerHTML = growthContent;
    let state8 = Flip.getState(".eight", {
      props: "opacity,borderRadius,backgroundColor",
    });
    eight.classList.remove("grid-light-purple");
    eight.classList.add("grid-dark-purple");
    eight.style.opacity = 1;

    eleven.style.opacity = 0;
    eleven.innerHTML = strategyContent;
    let state11 = Flip.getState(".eleven", {
      props: "opacity,borderRadius,backgroundColor",
    });
    eleven.style.opacity = 1;

    twelve.style.opacity = 0;
    twelve.innerHTML = clutch12;
    let state12 = Flip.getState(".twelve", {
      props: "opacity,borderRadius,backgroundColor",
    });
    twelve.style.opacity = 1;

    Flip.from(state1, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state2, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state3, {
      absolute: true,
      duration: oneChangeTime,
      zIndex: 10,
      ease: "power2.inOut",
    });
    Flip.from(state4, {
      absolute: true,
      duration: oneChangeTime,
      zIndex: 10,
      ease: "power2.inOut",
    });
    Flip.from(state6, {
      absolute: true,
      duration: oneChangeTime,
      zIndex: 10,
      ease: "power2.inOut",
    });
    Flip.from(state7, {
      absolute: true,
      duration: oneChangeTime,
      zIndex: 10,
      ease: "power2.inOut",
    });
    Flip.from(tempState7, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state8, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state11, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state12, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
  }

  assignContentForStageOne();

  function fullBannerAnimation() {
    setTimeout(() => {
      stageOne();
    }, 3500);

    setTimeout(() => {
      removeTempContentFromStageOne();
      stageTwo();
    }, 6000);

    setTimeout(() => {
      removeTempContentFromStageTwo();
      stageThree();
    }, 8000);

    setTimeout(() => {
      removeTempContentFromStageThree();
      stageFour();
    }, 10000);
  }

  if (BannerAnimation) {
    fullBannerAnimation();

    setInterval(() => {
      fullBannerAnimation();
    }, 12000);
  }
});
