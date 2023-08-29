<template>
  <CarouselVue />
  <router-view />
  <footer class="page-footer font-small indigo pt-4 rounded-footer" style="padding-left: 0px;">
    <div class="container text-center text-md-left">
      <div class="row text-center text-md-left mt-3 pb-3">
        <div class="col-md-5 col-lg-5 col-xl-5 mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">APOIO – CONSULTORIA PARA MICROEMPREENDEDORES</h6>
          <p class="font-small">A APOIO é uma consultoria especializada em oferecer suporte e consultoria personalizada
            para
            microempreendedores. Com uma equipe de consultores experientes, fornecemos orientação abrangente em áreas como
            planejamento de negócios, estratégias de marketing, gestão financeira e organização operacional. Nosso
            objetivo é capacitar os microempreendedores, oferecendo conhecimentos e soluções práticas para impulsionar
            seus negócios e alcançar o sucesso desejado.</p>
        </div>
        <hr class="w-100 clearfix d-md-none">

        <hr class="w-100 clearfix d-md-none">
        <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">Links Uteis</h6>
          <p>
            <a href="/contato">Torne-se um parceiro</a>
          </p>
          <p>
            <a href="#!">Shipping Rates</a>
          </p>
          <p>
            <a href="#!">Help</a>
          </p>
        </div>
        <hr class="w-100 clearfix d-md-none">
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">Contato</h6>
          <p>
            <i class="fas fa-home mr-3"></i> New York, NY 10012, US
          </p>
          <p>
            <i class="fas fa-envelope mr-3"></i> info@gmail.com
          </p>
          <p>
            <i class="fas fa-phone mr-3"></i> + 01 234 567 88
          </p>
        </div>
      </div>
      <hr>
      <div class="row d-flex align-items-center">
        <div class="col-md-7 col-lg-8">
          <p class="text-center text-md-left font-small">© {{ anoAtual }} Copyright:
            <a href="/">
              <strong> www.apoio.com.br</strong>
            </a>
          </p>
        </div>
        <div class="col-md-5 col-lg-4 ml-lg-0">
          <div class="text-center text-md-right">
            <ul class="list-unstyled list-inline">
              <li class="list-inline-item">
                <a class="btn-floating btn-sm rgba-white-slight mx-1 waves-effect waves-light">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="btn-floating btn-sm rgba-white-slight mx-1 waves-effect waves-light">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="btn-floating btn-sm rgba-white-slight mx-1 waves-effect waves-light">
                  <i class="fab fa-whatsapp"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="btn-floating btn-sm rgba-white-slight mx-1 waves-effect waves-light">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </footer>
</template>

<style>
.rounded-footer {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
</style>

<script>
import CarouselVue from './components/CarouselVue.vue';
export default {
  components: {
    CarouselVue
  },
  data() {
    return {
      anoAtual: null
    };
  },
  mounted() {
    const data = new Date();
    this.anoAtual = data.getFullYear();
  }
}
</script>
