const dashedArrow = document.getElementById("dashedArrow");
const hiddenFooter = document.getElementById("hiddenFooter");

dashedArrow.addEventListener("click", () => {
    // Slide up the hidden footer from the bottom when dashed arrow is clicked
    hiddenFooter.style.bottom = "0";
});
