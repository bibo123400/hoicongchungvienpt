// script.js
document.querySelectorAll('.has-dropdown').forEach(item => {
    item.addEventListener('mouseover', event => {
        item.querySelector('.dropdown').style.display = 'block'; // Hiển thị dropdown
    });

    item.addEventListener('mouseout', event => {
        item.querySelector('.dropdown').style.display = 'none'; // Ẩn dropdown
    });
});
