function GoTo(element) {
   element.animate(
    [
        {backgroundColor: "rgb(255, 255, 255)"},
        {backgroundColor: "rgb(255, 255, 0)"},
        {backgroundColor: "rgb(255, 255, 255)"}
    ],
    {
      duration: 500,
    },
  );
}

document.getElementById("DisclaimerAnchor").addEventListener("click", function() {
    GoTo(document.getElementById("Disclaimer"));
});
document.getElementById("BemAnchor").addEventListener("click", function() {
    GoTo(document.getElementById("Bem"));
});
document.getElementById("DietaAnchor").addEventListener("click", function() {
    GoTo(document.getElementById("Dieta"));
});