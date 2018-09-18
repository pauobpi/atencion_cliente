<template>
    <div>
        <div class="complains">
            <headerclass :id="id"/>
            <ul class="complains__ul">
                <li v-for="item in complain" v-model="item.idPost"  @click="complainsResponses(item.idpeticion, item.ttuloDePeticin, item.descripcin, item.peticinSolucionada)" class="complains__list" :class="[item.peticinSolucionada == 'Si' ? 'done' : '', idActive == item.idpeticion ? 'active' : '']">
                    <span v-if="item.peticinSolucionada == 'Si'" class="icon icon-check"></span>{{ item.ttuloDePeticin }}
                </li>
            </ul>
        </div>
        <div v-if="textArea" class="message">
            <div class="message__content">
                <div v-if="solved" class="solved"><span class="icon icon-check"></span>Petición solucionada</div>
                <div v-else class="solved --not">Petición pendiente de solucionar</div>
                <div class="message__header me">
                    <h3 class="message__h3">{{ currentTitle }}</h3>
                    <p class="message__txt" v-html="currentDescription"></p>
                </div>
                <div v-for="item in messages" v-model="item.idPost" :class="[item.usuario == 'Empresa' ? 'atrapalo_user' : 'me']">
                    <p v-html="item.mensaje"></p>
                </div>
            </div>
            <div class="message__sms">
                <textarea v-model="info_mensaje" class="item__input" placeholder="Escribe algún comentario..."></textarea>
                <span class="btn"  v-on:click ="createResponse">Enviar</span>
            </div>
        </div>
    </div>
</template>

<script src='./js/complains.js'></script>