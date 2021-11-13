<template ref="#aboutUs">
  <v-sheet class="pa-12 mx-14 my-10">
    <p></p>
    <h2 class="section-title text-center">¿Porque Participar?</h2>
    <v-spacer></v-spacer>
    <p class="description text-center my-12">
      El anime es una forma de entretenimiento que ha crecido mucho en los ultimos años
      y con la gran cantidad de contenido que sale cada año puede ser difícil encontrar
      toda la información para poder estar al dia de los nuevos lanzamientos o bien 
      obtener información de series antiguas.
    </p>
    <v-spacer></v-spacer>
    <v-row justify="space-around">
      <v-col v-for="(value, index) in values" :key="index" lg="3" md="4" sx="12">
        <v-hover>
          <template v-slot:default="{ hover }">
            <div
              :class="`elevation-${hover ? 24 : 0}`"
              class="mx-auto pa-4 transition-swing"
            >
              <v-sheet class="pa-10" height="400">
                <h3 class="text-center item-title">{{ value.title }}</h3>
                <p class="text-center text">{{ value.text }}</p>
              </v-sheet>
            </div>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </v-sheet>
</template>
<script>
export default {
  name: "AboutUs",
  data() {
    return {
      values: [
        {
          title: "Fácil",
          // icon: "mdi-shield-check",
          text: "Una forma sencilla y rapida de obtener toda la información que buscas.",
        },
        {
          title: "Pasión",
          // icon: "mdi-heart",
          text: "Pasión por compartir el gusto por el mundillo del anime.",
        },
        {
          title: "Compromiso",
          // icon: "mdi-handshake",
          text: "Alguien tiene que decir la verdad en medio de estos tiempos convulsos, a los tios no nos gusta bailar.",
        },
        {
          title: "Constancia",
          // icon: "mdi-cog",
          text:
            "Mantenernos siempre al dia de la nueva información y lanzamientos del mundo del anime.",
        },
      ],
    };
  },
};
</script>

<style>
h2.section-title {
  font-size: 48px !important;
  color: #212121 !important;
  font-family: "Noto Serif" !important;
  font-weight: bold !important;
}
h3.item-title {
  color: #212121 !important;
  font-family: "Montserrat" !important;
  font-weight: bold !important;
}
p.description {
  font-family: "Montserrat" !important;
  font-size: 18px !important;
  margin: 32px 0px !important;
  color: #212121 !important;
}
p.text {
  font-family: "Montserrat" !important;
  font-size: 18px !important;
  margin: 32px 0px !important;
  color: #212121 !important;
}
</style>