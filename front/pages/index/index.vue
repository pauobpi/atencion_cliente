<template>
    <div>
        <div class="login">
            <ul class="login__content">
                <li class="login__li" style="text-align:center;">
                    <img class="logo" src="assets/img/atrapalo.png"/>
                </li>
                <li class="login__li">
                    <label class="login__label">Email</label>
                    <input type="text" v-model="filter_email" class="item__input" placeholder="mi@email.com">
                </li>
                <li class="login__li">
                    <label class="login__label">Contraseña</label>
                    <input type="password" v-model="filter_password" class="item__input" placeholder="••••••••">
                </li>
                <li class="login__li" style="text-align: center;">
                    <span class="buttonLog" @click="verifyUser()"><strong>Entrar</strong></span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script src='./js/index.js'></script>