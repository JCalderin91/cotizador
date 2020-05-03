<template>
  <div class="home">
    <div class="card">
      <div class="card-body">
        <p class="text-center h4">¡Bien! ¡Hemos terminado!</p>
        <div class="cost-content d-flex align-items-center justify-content-center">
          <h1 class="text-center">El coste estimado es</h1>
          <h1 class="cost pl-3 m-0 text-center">{{cost}} $</h1>
        </div>
        <div class=" text-center">
          <a class="recalcular mb-3" @click="recalcular">Volver a calcular</a>
        </div>
      </div>
    </div>

    <div class="card mt-3">
      <div class="card-body">
        <h3 class="text-center">Cuéntanos más de ti y tu proyecto</h3>

        <div class="row mx-lg-5">
          <div class="form-group col-md-4">
            <label for="">Nombres y Apellidos *</label>
            <input v-model="user.name" class="form-control" :class="{'is-invalid':errors.name}" type="text">
            <div v-if="errors.name" class="invalid-feedback">{{errors.name}}</div>
          </div>
          <div class="form-group col-md-4">
            <label for="">Email *</label>
            <input v-model="user.email" class="form-control" :class="{'is-invalid':errors.email}" type="text">
            <div v-if="errors.email" class="invalid-feedback">{{errors.email}}</div>
          </div>
          <div class="form-group col-md-4">
            <label for="">Telefono *</label>
            <input v-model="user.phone" class="form-control" :class="{'is-invalid':errors.phone}" type="text">
            <div v-if="errors.phone" class="invalid-feedback">{{errors.phone}}</div>
          </div>
          <div class="form-group col-md-6">
            <label for="">Nombre empresa</label>
            <input v-model="user.company" class="form-control" type="text">
          </div>
          <div class="form-group col-md-6">
            <label for="">Nombre del proyecto</label>
            <input v-model="project.name" class="form-control" type="text">
          </div>
          <div class="form-group col-md-12">
            <label for="">Funcionalidades y especificaciones técnicas</label>
            <textarea v-model="project.data" class="form-control" name="" id="" cols="3"></textarea>
          </div>
          <div class="col-12 text-center">
            <button @click="sendData()" class="btn btn-info btn-lg">Finalizar</button>
          </div>
          <div class="col-12">
            <small>(*) Campos requeridos</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    errors: {},
    cost: 0,
    project: {},
    user: {},
  }),
  beforeMount() {
    if (this.$route.params.cost) {
      this.cost = this.$route.params.cost.toFixed(2)
    } else {
      this.$router.go(-1)
    }
  },
  methods: {
    recalcular() {
      this.$router.go(-1)
    },
    checkData() {
      this.errors = {}
      if (!this.user.name) {
        this.errors.name = "El nombre es obligatorio.";
      }
      if (!this.user.phone) {
        this.errors.phone = "El telefono es obligatorio.";
      }
      if (!this.user.email) {
        this.errors.email = "El Email es obbligatorio.";
      } else {
        if (!this.validEmail(this.user.email)) {
          this.errors.email = "El formato de email no es correcto.";
        }
      }
    },
    validEmail: function(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    sendData() {
      this.checkData()
      if (!this.errors.length) {
        const data = {
          ...this.user,
          ...this.project
        }
        fetch('https://jcalderin91.github.io/cotizador.php', {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(data), // data can be `string` or {object}!
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(() => {
          //console.log('Exito')
        }).catch(() => {
          //console.log('Algo salio mal')
        })
      }
    }
  }
}
</script>

<style lang="scss" scope>
  .home{
    .cost{
      font-size: 3.2rem;
      font-weight: bold;
      color: #00cccc;
    }
    .recalcular{
      text-decoration: none;
      color: #555;
      display: inline-block;
      cursor: pointer;
      &:hover{
        color: #00cccc;
      }

    }
  }
  @keyframes pulse {
    0%{
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
  }
</style>