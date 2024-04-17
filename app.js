const dropdown = document.querySelector(".dropdown");
const dropdown_menu = document.querySelector(".dropdown-menu");
const catlink = document.querySelector(".cat-link");

const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const close = document.querySelector(".close-icon");

burger.addEventListener("click", () => {
    nav.style.display = "flex";
    burger.style.display = "none";
    close.style.display = "block";
});

close.addEventListener("click", () => {
    nav.style.display = "none";
    burger.style.display = "block";
    close.style.display = "none";
});

catlink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default behavior of the <a> tag
    dropdown_menu.style.display = (dropdown_menu.style.display !== "flex") ? "flex" : "none";
});



var landingContent = [
    { imagePath: "images/man.png", text1: "Master High Paying Tech Courses and Advance Your Career", text2:" Comprehensive training programs for Cisco certifications and cutting-edge tech skills" },
    { imagePath: "images/hero2.png", text1: "We Create Innovation Through Digital Transformation", text2: "DCisco Academy is a leading provider of comprehensive technology training solutions and digital services, empowering individuals and businesses to thrive in the ever-evolving tech landscape. With a team of certified instructors, skilled developers, and industry experts, we offer a wide range of programs and services tailored to meet the specific needs of our clients."}
  ];

  var currentIndex = 0; // Variable to track the current index in the landingContent array

  window.onload = function() {
    setInterval(changeLandingContent, 10000); // Call changeLandingContent function every 10 seconds
  };

  function changeLandingContent() {
    var currentContent = landingContent[currentIndex];
    var landingImage = document.getElementById("landing-image");
    var landingText1 = document.getElementById("landing-text1");
    var landingText2 = document.getElementById("landing-text2");


    // Update image source and text with the current content
    landingImage.src = currentContent.imagePath;
    landingText1.textContent = currentContent.text1;
    landingText2.textContent = currentContent.text2;



    // Toggle class for styling the second image differently
    if (currentIndex === 1) {
        landingImage.classList.add('second-image');
        landingText1.classList.add('text1');
        landingText2.classList.add('text2');


      } else {
        landingImage.classList.remove('second-image');
        landingText1.classList.remove('text1');
        landingText2.classList.remove('text2');


      }
  

    // Increment the index for the next content, loop back to 0 if reached the end
    currentIndex = (currentIndex + 1) % landingContent.length;
  }


