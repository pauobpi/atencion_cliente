import CryptoJS from 'crypto-js';

import headerclass from '../../../components/header/header.vue';
import { complainsConfig, responsesConfig, license } from '../../../config/config';

const SHA256 = require('crypto-js/sha256');

export default {
    metaInfo: {
        title: 'Atrápalo | Atención clientes',
        meta: [
            { name: 'description', content: 'users' }
        ]
    },
    data() {
        return {
            complain: null,
            messages: null,
            id_message: null,
            textArea: false,
            languaje: 'EN',
            info_mensaje: '',
            currentDescription: '',
            currentTitle: '',
            solved: false,
            idActive: ''
        };
    },
    methods: {
        getUserComplains() {
            var information = [this.id];
            transferBytes.connect({
                id: complainsConfig.showAllComplains,
                license: license,
                languaje: this.languaje,
                content: information,
                idPost: 0
            }).then((result) => {
                this.complain = result.slice().reverse();
            });
        },
        complainsResponses(idResponse, title, description, solucionada) {
            this.id_message = idResponse;
            this.currentDescription = description;
            this.currentTitle = title;
            this.idActive = idResponse;
            this.solved = solucionada == 'Si' ? true : false ;
            var information = [idResponse];

            transferBytes.connect({
                id: responsesConfig.showResponses,
                license: license,
                languaje: this.languaje,
                content: information,
                idPost: 0
            }).then((result) => {
                this.textArea = true;
                this.messages = result.slice().reverse();
            });
        },
        createResponse() {
            var information = [this.id_message, 'Usuario', this.info_mensaje];
            if(this.info_mensaje.indexOf('<?php') != -1) {
                alert("ups!! Hacker a la vista");
                return;
            }
            
            transferBytes.connect({
                id: responsesConfig.createResponse,
                license: license,
                languaje: this.languaje,
                content: information,
                idPost: 0
            }).then(() => {
                this.complainsResponses(
                    this.id_message, 
                    this.currentTitle, 
                    this.currentDescription
                );
                this.info_mensaje = '';
            });
        }
    },
    mounted() {
       this.getUserComplains();
    },
    components: {
        headerclass
    },
    props: ['id']
};
