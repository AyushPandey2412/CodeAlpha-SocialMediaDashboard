// // SIDEBAR TOGGLE

// let sidebarOpen = false;
// const sidebar = document.getElementById('sidebar');

// function openSidebar() {
//   if (!sidebarOpen) {
//     sidebar.classList.add('sidebar-responsive');
//     sidebarOpen = true;
//   }
// }

// function closeSidebar() {
//   if (sidebarOpen) {
//     sidebar.classList.remove('sidebar-responsive');
//     sidebarOpen = false;
//   }
// }

// Toggle Sidebar Visibility

const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.getElementById('sidebar');

menuIcon.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar-visible');
});

