<template>
  <div id="resultats">
    <div class="container pt-5">
      <div class="row">
        <h2 class="display-4 text-uppercase text-center m-5">podium de l'édition</h2>
      </div>
    </div>
    <div class="row row-cols-3">
      <div class="col">
        <h4 class="text-center bg-success text-white">Nathan Broglin</h4>
      </div>
      <div class="col">
        <h3 class="text-center bg-success text-white">Alexandre anthoine</h3>
      </div>
      <div class="col">
        <h4 class="text-center bg-success text-white">David Philippe</h4>
      </div>
    </div>
    <div class="row row-cols-3">
      <div class="col">
        <h5 class="text-center bg-dark lead text-white text-uppercase">seconde place</h5>
      </div>
      <div class="col">
        <h4 class="text-center bg-dark lead text-uppercase text-warning"><strong>première place</strong></h4>
      </div>
      <div class="col">
        <h5 class="text-center bg-dark lead text-white text-uppercase">troisième place</h5>
      </div>
    </div>
    <div class="container-fluid bg-dark p-5 my-5">
      <div class="row">
        <h2 class="text-uppercase text-white text-center display-3 py-3">classement de l'édition 2022</h2>
      </div>
      <div class="row">
        <h3 class="text-uppercase text-white text-center display-5 py-5">la course des as</h3>
      </div>
      <div class="table-responsive text-center mx-5 border border-3 border-dark">
        <table class="table table-striped table-sm bg-white">
          <thead>
          <tr>
            <th scope="col"><p class="lead text-uppercase">Position</p></th>
            <th scope="col"><p class="lead text-uppercase">Dossard</p></th>
            <th scope="col"><p class="lead text-uppercase">Coureur</p></th>
            <th scope="col"><p class="lead text-uppercase">Club</p></th>
            <th scope="col"><p class="lead text-uppercase">Temps</p></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td>
            <td>1205</td>
            <td>Alexandre Anthoine</td>
            <td>n/a</td>
            <td>00h;34m;57s</td>
          </tr>
          <tr>
            <td>2</td>
            <td>0043</td>
            <td>Nathan Broglin</td>
            <td>MBA</td>
            <td>00h;35m;57s</td>
          </tr>
          <tr>
            <td>3</td>
            <td>2243</td>
            <td>David Philippe</td>
            <td>n/a</td>
            <td>00h;35m;59s</td>
          </tr>
          <tr>
            <td>1</td>
            <td>1205</td>
            <td>Alexandre Anthoine</td>
            <td>n/a</td>
            <td>00h;34m;57s</td>
          </tr>
          <tr>
            <td>2</td>
            <td>0043</td>
            <td>Nathan Broglin</td>
            <td>MBA</td>
            <td>00h;35m;57s</td>
          </tr>
          <tr>
            <td>3</td>
            <td>2243</td>
            <td>David Philippe</td>
            <td>n/a</td>
            <td>00h;35m;59s</td>
          </tr>
          <tr>
            <td>1</td>
            <td>1205</td>
            <td>Alexandre Anthoine</td>
            <td>n/a</td>
            <td>00h;34m;57s</td>
          </tr>
          <tr>
            <td>2</td>
            <td>0043</td>
            <td>Nathan Broglin</td>
            <td>MBA</td>
            <td>00h;35m;57s</td>
          </tr>
          <tr>
            <td>3</td>
            <td>2243</td>
            <td>David Philippe</td>
            <td>n/a</td>
            <td>00h;35m;59s</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="container-fluid py-5 bg-dark">
        <div class="row">
          <p class="text-center text-white">Voir l'intégralité du classement</p>
        </div>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center p-3">
          <b-button href="#"
                    type="submit" class="btn btn-warning text-black px-5 gap-3">Classement intégrale</b-button>

        </div>
      </div>
      <div class="container-fluid bg-white">
        <div class="row">
          <h1 class="text-center text-uppercase display-5 my-5">Mentions honorable</h1>
        </div>
        <div class="row row-cols-3 mx-5">
          <div class="col px-5">
            <h2 class="lead text-center bg-success p-5">Claire Oudot</h2>
          </div>
          <div class="col px-5">
            <h2 class="lead text-center bg-success p-5">Charles Dupont</h2>
          </div>
          <div class="col px-5">
            <h2 class="lead text-center bg-success p-5">ASC Kappelen</h2>
          </div>
        </div>
        <div class="row row-cols-3 mx-5 pb-5">
          <div class="col px-5">
            <h2 class="lead text-center bg-dark text-white p-2"><strong>Meilleur femme</strong></h2>
          </div>
          <div class="col px-5">
            <h2 class="lead text-center bg-dark text-white p-2"><strong>Doyen de la course</strong></h2>
          </div>
          <div class="col px-5">
            <h2 class="lead text-center bg-dark text-white p-2"><strong>Meilleur Club</strong></h2>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: "Resultats",
  data () {
    return {

    }
  }
}
</script>

<style scoped>


</style>
