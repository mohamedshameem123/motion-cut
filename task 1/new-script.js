document.addEventListener('DOMContentLoaded', () => {
    const dropdownText = document.getElementById('modern-dropdown-text');
    const dropdownList = document.getElementById('modern-dropdown-list');
    const dropdownItems = document.querySelectorAll('.modern-dropdown-item');
    const searchInput = document.getElementById('modern-search-input');
    const dropdownSpan = document.getElementById('modern-dropdown-span');

    dropdownText.addEventListener('click', () => {
        dropdownList.style.display = dropdownList.style.display === 'block' ? 'none' : 'block';
    });

    dropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            dropdownSpan.textContent = item.textContent;
            searchInput.placeholder = `Search ${item.textContent.toLowerCase()}...`;
            dropdownList.style.display = 'none';
        });
    });

    document.addEventListener('click', (event) => {
        if (!dropdownText.contains(event.target)) {
            dropdownList.style.display = 'none';
        }
    });
});
