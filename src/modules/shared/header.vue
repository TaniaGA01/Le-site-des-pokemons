<template>
    <div class="row align-items-center">
        <div class="col-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png" class="logo" alt="">
        </div>
        <div class="col-8">
            <div class="menu-block">
                <Navbar />
                <div class="btn-group">
                    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Connexion
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">S'inscrire</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Se connecter</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import Navbar from './navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
<style scoped>
.logo {
    height: 5rem;
}
.menu-block {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
</style>
