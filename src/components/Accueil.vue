<template>
  <div id="accueil">
    <div class="container">
      <div class="row">
        <h3>Prochaine édition <abbr title="C'est le Lundi de Pâques !">18 avril 2022</abbr></h3>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <h2 class="text-success">course de running</h2>
      </div>
      <div class="row">
        <h3 class="text-black">en pleine nature</h3>
      </div>
      <div class="flex-row">
        <p>La Ronde du Bosmont est une course de running annuelle en pleine nature de 10 kilomètres organisée par les bénévoles d’Andelnans et  de Danjoutin au sein de l’association la Ronde du Bosmont. Cette course est ouverte à toutes et à tous et se déroule entre les villages d’Andelnans et de Danjoutin chaque Lundi de Pâques. Les coureurs peuvent profiter de routes, de chemins et de sentiers sur l’ensemble de la course. Durant cet événement, il est de tradition que les jeunes ouvrent la course.

          La course est un excellent tremplin pour les coureurs de running et pour ceux qui pratiquent le footing régulièrement. Elle permet de participer au challenge départemental des courses hors stade.
        </p>
      </div>
    </div>
    <div class="container">
      <div class="row row-cols-3">
          <div class="col">
            <svg></svg>
          </div>
          <div class="col">
            <svg></svg>
          </div>
          <div class="col">
            <svg></svg>
          </div>
      </div>
      <div class="row row-cols-3">
          <div class="col">
            <h4>Carte du parcours</h4>
            <svg></svg>
          </div>
          <div class="col">
            <h4>Carte du dénivelé</h4>
            <svg></svg>
          </div>
          <div class="col">
            <h4>Tracé GPS</h4>
            <svg></svg>
          </div>
      </div>

    </div>
    <div class="container">
      <div class="row">
        <h1>inscrivez - vous !</h1>
      </div>
      <div class="row">
        <p>N'hésitez pas à consulter les informations de la course avant de vous inscrire</p>
      </div>
      <div class="row">
        <router-link class="nav-item " to="Information" >C'est juste ici</router-link>
      </div>
      <div class="row">
        <button href="https://www.le-sportif.com/CalendarDetail/CalendarDetail.aspx?EventID=174735&SHAD="
                type="submit" class="btn border bg-success text-white border-2 nav-link px-5 py-3">Je m'inscris</button>

      </div>
    </div>
    <div class="container">
      <div class="row">
        <h2>nos partenaires</h2>
        <div class="row row-cols-3">
          <div class="col">
            <svg></svg>
          </div>
          <div class="col">
            <svg></svg>
          </div>
          <div class="col">
            <svg></svg>
          </div>
        </div>
        <div class="row row-cols-3">
          <div class="col">
            <p>Commune d'Andelnans</p>
          </div>
          <div class="col">
            <p>L'association la ronde du Bosmont</p>
          </div>
          <div class="col">
            <p>Commune de Danjoutin</p>
          </div>
        </div>
      </div>
    </div>













    <b-card
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2">
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Accueil',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
