<template>
    <div>
        <div class="login">
            <ul>
                <li class="login__li">
                    <img src="">
                </li>
                <li class="login__li">
                    <label>Email</label>
                    <input type="text" v-model="filter_email">
                </li>
                <li class="login__li">
                    <label>Password</label>
                    <input type="password" v-model="filter_password">
                </li>
                <li class="login__li">
                    <span @click="verifyUser()">Entrar</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script src='./js/index.js'></script>