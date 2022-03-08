export default {
    name: 'Modal',
    props: {
      dialog: Boolean,
      className: String
    },
    methods: {
      closeModal() {
        this.$root.$emit('closeModal');
      },
    },
  };