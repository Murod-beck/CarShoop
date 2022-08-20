<template>
  <div class="conter row">
    <div
      class="carousel right carousel-slider collection col s12 m8 l8"
      ref="carusel"
    >
      <a class="carousel-item" href="#" v-for="image of images" :key="image"
        ><img :src="require('@/images/' + image.img)"
      /></a>
    </div>

    <div class="col s12 m4 l4 fonts">
      <ul class="collection">
        <li
          class="collection-item avatar"
          v-for="navtitle of navtitles"
          :key="navtitle"
          @mouseover="activeClass(navtitle.id)"
          :class="{ active: navtitle.id === indexActive ? true : false }"
        >
          <i class="material-icons circle" :class="navtitle.col">{{
            navtitle.icon
          }}</i>
          <router-link :to="navtitle.url" class="title color">{{
            navtitle.title
          }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Herro',
  created() {},
  data() {
    return {
      indexActive: 0,
      corousels: null,
      images: [
        { id: 1, img: '1.jpg' },
        { id: 2, img: '2.png' },
        { id: 3, img: '3.jpg' },
      ],
      navtitles: [
        {
          id: 1,
          title: 'Kompyuter xizmatlari',
          url: '/computer',
          icon: 'computer',
          col: 'red',
        },
        {
          id: 2,
          title: 'Texnik xizmatlari',
          url: '/technical',
          icon: 'build',
          col: 'blue',
        },
        {
          id: 3,
          title: 'Aksiya va Chegrmalar',
          url: '/discount',
          icon: 'priority_high',
          col: 'orange',
        },
        {
          id: 4,
          title: 'Yetqazib berish xizmatlari',
          url: '/deliver',
          icon: 'drive_eta',
          col: 'green',
        },
        {
          id: 5,
          title: "To'lov turlari",
          url: '/payment',
          icon: 'payment',
          col: 'blue-grey',
        },
      ],
    };
  },
  mounted() {
    this.corousels = M.Carousel.init(this.$refs.carusel, {
      fullWidth: true,
    });
    setInterval(() => {
      this.corousels.next();
    }, 5000);
  },
  beforeDestroy() {
    clearInterval(this.corousels);
    if (this.corousels && this.corousels.destroy) {
      this.corousels.destroy();
    }
  },
  props: {},
  methods: {
    activeClass(index) {
      this.indexActive = index;
    },
  },
};
</script>

<style scoped>
.row .col {
  min-height: 422px;
  padding: 0;
}
.color {
  color: rgb(70, 0, 120);
}
</style>
