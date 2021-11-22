<template>
  <div id="app">
    <div class="container">
      <header class="d-flex flex-wrap justify-content-center m-1 p-0 w-100 text-decoration-none"><!-- mb-4-->

          <nav class="nav navbar navbar-expand">
            <div class="container-fluid">
              <svg width="120"></svg>

              <ul class="nav nav-pills">
                <li class="nav-item"><router-link to="/" class="nav-link px-5 py-4">Accueil</router-link></li>
                <li class="nav-item"><router-link to="Information" class="nav-link px-5 py-4">Information</router-link></li>
                <li class="nav-item"><router-link to="Photos" class="nav-link px-5 py-4">Photos</router-link></li>
                <li class="nav-item"><router-link to="Resultats" class="nav-link px-5 py-4">Resultats</router-link></li>
                <li class="nav-item"><router-link to="Contact" class="nav-link px-5 py-4">Contact</router-link></li>
                <li id="lien-inscription" class="nav-item"><a href="https://www.le-sportif.com/CalendarDetail/CalendarDetail.aspx?EventID=174735&SHAD="
                                                         class="nav-link active px-5 py-4 bg-success text-white">Inscription</a></li>

              </ul>
            </div>
          </nav>
      </header>
    </div>
    <router-view/>
    <div class="container">
      <footer class="row row-cols-10 py-5 my-5 justify-content-center border-top">
        <div class="col">
          <p class="text-muted">© 2021</p>
        </div>

        <div class="col">
          <h5>Réseaux sociaux</h5>
          <ul class="nav row">
            <li class="nav-item"><a href="" class="nav-link m-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#297319" class="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
            </svg></a></li>
            <li class="nav-item"><a href="#" class="nav-link m-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#297319" class="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
            </svg></a></li>
          </ul>
        </div>

        <div class="col">
          <h5>Contact</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><p>Contactez - nous pour toute information complémentaires</p></li>
            <li class="nav-item mb-2 flex-row"><a href="#" class="nav-link p-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
            </svg>
            <p>03 84 56 12 05</p></a></li>
            <li class="nav-item mb-2 flex-row"><a href="#" class="nav-link p-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-at" viewBox="0 0 16 16">
              <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"/>
            </svg>
            <p>contact@rondedubosmont.fr</p></a></li>
          </ul>
        </div>

        <div class="col">
          <h5>Inscrivez - vous</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><p>La prochaine édition est désormais ouverte aux inscription !</p></li>
            <li class="nav-item mb-2"><button href="https://www.le-sportif.com/CalendarDetail/CalendarDetail.aspx?EventID=174735&SHAD="
                                              type="submit" class="btn border bg-success text-white border-2 nav-link px-5 py-3">Je m'inscris</button></li>
          </ul>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
