import CryptoJS from 'crypto-js';

const SHA256 = require('crypto-js/sha256');
import { userConfig, license } from '../../../config/config';

export default {
    metaInfo: {
        title: 'Atrápalo | Atención clientes',
        meta: [
            { name: 'description', content: 'users' }
        ]
    },
    data() {
        return {
            example: null,
            languaje: 'EN', // Change languaje if you want
            filter_email: '',
            filter_password: ''
        };
    },
    methods: {
        verifyUser() {
            var information = [this.filter_email, CryptoJS.SHA256(this.filter_password + this.filter_email).toString()];
            transferBytes.connect({
                id: userConfig.verifyUser,
                license: license,
                languaje: this.languaje,
                content: information,
                idPost: 0
            }).then((result) => {
                if(this.resultReturnData(result)) {
                    window.location = `#/user/${result[0].iduser}`;
                }
            });
        },
        resultReturnData(result) {
            return result.length != 0;
        }
    },
    mounted() {

    },
    components: {

    }
};
