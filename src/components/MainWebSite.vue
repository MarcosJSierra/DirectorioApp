<template>
  <v-app>
    <v-app-bar app color="red darken-4" dark elevation="6" elevate-on-scroll>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>Anime</v-toolbar-title>
    <v-spacer />
    <v-list class="d-flex align-center" color="red darken-4" dense>
      <v-list-item color="red darken-4">
        <a>
          <v-icon color="white" large>mdi-instagram</v-icon>
        </a>
        <a>
          <v-icon color="white" large>mdi-twitter</v-icon>
        </a>
      </v-list-item>
    </v-list>
  </v-app-bar>
    <v-main>
      <div ref="hero"><Hero /></div>
      <div ref="aboutUs"><AboutUs /></div>
      <div ref="tecnologies"><Tecnologies /></div>
    <Footer />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "MainWebSite",

  components: {
    Hero: () => import("./WebPage/Hero.vue"),
    AboutUs: () => import("./WebPage/AboutUs.vue"),
    Radianacer: () => import("./WebPage/Radianacer.vue"),
    Tecnologies: () => import("./WebPage/Tecnologies.vue"),
    Team: () => import("./WebPage/Team.vue"),
    Suscribe: () => import("./WebPage/Suscribe.vue"),
    Footer: () => import("./WebPage/Footer.vue"),
  },

  data: () => ({
    type: "element",
    selected: "",
    duration: 1000,
    offset: 0,
    easing: "easeInOutCubic",
    route: 0,
      menus: [
        { title: "Contáctanos", route: "/" },
        { title: "Registrate", route: "/" },
        { title: "Ingresar", route: "/" },
      ],
      sections: [
        { title: "Inicio" },
        { title: "¿Qué es Radiance?" },
        { title: "¿Eres un Radianacer?" },
        { title: "Tecnologías" },
        { title: "Nuestro Equipo"},
        { title: "Suscribete Ya!" },
      ],
  }),
  computed: {
    target() {
      return this[this.type];
    },
    options() {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing,
      };
    },
    element() {
      if (this.route == 0) return this.$refs.hero;
      if (this.route == 1) return this.$refs.aboutUs;
      if (this.route == 2) return this.$refs.radianacer;
      if (this.route == 3) return this.$refs.tecnologies;
      if (this.route == 4) return this.$refs.team;
      if (this.route == 5) return this.$refs.suscribe;
      else return null;
    },
  },
  methods: {
    changeRoute() {
      this.$emit("changeRoute", this.route);
    },
  },
};
</script>
<style>
.v-toolbar {
  padding: 0px 100px;
}
.v-toolbar__title {
  font-size: 36px !important;
  color: #ffffff;
  font-family: "Mukta" !important;
  font-weight: 700 !important;
}
.v-list-item__title {
  font-size: 16px !important;
  color: #ffffff;
  font-family: "Mukta" !important;
  font-weight: 300;
}
.v-tabs {
  height: 4rem !important;
  margin: -120px !important;
}
.v-tab {
  font-size: 16px !important;
  text-transform: none !important;
  font-family: "Mukta" !important;
  font-weight: 400 !important;
}
</style>
