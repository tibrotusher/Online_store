setInterval(function () {
  let currentDate = new Date();
  let dateString = currentDate.toLocaleString();
  document.getElementById("showTime").innerHTML = dateString;
}, 1000);

window.addEventListener("scroll", function () {
  let header = document.querySelector(".header_section nav");
  if (window.scrollY > 50) {
    header.classList.add("fixed-header");
  } else {
    header.classList.remove("fixed-header");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let backToTopBtn = document.getElementById("backToTopBtn");

  // Show the button when scrolling down
  window.onscroll = function () {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  };

  // Scroll to top smoothly
  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

const openChat = document.querySelector("#openChat");
const closeChat = document.querySelector("#closeChat");
const chatbox = document.querySelector(".chatbox");
const inputBox = document.querySelector(".input-box");
const messageBox = document.querySelector(".message-box");

// Open Chatbox
openChat.addEventListener("click", () => {
  chatbox.classList.remove("d-none");
  openChat.classList.add("d-none");
  messageBox.innerHTML = "";

  // Initial greeting
  setTimeout(() => {
    messageBox.innerHTML += `<div class="mb-2 text-muted small text-center">Hello! How can we help you today?</div>`;
  }, 100);
});

// Close Chatbox
closeChat.addEventListener("click", () => {
  chatbox.classList.add("d-none");
  openChat.classList.remove("d-none");
});

// Send Message
inputBox.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = inputBox.querySelector("input");
  const message = input.value.trim();

  if (!message) return;

  // Append User Message (Right Aligned)
  messageBox.innerHTML += `
        <div class="text-end mb-2">
          <span class="bg-primary text-white px-3 py-1 rounded-3 d-inline-block shadow-sm">
            ${message}
          </span>
        </div>`;

  input.value = "";
  messageBox.scrollTop = messageBox.scrollHeight;

  // Automated Response (Left Aligned)
  setTimeout(() => {
    messageBox.innerHTML += `
          <div class="text-start mb-2">
            <span class="bg-white border text-dark px-3 py-1 rounded-3 d-inline-block shadow-sm">
              How May I Help You?
            </span>
          </div>`;
    messageBox.scrollTop = messageBox.scrollHeight;
  }, 400);
});
