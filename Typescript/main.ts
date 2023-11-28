document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tabs a");
  
    tabs.forEach((tab) => {
      tab.addEventListener("click", (event) => {
        event.preventDefault();
  
        const targetId = tab.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          // Hide all sections
          document.querySelectorAll(".content section").forEach((section) => {
            section.style.display = "none";
          });
  
          // Show the corresponding section
          targetSection.style.display = "block";
        }
      });
    });
  });
  