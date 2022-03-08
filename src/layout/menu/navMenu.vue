<template>
    <b-collapse id="nav-collapse" is-nav >
        <b-navbar-nav class="mx-auto">
            <b-nav-item v-for="menuElement in this.menuElements" :key="menuElement.message" :href=menuElement.href>
                {{ menuElement.label }}
            </b-nav-item>
        </b-navbar-nav>
    </b-collapse>   
</template>

<script src="./navMenu.view.js"></script>
<style src="./navMenu.css"></style>