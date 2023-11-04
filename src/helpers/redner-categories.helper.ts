import { Category } from "../types/types.js";

export const render = (
  categories: Category[],
  categoriesUl: HTMLElement,
  inputChangeCallback: (category: Category) => void
) => {
  const handleCategoryChange = (category: Category) => {
    const button = document.querySelector("button");
    let buttonTextColor: string;
    switch (category) {
      case Category.GENERAL:
        buttonTextColor = "black";
        break;
      case Category.CODING:
        buttonTextColor = "darkgoldenrod";
        break;
      case Category.IMPORTANT:
        buttonTextColor = "rgb(197, 8, 8)";
        break;
      default:
        const never: never = category;
        console.log(never);
        break;
    }
    button.style.color = buttonTextColor;
  };

  categories.forEach((category) => {
    const categoryInput: HTMLInputElement = document.createElement("input");
    categoryInput.type = "radio";
    categoryInput.name = "category";
    categoryInput.value = category;
    categoryInput.id = `category-${category}`;
    categoryInput.style.color = "red";
    categoryInput.addEventListener("change", () => {
      inputChangeCallback(category);
      handleCategoryChange(category);
    });

    const categoryLabel: HTMLLabelElement = document.createElement("label");
    categoryLabel.setAttribute("for", `category-${category}`);
    categoryLabel.innerHTML = category;
    categoryLabel.style.color = category === Category.GENERAL && "black";
    categoryLabel.style.color = category === Category.CODING && "darkgoldenrod";
    categoryLabel.style.color =
      category === Category.IMPORTANT && "rgb(197, 8, 8)";

    const categoryLi = document.createElement("li");
    categoryLi.appendChild(categoryInput);
    categoryLi.appendChild(categoryLabel);

    categoriesUl.appendChild(categoryLi);
  });
};
