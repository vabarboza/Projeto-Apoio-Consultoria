<template>
  <div class="contato">
    <div class="row">
      <!--Grid column-->
      <div class="col-md-9 mb-md-0 mb-5">
        <Toast ref='toast' />
        <form ref="form" @submit.prevent="sendEmail">
          <div class="row">
            <div class="col-md-6">
              <label class="font-weight-bold" for="from_name">Seu nome</label>
              <input type="text" name="from_name" id="from_name" v-model="nome" class="form-control mb-4"
                placeholder="Nome" required>
            </div>

            <div class="col-md-6">
              <label class="font-weight-bold" for="reply_to">Seu E-Mail</label>
              <input type="text" name="reply_to" id="reply_to" v-model="nome" class="form-control mb-4"
                placeholder="Seu E-Mail" required>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <label class="font-weight-bold" for="from_assunto">Assunto do contato</label>
              <input type="text" name="from_assunto" id="from_assunto" v-model="nome" class="form-control mb-4"
                placeholder="Assunto" required>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label class="font-weight-bold" for="from_assunto">Conteudo da mensagem</label>
                <textarea v-model="mensagem" name="message" class="form-control rounded-0" rows="4" placeholder="Mensagem"
                  required></textarea>
              </div>
            </div>
          </div>

          <div class="text-center text-md-left">
            <button class="btn btn-indigo btn-rounded waves-effect">Enviar</button>
          </div>

        </form>
      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div class="col-md-3 text-center">
        <ul class="list-unstyled mb-0">
          <li>
            <i class="fab fa-whatsapp-square mt-4 fa-2x"></i>
            <p>(44) 00000-0000</p>
          </li>

          <li>
            <i class="fas fa-phone mt-4 fa-2x"></i>
            <p>(44) 00000-0000</p>
          </li>

          <li>
            <i class="fas fa-envelope mt-4 fa-2x"></i>
            <p>contato@email.com.br</p>
          </li>
        </ul>
      </div>
      <!--Grid column-->
    </div>
  </div>
</template>
  
<script>
import emailjs from 'emailjs-com';

export default {
  data: () => ({
    nome: "",
    email: "",
    assunto: "",
    mensagem: ""
  }),
  methods: {
    sendEmail() {
      emailjs.sendForm('service_xmvgouq', 'template_um5hqqo', this.$refs.form, 'user_c9iXupC4Ihl4fZHbsKMVw')
        .then((result) => {
          console.log('SUCCESS!', result.text);
          this.$refs.toast.showToast()
          this.nome = "",
            this.email = "",
            this.assunto = "",
            this.mensagem = ""
        }, (error) => {
          console.log('FAILED...', error.text);
        });
    }
  }
}
</script>
  
<style></style>