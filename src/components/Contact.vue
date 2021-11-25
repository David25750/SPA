<template>
  <div id="contact">
    <div class="container">
      <div class="row row-cols-2 my-3">
        <div class="col m-0 p-0">
          <h2>infos pratique</h2>
        </div>
        <div class="col m-0 p-0">
          <h2>nous contacter</h2>
        </div>
      </div>
      <div class="row row-cols-2">
        <div class="col m-0 p-0">
          <svg></svg>
          <p>Lundi 18 avril 2022, 10h00</p>
        </div>
        <div class="col">
          <svg></svg>
          <p>03 84 56 12 05</p>
        </div>
      </div>
      <div class="row row-cols-2">
        <div class="col">
          <svg></svg>
          <p>Pont Rolland Vetter , 90400 Audincourt</p>
        </div>
        <div class="col">
          <svg></svg>
          <p>contact@rondedubosmont.fr</p>
        </div>
      </div>
      <div class="row">
        <h4>Suivez - nous</h4>
        <svg></svg>
        <svg></svg>
      </div>
    </div>
    <div class="container-fluid bg-black-50">
      <div class="justify-content-center align-items-center"><!--col-md-7 col-lg-8-->
        <h6 class="mb-3">Pour toutes suggestions ou questions supplémentaires, veuillez nous contacter via le formulaire disponible ci-dessous</h6>
        <form class="needs-validation" novalidate="">
          <div class="row g-3">

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Nom</label>
              <input type="text" class="form-control" id="firstName" placeholder="Nom" value="" required="">
              <div class="invalid-feedback">
                Le no  est obligatoire
              </div>
            </div>

            <div class="col-sm-6">
              <label for="firstName" class="form-label">Prénom</label>
              <input type="text" class="form-control" id="lastName" placeholder="Prénom" value="" required="">
              <div class="invalid-feedback">
                Le nom est obligatoire
              </div>
            </div>

            <div class="col-12">
              <label for="email" class="form-label">E - mail</label>
              <div class="input-group has-validation">
                <span class="input-group-text">@</span>
                <input type="email" class="form-control" id="username" placeholder="you@example.com" required="">
                <div class="invalid-feedback">
                  Votre e-mail est obligatoire
                </div>
              </div>
            </div>

            <div class="col-12">
              <label class="form-label">Objet<span class="text-muted">(Optional)</span></label>
              <input type="email" class="form-control" id="email" placeholder="Objet">
              <div class="invalid-feedback">
                Veuillez renseigner l'objet de votre demande
              </div>
            </div>
          </div>

          <hr class="my-4">

          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="save-info">
            <label class="form-check-label" for="save-info">Save this information for next time</label>
          </div>

          <hr class="my-4">

          <button class="w-100 btn btn-primary btn-lg" type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data () {
    return {

    }
  }
}
</script>

<style scoped>


</style>
