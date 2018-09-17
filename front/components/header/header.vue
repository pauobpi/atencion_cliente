<template>
    <div>
        <modal :visible="showModal" :id="id"/>
        <header class="header">
            <div v-for="item in user" v-model="item.idPost">
                <img class="header__img" :src="'http://localhost/src/assets/src/imgs/res_' + item.foto[0] + '.jpg'" /></li>
                <span class="header__name">{{ item.nombre }}</span>
                <p class="header__email">{{ item.email }}</p>
            </div>
            <div v-on:hidemodal="hideComplainModal"></div>
        </header>
        <div class="header__new-complain" @click="viewComplainModal">+</div>
    </div>
</template>

<script src='./header.js'></script>