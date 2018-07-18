<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="email-group"
                    label="Email:"
                    :class="{error:errors.has('email')}"
                    label-for="email"
                    :description="errors.first('email')">
        <b-form-input id="email"
                      type="email"
                      v-model="form.email"
                      required
                      v-validate="'required|email'" name="email"
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="pwd-group"
                    label="Password:"
                    :class="{error:errors.has('pwd')}"
                    label-for="pwd"
                    :description="errors.first('pwd')">
        <b-form-input id="pwd"
                      type="password"
                      v-model="form.name"
                      v-validate="{ required: true, regex: pwd_regex }" name="pwd" 
                      required
                      placeholder="Enter password">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  data () {
    return {
      form: {
        email: '',
        pwd: ''
      },
      pwd_regex: /^[0-9a-zA-Z]{8,9}$/, //8-9 ^|$ !!!
      show: true
    }
  },
  methods: {
    ...mapActions({
      login: 'login'// 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    }),
    onSubmit (evt) {
      evt.preventDefault();
      this.login(this.form);
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>
<style lang="scss" scoped>
.error input{
  border-color:red;
}
</style>
