<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title text-center font-weight-bold"><a>ENTRE EM CONTATO</a></h5>
            <form class="text-center p-1" @submit.prevent="enviarEmail" ref="form">
                <input type="text" name="from_name" v-model="nome" class="form-control mb-4" placeholder="Nome" required>
                <input type="email" name="reply_to" v-model="email" class="form-control mb-4" placeholder="E-mail" required>
                <label>Assunto</label>
                <select v-model="assunto" class="browser-default custom-select mb-4">
                    <option value="" selected>Selecione uma opção</option>
                    <option value="Orçamento">Orçamento</option>
                    <option value="Dúvidas">Dúvidas</option>
                </select>
                <div class="form-group">
                    <textarea v-model="mensagem" name="message" class="form-control rounded-0" rows="3"
                        placeholder="Mensagem" required></textarea>
                </div>
                <button class="btn btn-indigo btn-rounded waves-effect btn-block" type="submit">ENVIAR</button>
                <div v-if="enviado" class="alert alert-success mt-2" role="alert">
                    Email enviado com sucesso!
                </div>
                <div v-if="falhou" class="alert alert-danger mt-2" role="alert">
                    Falha ao enviar Email!
                </div>
            </form>
        </div>
    </div>
</template>
  
<script>
import emailjs from 'emailjs-com';

export default {
    name: 'FormIndex',
    data() {
        return {
            nome: '',
            email: '',
            assunto: '',
            mensagem: '',
            enviado: false,
            falhou: false
        };
    },
    methods: {
        enviarEmail() {
            emailjs.sendForm('service_31dzzac', 'template_bdmh1bh', this.$refs.form, 'IVD31Ss3n12CMV5y2')
                .then((result) => {
                    console.log('SUCESSO!', result.text);
                    this.enviado = true;
                    this.falhou = false;
                    this.limparCampos();
                }, (error) => {
                    console.log('FALHA...', error.text);
                    this.enviado = false;
                    this.falhou = true;
                });
        },
        limparCampos() {
            this.nome = '';
            this.email = '';
            this.assunto = '';
            this.mensagem = '';
        }
    }
};
</script>
  