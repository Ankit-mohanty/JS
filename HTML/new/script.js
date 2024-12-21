const sidebar = document.getElementById('sidebar');
const sidebarHeader = document.getElementById('sidebar-header');

sidebarHeader.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});