<template>
    <div>
        <headerclass :id="id"/>
        <div class="container">
            <div class="columns">
                <ul v-for="item in complain" v-model="item.idPost" class="column is-3 complains">
                    <li @click="complainsResponses(item.idqueja, item.ttuloDeQueja, item.descripcin)">
                        <span v-if="item.quejaSolucionada == 'Si'">Solucionada</span>{{ item.ttuloDeQueja }}
                    </li>
                </ul>
                <div v-if="textArea" class="column message">
                    <h3 class="message__h3">{{ currentTitle }}</h3>
                    <p v-html="currentDescription"></p>
                    
                    <div v-for="item in messages" v-model="item.idPost">
                        <div v-if="item.usuario == 'Atrápalo'">Atrápalo</div>
                        <div v-if="item.usuario != 'Atrápalo'">Me</div>
                        <p>{{ item.queja }}</p>
                        <p v-html="item.mensaje"></p>
                    </div>
                    <div>
                        <textarea v-model="info_mensaje"></textarea>
                        <span class="button"><button v-on:click ="createResponse">Upload Information</button></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src='./js/complains.js'></script>