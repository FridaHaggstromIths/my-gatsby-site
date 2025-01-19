import React from "react";

export const onRenderBody = ({ setHtmlAttributes }) => {
  console.log("onRenderBody körs");
  setHtmlAttributes({ lang: "sv" });
};
