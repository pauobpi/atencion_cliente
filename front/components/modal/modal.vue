<template>
    <div v-if="visible" class="modal">
        <div class="modal__content">
            <h3>Nueva Petición</h3>
            <label>Título</label>
            <input v-model="info_ttuloDeQueja" type="text" class="item__input">
            <label>Descripción</label>
            <textarea  class="item__input" v-model="info_descripcin" style="height:170px;"></textarea>
            <input id="info_capturaPantalla" type="file" style="display:none;">
            <label for="info_capturaPantalla" class="item__file hide">Subir Captura de pantalla</label>
            <span class="btn" v-on:click ="newComplain">Enviar</span>
        </div>
        <div class="modal__close" @click="modalClose"><span class="icon icon-close"></span></div>
        <div class="modal__bg"></div>
    </div>
</template>

<script src='./modal.js'></script>
