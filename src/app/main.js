import { Component, Dependencies, Constructor } from "@ion";

Constructor({
  fav: "/assets/logo.svg",
  themeColor: "#000",
  responsive: true
});

Dependencies({
  imports: [{
    type: "style",
    src: "https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
  }, {
    type: "style",
    src: "https://fonts.googleapis.com/css2?family=Nunito:wght@300&family=Ubuntu:wght@700&display=swap"
  }, {
    type: "style",
    src: "/src/style/main.css"
  }, {
    type: "script",
    src: "/src/js/main.js"
  }]
});

Component({
  name: "app-footer",
  templateUrl: "/src/components/footer.htm"
});

Component({
  name: "app-nav",
  templateUrl: "/src/components/nav.htm"
});

Component({
  name: "app-icons",
  templateUrl: (e) => {
    return "/src/drawable/" + e.getAttribute("icon") + ".svg";
  }
});