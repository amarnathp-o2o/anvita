import App, { Constructor, Dom } from "@ion";

Constructor ({
  charset: "utf-8",
  title: "IonJs Project",
  description: "your description..",
  responsive: true,
  auth: "your author names"
});

App ({
  template: "/src/layout/index.htm"
});