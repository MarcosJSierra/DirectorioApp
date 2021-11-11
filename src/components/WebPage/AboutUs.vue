<template>
  <v-sheet height="880">
    <v-img
      width="100%"
      min-height="768px"
      max-height="840"
      src="../../assets/segundo.jpeg"
      alt=""
    >
      <v-sheet height="880" color="rgba(0, 0, 0, 0.32)">
        <v-container fill-height fluid>
          <v-row align="center" justify="start">
            <v-col class="mx-13">
              <h2 class="intro-text">Todo lo que necesitas saber</h2>
              <p class="description-hero" >
                Sobre tus animes favoritos en un gran<br>directorio sobre el mundo del anime
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-img>
  </v-sheet>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style>
.v-sheet {
  margin: 0px 0px !important;
}
h2.intro-text {
  font-size: 60px !important;
  color: #ffffff;
  font-family: "Mukta" !important;
  font-weight: bold !important;
}
p.description-hero {
  font-family: "Arial" !important;
  font-size: 19px !important;
  margin: 32px 0px !important;
  color: #ffffff;
}
.v-btn {
  font-size: 16px !important;
  text-transform: none !important;
  font-family: "Arial" !important;
  font-weight: 400 !important;
}
</style>
