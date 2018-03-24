<template>
    <div v-if="visible">
        <label><strong>Título de queja</strong></label>
        <input v-model="info_ttuloDeQueja" type="text">

        <label><strong>Descripción</strong></label>
        <textarea v-model="info_descripcin"></textarea>

        <label><strong>Captura pantalla</strong></label>
        <input id="info_capturaPantalla" type="file">

        <span class="button"><button v-on:click ="newComplain">Upload Information</button></span>
    </div>
</template>

<script src='./modal.js'></script>
