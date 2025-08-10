document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector('#searchInput');
    const productList = document.querySelector('.products');
    const products = productList.querySelectorAll('.product');

    searchInput.addEventListener('input', () => {
        const searchText = searchInput.value.toLowerCase();

        products.forEach(product => {
            const nameElement = product.querySelector('p'); 
            const name = nameElement ? nameElement.textContent.toLowerCase() : '';

            if (name.includes(searchText)) {
                product.classList.remove('hidden');
            } else {
                product.classList.add('hidden');
            }
        });
    });
})