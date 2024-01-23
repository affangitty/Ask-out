const noBtn = document.querySelector(".no-btn");
const currentDate = new Date();
const dayOfMonth = currentDate.getDate();
const formattedDate = getFormattedDate(dayOfMonth+1);

document.querySelector(".yes-btn").addEventListener("click", () => {
  document.querySelector(".question").innerHTML = `Yay, see you on the ${formattedDate}!`;
  document.querySelector(".gif").src =
    "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

function getFormattedDate(day) {
  if (day >= 11 && day <= 13) {
    return day + "th";
  }

  switch (day % 10) {
    case 1:
      return day + "st";
    case 2:
      return day + "nd";
    case 3:
      return day + "rd";
    default:
      return day + "th";
  }
}
