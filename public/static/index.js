const navbar = document.getElementById('navbarMain');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) { // Adjust this value based on when you want the color to change
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function mobileNavbar() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } 

function openNav() {
    document.getElementById("mobileMenu").style.width = "100%";
    document.getElementById("mobileMenuContents").style.display = "block";
  }
  
  function closeNav() {
    document.getElementById("mobileMenu").style.width = "0%";
  }

  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }

  document.addEventListener("DOMContentLoaded", function () {
    const chatbotContainer = document.getElementById("chatbot-container");
    const closeBtn = document.getElementById("close-btn");
    const sendBtn = document.getElementById("send-btn");
    const chatbotInput = document.getElementById("chatbot-input");
    const chatbotMessages = document.getElementById("chatbot-messages");
  
    const chatbotIcon = document.getElementById("chatbot-icon");
    const closeButton = document.getElementById("close-btn");
  
    // Toggle chatbot visibility when clicking the icon
    // Show chatbot when clicking the icon
    chatbotIcon.addEventListener("click", function () {
      chatbotContainer.classList.remove("hidden");
      chatbotIcon.style.display = "none"; // Hide chat icon
    });
  
    // Also toggle when clicking the close button
    closeButton.addEventListener("click", function () {
      chatbotContainer.classList.add("hidden");
      chatbotIcon.style.display = "flex"; // Show chat icon again
    });
  
    sendBtn.addEventListener("click", sendMessage);
    chatbotInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        sendMessage();
      }
    });
  
    function sendMessage() {
      const userMessage = chatbotInput.value.trim();
      if (userMessage) {
        appendMessage("user", userMessage);
        chatbotInput.value = "";
        getBotResponse(userMessage);
      }
    }
  
    function appendMessage(sender, message) {
      const messageElement = document.createElement("div");
      messageElement.classList.add("message", sender);
      messageElement.textContent = message;
      chatbotMessages.appendChild(messageElement);
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
  
    async function getBotResponse(userMessage) {
      const apiKey = "your-api-key"; // Replace with your OpenAI API key
      const apiUrl = "https://api.openai.com/v1/chat/completions";
  
      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userMessage }],
            max_tokens: 150,
          }),
        });
  
        const data = await response.json();
        const botMessage = data.choices[0].message.content;
        appendMessage("bot", botMessage);
      } catch (error) {
        console.error("Error fetching bot response:", error);
        appendMessage("bot", "Sorry, something went wrong. Please try again.");
      }
    }
  });