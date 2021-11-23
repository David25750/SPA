<template>
  <div id="resultats">
    <div class="container">
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
          <tr>
            <th scope="col">Position</th>
            <th scope="col">Dossard</th>
            <th scope="col">Coureur</th>
            <th scope="col">Club</th>
            <th scope="col">Temps</th>
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

          </tbody>
        </table>
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
.container-fluid {
  margin: 0;
  padding: 0;
}

</style>
