const tabs = document.querySelectorAll(".menu-tabs button");

const categories = document.querySelectorAll(".menu-category");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(btn => {
            btn.classList.remove("active");
        });

        tab.classList.add("active");

        const target = tab.dataset.category;

        categories.forEach(category => {

            category.classList.remove("active-category");

            if(category.id === target){
                category.classList.add("active-category");
            }

        });

    });

});