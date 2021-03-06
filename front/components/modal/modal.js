import CryptoJS from 'crypto-js';
import { complainsConfig, license } from '../../config/config';

const SHA256 = require('crypto-js/sha256');

export default {
    data() {
        return {
            example: null,
            languaje: 'EN', // Change languaje if you want
            info_idqueja: '',
            info_user: '',
            info_ttuloDeQueja: '',
            info_descripcin: '',
            info_capturaPantalla: {
                type: 'image',
                page: 45,
                item: 166,
                id: 'info_capturaPantalla'
            },
            info_quejaSolucionada: '',
            info_inBbdd: ''
        };
    },
    methods: {
        newComplain() {
            var information = [CryptoJS.SHA256(this.id + this.info_ttuloDeQueja).toString(), this.id, this.info_ttuloDeQueja, this.info_descripcin, this.info_capturaPantalla, 'No', this.info_inBbdd];
            transferBytes.connect({
                id: complainsConfig.newComplain,
                license: license,
                languaje: this.languaje,
                content: information,
                idPost: 0
            }).then(() => {
                this.$parent.hideComplainModal();
                this.$parent.$parent.getUserComplains();
            });
        },
        modalClose() {
           this.$parent.hideComplainModal();
        }
    },
    props: ['id', 'visible']
};
