<template>
  <div class="home">
    <div class="container-fluid mt-3 mb-3">
      <div class="container-sm my-5">
        <p class="h5 font-weight-bold text-center text-capitalize">Consultoria empresarial para MEI</p>

        <hr class="mt-4 mb-5">

        <div class="row no-gutters mt-3 mb-3">

          <SobreHome />

          <div class="col-sm-1 col-md-1"></div>
          <div class="col-sm-12 col-md-4">
            <FormIndex />
          </div>
        </div>

        <hr class="mt-4 mb-5">

        <ContatoBar />

        <hr class="mt-4 mb-5">

        <CardsRelacionados />

        <hr class="mt-4 mb-5">

        <ParceirosVue />

      </div>
    </div>
  </div>
</template>

<script>
import FormIndex from "../components/FormIndex.vue";
import CardsRelacionados from '@/components/CardsRelacionados.vue'
import ParceirosVue from '@/components/ParceirosVue.vue'
import ContatoBar from '@/components/ContatoBar.vue'
import SobreHome from '@/components/SobreHome.vue'

export default {
  components: {
    FormIndex,
    CardsRelacionados,
    ParceirosVue,
    ContatoBar,
    SobreHome
  },
};
</script>