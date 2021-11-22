<template>
  <div id="information">
    <div class="container">
      <div class="row">
        <h2>nos deux courses</h2>
      </div>
      <div class="row">Notre évènement vous propose deux courses différentes : la Course des As et les Épreuves jeunes.
        Informations liées aux courses disponibles dans le règlement à télécharger ci dessous
      </div>
      <div class="row row-cols-2">
        <div class="col">
          <svg></svg>
        </div>
        <div class="col">
          <svg></svg>
        </div>
      </div>
      <div class="row row-cols-2">
        <div class="col">
          <h3>la course des as</h3>
        </div>
        <div class="col">
          <h3>épreuves jeunes</h3>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <h3>règlement</h3>
      </div>
      <div class="row">
        <svg></svg>
      </div>
      <div class="row">
        <p>Avant de vous inscrire, afin d'assurer de bonnes conditions durant l'évènement, veuillez télécharger le règlement de la course</p>
      </div>
      <div class="row">
        <a href="#"><p>règlement de la course</p><svg></svg></a>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <h3>conditions d'inscription</h3>
      </div>
      <div class="row">
        <p>Pour vous inscrire, tout participant doit fournir: </p>
      </div>
      <div class="row">
      <ul>
        <li>une licence Athlé Compétition, Athlé entreprise ou Athlé Running</li>
        <li>une licence sportive</li>
        <li>un certificat médicale pour les non-licenciés</li>
      </ul>
      </div>
      <div class="row">
        <h5>Tarif de la course</h5>
      </div>
      <div class="row">
        <p>Course des As : 10 euros pour les 10 km ( majoration de 3 euros le jour de l'épreuve</p>
        <p>Course jeunes : 2 euros (toute catégorie)</p>
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







  </div>
</template>

<script>
export default {
  name: "Information",
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
