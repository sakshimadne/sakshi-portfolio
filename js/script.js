// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css");
let htmlValue = document.querySelector(".html-progress");

if (htmlProgress && htmlValue) {
  let htmlStartValue = 0,
    htmlEndValue = 90,
    htmlspeed = 30;

  let progresshtml = setInterval(() => {
    htmlStartValue++;

    htmlValue.textContent = `${htmlStartValue}%`;
    htmlProgress.style.background = `conic-gradient(#fca61f ${
      htmlStartValue * 3.6
    }deg, #ededed 0deg)`;

    if (htmlStartValue == htmlEndValue) {
      clearInterval(progresshtml);
    }
  }, htmlspeed);
}


function downloadResume() {
  const url = "./resume/Sakshi_Madne_Resume.pdf";

  setTimeout(() => {
    const a = document.createElement("a");
    a.href = url;
    a.download = "Sakshi_Madne_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }, 500);
}


  


function openAndDownloadResume() {
  const url = "./resume/Sakshi_Madne_Resume.pdf";

  // Open in new tab
  window.open(url, "_blank");

  // Force download
  const a = document.createElement("a");
  a.href = url;
  a.download = "Sakshi_Madne_Resume.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

