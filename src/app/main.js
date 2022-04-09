import { Component, Dependencies, Constructor } from "@ion";

Constructor({
  fav: "/assets/logo.svg"
});

Dependencies({
  imports: [{
    type: "script",
    src: "https://unpkg.com/ioncss@1.7.4/ion.min.js"
  }, {
    type: "style",
    src: "https://fonts.googleapis.com/css2?family=Nunito:wght@300&family=Ubuntu:wght@700&display=swap"
  }, {
    type: "style",
    src: "/src/style/main.css"
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