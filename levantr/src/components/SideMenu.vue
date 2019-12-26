<template>
    <div class="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
        <div class="navbar-header">
            <ul class="nav navbar-nav flex-row">
                <li class="nav-item mr-auto"><a class="navbar-brand" href="./index.html">
                        <div class="brand-logo"></div>
                        <h2 class="brand-text mb-0">Frest</h2>
                    </a></li>
                <li class="nav-item nav-toggle"><a class="nav-link modern-nav-toggle pr-0" data-toggle="collapse"><i class="bx bx-x d-block d-xl-none font-medium-4 primary toggle-icon"></i><i class="toggle-icon bx bx-disc font-medium-4 d-none d-xl-block collapse-toggle-icon primary" data-ticon="bx-disc"></i></a></li>
            </ul>
        </div>
        <div class="shadow-bottom"></div>
        <div class="main-menu-content">
            <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation" data-icon-style="">
                <li class=" navigation-header"><span>Apps</span>
                </li>
                <li class=" nav-item"><a href="maps-google.html"><i class="bx bx-globe"></i><span class="menu-title" data-i18n="Google Maps">Google Maps</span></a>
                </li>
                <li class=" nav-item"><a href="app-email.html"><i class="bx bx-envelope"></i><span class="menu-title" data-i18n="Email">Email</span></a>
                </li>
                <li class=" nav-item"><a href="app-chat.html"><i class="bx bx-chat"></i><span class="menu-title" data-i18n="Chat">Chat</span></a>
                </li>
                <li class=" nav-item"><a href="app-todo.html"><i class="bx bx-check-circle"></i><span class="menu-title" data-i18n="Todo">Todo</span></a>
                </li>
                <li class=" nav-item"><a href="app-calendar.html"><i class="bx bx-calendar"></i><span class="menu-title" data-i18n="Calendar">Calendar</span></a>
                </li>
                <li class=" nav-item"><a href="app-kanban.html"><i class="bx bx-grid-alt"></i><span class="menu-title" data-i18n="Kanban">Kanban</span></a>
                </li>
                <li class=" nav-item"><a href="#"><i class="bx bx-file"></i><span class="menu-title" data-i18n="Invoice">Invoice</span></a>
                    <ul class="menu-content">
                        <li><a href="app-invoice-list.html"><i class="bx bx-right-arrow-alt"></i><span class="menu-item" data-i18n="Invoice List">Invoice List</span></a>
                        </li>
                        <li><a href="app-invoice.html"><i class="bx bx-right-arrow-alt"></i><span class="menu-item" data-i18n="Invoice">Invoice</span></a>
                        </li>
                        <li><a href="app-invoice-edit.html"><i class="bx bx-right-arrow-alt"></i><span class="menu-item" data-i18n="Invoice Edit">Invoice Edit</span></a>
                        </li>
                        <li><a href="app-invoice-add.html"><i class="bx bx-right-arrow-alt"></i><span class="menu-item" data-i18n="Invoice Add">Invoice Add</span></a>
                        </li>
                    </ul>
                </li>
                <li class=" nav-item"><a href="app-file-manager.html"><i class="bx bx-save"></i><span class="menu-title" data-i18n="File Manager">File Manager</span></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sideMenu'
}
</script>

<style>

</style>