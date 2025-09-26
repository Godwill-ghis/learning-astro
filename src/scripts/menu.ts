const menu = document.querySelector(".menu");

menu?.addEventListener("click", () =>
{
    let isExpanded = menu.getAttribute("aria-expanded") === "true";
    isExpanded = !isExpanded;
    menu.setAttribute("aria-expanded", (!!isExpanded).toString());
});