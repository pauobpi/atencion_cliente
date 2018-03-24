import CryptoJS from 'crypto-js';

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
            example: null,
            languaje: 'EN', // Change languaje if you want
            filter_email: '',
            filter_password: ''
        };
    },
    methods: {
        verifyUser() {
            var information = [this.filter_email, CryptoJS.SHA256(this.filter_password + this.filter_email).toString()];
            transferBytes.connect('5ca27093da1a9a9f97535e6d634acba2', this.languaje, information).then((result) => {
                console.log(result);
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
