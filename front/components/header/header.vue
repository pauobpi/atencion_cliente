<template>
    <div>
        <modal :visible="showModal" :id="id"/>
        <header class="header">
            <div v-for="item in user" v-model="item.idPost">
                <img :src="'http://www.transferbytes.io/src/imgs/res_' + item.foto[0] + '.jpg'" /></li>
                <span>{{ item.nombre }}</span>
                <p>{{ item.email }}</p>
            </div>
            <div v-on:hidemodal="hideComplainModal"></div>
            <div class="header__new-complain" @click="viewComplainModal">Nueva queja</div>
        </header>
    </div>
</template>

<script src='./header.js'></script>