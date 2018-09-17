import modal from '../modal/modal.vue';
import { userConfig, license } from '../../config/config';

export default {
    data() {
        return {
            user: null,
            languaje: 'EN', // Change languaje if you want
            filter_iduser: '',
            showModal: false
        };
    },
    methods: {
        userInformation() {
            var information = [this.id];

            transferBytes.connect({
                id: userConfig.userInfo,
                license: license,
                languaje: this.languaje,
                content: information,
                idPost: 0
            }).then((result) => {
                this.user = result;
            });
        },
        viewComplainModal() {
            this.showModal = true;
        },
        hideComplainModal() { 
            this.showModal = false;
        }
    },
    mounted() {
        this.userInformation();
    },
    components: {
        modal
    },
    props: ['id']
};
