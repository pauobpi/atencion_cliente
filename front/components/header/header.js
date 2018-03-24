import modal from '../modal/modal.vue';

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
            transferBytes.connect('4bcbeaaf56ea96026755f455de5c4f96', this.languaje, information).then((result) => {
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
