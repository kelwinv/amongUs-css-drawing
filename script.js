const body = document.body;
const colorsElement = document.querySelectorAll(".color");

colorsElement.forEach((colorElement) => {
  const classes = colorElement.className.split(" ");
  colorElement.style.background = classes[2];
  colorElement.setAttribute("onclick", `handleChangeColor('${classes[1]}')`);
});

function handleChangeColor(color) {
  colorsElement.forEach((colorElement) => {
    const classes = colorElement.className.split(" ");
    classes.find((classe) => {
      if (classe === "selected") {
        colorElement.classList.remove("selected");
      }
      if (classe === color) {
        colorElement.classList.add("selected");
      }
    });
  });

  ChangePlayerColor(color);
}

function ChangePlayerColor(color) {
  switch (color) {
    case "red":
      body.style.setProperty("--primary-color", "#770a39");
      body.style.setProperty("--secondary-color", "#c01701");
      break;
    case "blue":
      body.style.setProperty("--primary-color", "#070b93");
      body.style.setProperty("--secondary-color", "#1125da");
      break;
    case "green":
      body.style.setProperty("--primary-color", "#134d29");
      body.style.setProperty("--secondary-color", "#237f18");
      break;
    case "pink":
      body.style.setProperty("--primary-color", "#a728b3");
      body.style.setProperty("--secondary-color", "#e752be");
      break;
    case "orange":
      body.style.setProperty("--primary-color", "#b14100");
      body.style.setProperty("--secondary-color", "#ea7f00");
      break;
    case "yellow":
      body.style.setProperty("--primary-color", "#c58524");
      body.style.setProperty("--secondary-color", "#f8f456");
      break;
    case "black":
      body.style.setProperty("--primary-color", "#1e1f28");
      body.style.setProperty("--secondary-color", "#42444f");
      break;
    case "white":
      body.style.setProperty("--primary-color", "#8394c2");
      body.style.setProperty("--secondary-color", "#d4dff0");
      break;
    case "purple":
      body.style.setProperty("--primary-color", "#3d167c");
      body.style.setProperty("--secondary-color", "#6d31bc");
      break;
    case "brown":
      body.style.setProperty("--primary-color", "#5f2416");
      body.style.setProperty("--secondary-color", "#71481d");
      break;
    case "cyan":
      body.style.setProperty("--primary-color", "#35a7c0");
      body.style.setProperty("--secondary-color", "#53fdd7");
      break;
    case "light-green":
      body.style.setProperty("--primary-color", "#2da82a");
      body.style.setProperty("--secondary-color", "#61ef00");
      break;
  }
}
