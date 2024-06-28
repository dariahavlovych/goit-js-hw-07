const categoryList = document.querySelector("ul#categories");
const children = Array.from(categoryList.children);

const getCategories = categoryList => {
    const categoriesAmount = children.length;
    let categoryTitle = "";
    let childElementsCount = 0;
    console.log(`Number of categories: ${categoriesAmount}`);
    children.forEach(element => {
        categoryTitle = element.firstElementChild.textContent;
        childElementsCount = element.lastElementChild.childElementCount;
        console.log(`Category: ${categoryTitle}\nElements: ${childElementsCount}`);
    });
    
}
getCategories(categoryList);
