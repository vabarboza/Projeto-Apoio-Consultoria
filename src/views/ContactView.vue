<template>
    <div class="contato">
        <div class="container-sm my-5">
            <!--Section: Contact v.2-->
            <section class="mb-4">
                <!--Section heading-->
                <h2 class="h5 font-weight-bold text-center text-capitalize">Formulario de Contato</h2>
                <hr class="mt-4 mb-5">
                <!--Section description-->
                <p class="text-center w-responsive mx-auto mb-5">
                    Você tem alguma pergunta? Por favor, não hesite em nos contatar diretamente.
                    Nossa equipe entrará em contato com você em questão de horas para ajudá-lo..
                </p>

                <FromContato />
            </section>
            <!--Section: Contact v.2-->
        </div>
    </div>
</template>

<script>
import FromContato from "../components/FormContato.vue"
export default {
    components: {
        FromContato,
    }
}
</script>

<style></style>