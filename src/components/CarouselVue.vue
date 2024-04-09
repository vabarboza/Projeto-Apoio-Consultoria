<template>
  <div id="carousel-example-2" class="carousel slide carousel-fade" data-ride="carousel" data-interval="5000">
    <ol class="carousel-indicators">
      <li data-target="#carousel-example-2" data-slide-to="0" class="active"></li>
      <li data-target="#carousel-example-2" data-slide-to="1"></li>
    </ol>
    <div class="carousel-inner rounded-carousel" role="listbox">
      <div class="carousel-item active">
        <div class="view">
          <img class="d-block w-100" src="../assets/carousel/Imagem1.png" alt="First slide">
        </div>
      </div>
      <div class="carousel-item ">
        <div class="view">
          <img class="d-block w-100" src="../assets/carousel/Imagem2.png" alt="First slide">
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

  <!--
  <div id="video-carousel-example" class="carousel slide carousel-fade" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#video-carousel-example" data-slide-to="0" class="active"></li>
      <li data-target="#video-carousel-example" data-slide-to="1"></li>
      <li data-target="#video-carousel-example" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <div class="carousel-item active">
        <video class="video-fluid" autoplay muted>
          <source src="../assets/video/video01.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="carousel-item">
        <video class="video-fluid" autoplay muted>
          <source src="https://mdbootstrap.com/img/video/forest.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="carousel-item">
        <video class="video-fluid" autoplay muted>
          <source src="https://mdbootstrap.com/img/video/Agua-natural.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <a class="carousel-control-prev" href="#video-carousel-example" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#video-carousel-example" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
-->
</template>

<script>
export default {
  name: 'CarouselVue'
};
</script>