const categoryList = document.querySelector("ul#categories");
const children = Array.from(categoryList.children);

const getCategories = categoryList => {
    let categoriesAmount = 0;
    let categoryTitle = "";
    let childElementsCount = 0;
    children.forEach(element => {
        categoriesAmount += 1;
        categoryTitle = element.firstElementChild.textContent;
        childElementsCount = element.lastElementChild.childElementCount;
        console.log(`Number of categories: ${categoriesAmount}\nCategory: ${categoryTitle}\nElements: ${childElementsCount}`);
    });
}
getCategories(categoryList);

// TODO - add all styles
