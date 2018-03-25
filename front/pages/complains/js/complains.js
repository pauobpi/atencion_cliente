import CryptoJS from 'crypto-js';

import headerclass from '../../../components/header/header.vue';

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
            idActive: ''
        };
    },
    methods: {
        getUserComplains() {
            var information = [this.id];
            transferBytes.connect('7cac5491b85b5ebaac12da319e916eb2', this.languaje, information).then((result) => {
                this.complain = result.slice().reverse();
            });
        },
        complainsResponses(idResponse, title, description) {
            this.id_message = idResponse;
            this.currentDescription = description;
            this.currentTitle = title;
            this.idActive = idResponse;
            var information = [idResponse];
            transferBytes.connect('46ab88100d6d0071926776d015d65111', this.languaje, information).then((result) => {
                this.textArea = true;
                this.messages = result.slice().reverse();
            });
        },
        createResponse() {
            var information = [this.id_message, 'Usuario', this.info_mensaje];
            transferBytes.connect('04e6ce7491f075efa7e1ecfefd51c13d', this.languaje, information).then((result) => {
                this.complainsResponses(this.id_message, this.currentTitle, this.currentDescription);
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
