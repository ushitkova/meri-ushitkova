$("#email").on("click", function () {
  window.location.href = "mailto:ushitkovameri@outlook.com";
});

$("#emailSugarwishFooter").on("click", function () {
  window.location.href = "mailto:ushitkovameri@outlook.com";
});

$("#emailUssFooter").on("click", function () {
  window.location.href = "mailto:ushitkovameri@outlook.com";
});

$("#linkedin").on("click", function () {
  window.open("https://www.linkedin.com/in/meri-ushitkova-048b1a220", "_blank");
});

$("#aboutFooter").on("click", function () {
  if (window.location.href.includes("project")) {
    location.href = "#about-me";
    location.href = location.href.replace(/project.*$/i, "index.html");
  } else {
    location.href = "#about-me";
  }
});

$("#projectsFooter").on("click", function () {
  if (window.location.href.includes("project")) {
    location.href = "#projects";
    location.href = location.href.replace(/project.*$/i, "index.html");
  } else {
    location.href = "projects";
  }
});

$("#navAboutProject").on("click", function () {
  location.href = "#about-me";
  location.href = location.href.replace(/project.*$/i, "index.html");
});

$("#navProjectsProject").on("click", function () {
  location.href = "#projects";
  location.href = location.href.replace(/project.*$/i, "index.html");
});

$("#logoHome").on("click", function () {
  location.href = "/";
});

$("#behance").on("click", function () {
  window.open(
    "https://www.behance.net/meriushitkova?fbclid=IwAR2rbx1cGCks0LZ5-5yDkNKcnIF6-Pg20cDAyahaZSSgbMdlzT2FSUH8AI8",
    "_blank"
  );
});

$("#linkedin").on("click", function () {
  window.open("https://www.linkedin.com/in/meri-ushitkova-048b1a220", "_blank");
});

$("#resume").click(function () {
  DownloadFile("UshitkovaMeri.pdf");
});

$("#resumeFooter").click(function () {
  DownloadFile("UshitkovaMeri.pdf");
});

$("#resumeFooter").click(function () {
  DownloadFile("UshitkovaMeri.pdf");
});

$("#project-uss").on("click", function () {
  var url = window.location.href;
  url = url.substring(0, url.indexOf("index.html"));
  window.open(url + "project-uss.html", "_blank");
});

$("#project-sugarwish").on("click", function () {
  var url = window.location.href;
  url = url.substring(0, url.indexOf("index.html"));
  window.open(url + "project-sugarwish.html", "_blank");
});

// $("#project-janebank").on("click", function () {
//   var url = window.location.href;
//   url = url.substring(0, url.indexOf("index.html"));
//   window.open(url + "project.html", "_blank");
// });

// $("#project-nlb").on("click", function () {
//   var url = window.location.href;
//   url = url.substring(0, url.indexOf("index.html"));
//   window.open(url + "project.html", "_blank");
// });

function DownloadFile(fileName) {
  //Set the File URL.
  var url = "Files/" + fileName;

  //Create XMLHTTP Request.
  var req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.responseType = "blob";
  req.onload = function () {
    //Convert the Byte Data to BLOB object.
    var blob = new Blob([req.response], { type: "application/octetstream" });

    //Check the Browser type and download the File.
    var isIE = false || !!document.documentMode;
    if (isIE) {
      window.navigator.msSaveBlob(blob, fileName);
    } else {
      var url = window.URL || window.webkitURL;
      link = url.createObjectURL(blob);
      var a = document.createElement("a");
      a.setAttribute("download", fileName);
      a.setAttribute("href", link);
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };
  req.send();
}
