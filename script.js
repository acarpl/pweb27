document.getElementById("gift-select").addEventListener("change", function () {
  const selectedOption = this.value;
  const accountInfo = document.getElementById("account-info");
  const giftAddress = document.getElementById("gift-address");

  if (selectedOption === "transfer") {
    accountInfo.style.display = "block"; // Tampilkan info transfer
    giftAddress.style.display = "none"; // Sembunyikan alamat pengiriman
  } else if (selectedOption === "gift") {
    accountInfo.style.display = "none"; // Sembunyikan info transfer
    giftAddress.style.display = "block"; // Tampilkan alamat pengiriman
    giftAddress.disabled = false; // Aktifkan input alamat
  }
});

// Set default display state
window.onload = function () {
  document.getElementById("account-info").style.display = "block";
  document.getElementById("gift-address").style.display = "none";
};

function copyText(elementId) {
  // Get the text from the specified element
  var text = document.getElementById(elementId).innerText;

  // Create a temporary textarea element to copy the text
  var tempTextArea = document.createElement("textarea");
  tempTextArea.value = text;
  document.body.appendChild(tempTextArea);

  // Select the text inside the textarea and copy it
  tempTextArea.select();
  document.execCommand("copy");

  // Remove the temporary textarea element
  document.body.removeChild(tempTextArea);

  // Optionally, show a success message
  alert("Text copied: " + text);
}

document.getElementById("submit-btn").addEventListener("click", function (e) {
  e.preventDefault(); // Mencegah aksi default form (submit)

  // Menampilkan bagian gift
  const giftSection = document.getElementById("gift");
  giftSection.style.display = "block";
});
// Inisialisasi Swiper
var swiper = new Swiper(".love-story-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true, // Slide akan loop terus
  autoplay: {
    delay: 2500, // Otomatis berpindah slide
    disableOnInteraction: false,
  },
});
document
  .getElementById("messageForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value;

    const messageList = document.getElementById("messageList");

    const firstMessage = messageList.firstElementChild;
    if (firstMessage && firstMessage.textContent === "Belum ada pesan.") {
      firstMessage.remove();
    }

    const newMessage = document.createElement("li");
    newMessage.textContent = message;
    messageList.appendChild(newMessage);

    messageInput.value = "";
  });

document.addEventListener("DOMContentLoaded", function () {
  const cover = document.getElementById("cover");
  const mainContent = document.getElementById("main");
  const openInvitationBtn = document.querySelector(".btn");
  const body = document.body;

  // Music control
  const muteButton = document.getElementById("muteButton");
  const muteIcon = document.getElementById("muteIcon");
  const backgroundMusic = document.getElementById("backgroundMusic");

  // Function to show the main content and enable scrolling
  openInvitationBtn.addEventListener("click", function (e) {
    e.preventDefault();
    cover.style.display = "none"; // Hide the cover
    mainContent.style.display = "block"; // Show the main content
    body.style.overflow = "auto"; // Allow page scrolling
  });

  // Music control
  muteButton.addEventListener("click", function () {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
      muteIcon.classList.remove("fa-volume-mute");
      muteIcon.classList.add("fa-volume-high");
    } else {
      backgroundMusic.pause();
      muteIcon.classList.remove("fa-volume-high");
      muteIcon.classList.add("fa-volume-mute");
    }
  });

  // Initialize page state
  cover.classList.add("no-scroll");
  mainContent.style.display = "none"; // Ensure main content is hidden at the start
  body.style.overflow = "hidden"; // Prevent scrolling at the start

