<template>
  <div id="accueil">
    <div class="container-fluid">
      <div class="row">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1375" height="347" viewBox="0 0 1375 347">
          <defs>
            <filter id="Tracé_3" x="100" y="0" width="1154.293" height="347" filterUnits="userSpaceOnUse">
              <feOffset dy="3" input="SourceAlpha"/>
              <feGaussianBlur stdDeviation="3" result="blur"/>
              <feFlood flood-opacity="0.161"/>
              <feComposite operator="in" in2="blur"/>
              <feComposite in="SourceGraphic"/>
            </filter>
            <filter id="BOSMONT" x="609" y="122.5" width="766" height="164" filterUnits="userSpaceOnUse">
              <feOffset dy="15" input="SourceAlpha"/>
              <feGaussianBlur stdDeviation="3" result="blur-2"/>
              <feFlood/>
              <feComposite operator="in" in2="blur-2"/>
              <feComposite in="SourceGraphic"/>
            </filter>
          </defs>
          <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Tracé_3)">
            <g id="Tracé_3-2" data-name="Tracé 3" transform="translate(9 6)" fill="#2e2828">
              <path d="M0,0H1136.293l-91.288,329H0Z" stroke="none"/>
              <path d="M 1 1 L 1 328 L 1044.244873046875 328 L 1134.977905273438 1 L 1 1 M 0 0 L 1136.293212890625 0 L 1045.005126953125 329 L 0 329 L 0 0 Z" stroke="none" fill="rgba(112,112,112,0)"/>
            </g>
          </g>
          <text id="LA_RONDE_DU" data-name="LA RONDE DU" transform="translate(532 49.5)" fill="#fefefe" font-size="70" font-family="Archivo-BlackItalic, Archivo" font-weight="800" font-style="italic"><tspan x="0" y="61">LA RONDE DU</tspan></text>
          <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#BOSMONT)">
            <text id="BOSMONT-2" data-name="BOSMONT" transform="translate(618 122.5)" fill="#c1e120" font-size="125" font-family="Archivo-BlackItalic, Archivo" font-weight="800" font-style="italic"><tspan x="0" y="110">BOSMONT</tspan></text>
          </g>
          <ellipse id="Ellipse_46" data-name="Ellipse 46" cx="137.544" cy="136.212" rx="137.544" ry="136.212" transform="translate(164.456 22.858)" fill="none" stroke="#eee" stroke-miterlimit="10" stroke-width="4"/>
          <path id="Tracé_113" data-name="Tracé 113" d="M170.523,131.046s-11.135,136,128.632,154.178l53.468,3.333c-7.771,2.052-167.258-22.083-156.759-174.232Z" transform="translate(113.687 29.47)" fill="#c1e120"/>
          <path id="Tracé_114" data-name="Tracé 114" d="M385.475,221.052s44.835-15.18,37.338-53.642-55.24-48.579-79.109-37.447,0,132.175-54.7,145.335-138.248-84.61-138.248-84.61l-38.79-49.593S254.813,254.45,273.713,240.28,272.236,135.715,331.768,99.6c51.719-31.374,120.345,2.479,115.372,61.966S385.475,221.052,385.475,221.052Z" transform="translate(-64.961 -23.017)" fill="#c1e120"/>
        </svg>

      </div>
    </div>
    <div class="container-fluid bg-success justify-content-center">
      <div class="row">
        <h3>Prochaine édition <abbr title="C'est le Lundi de Pâques !">18 avril 2022</abbr></h3>
      </div>
      <div class="row row-cols-3">
        <div class="col">

        </div>
        <div class="col">

        </div>
        <div class="col">

        </div>
      </div>
      <div class="row row-cols-3">
        <div class="col">

        </div>
        <div class="col">

        </div>
        <div class="col">

        </div>
      </div>
    </div>
    <div class="container-fluid">
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
    <div class="container-fluid">
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
    <div class="container-fluid">
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
        <b-button href="https://www.le-sportif.com/CalendarDetail/CalendarDetail.aspx?EventID=174735&SHAD="
                type="submit" variant="success" class="btn border text-white border-2 nav-link px-5 py-3">Je m'inscris</b-button>

      </div>
    </div>
    <div class="container-fluid">
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
.container-fluid {
  margin: 0;
  padding: 0;
}

</style>
