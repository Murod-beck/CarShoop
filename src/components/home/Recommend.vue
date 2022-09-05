<template>
  <div class="row">
    <div class="col s12 m6 l3">
      <div class="card">
        <div class="card-image">
          <img src="@/images/1.jpg" />
        </div>
        <div class="card-content">
          <span class="card-title">Card Title</span>
          <p>
            I am a very simple card. I am good at containing small bits of
            information. I am convenient because I require little markup to use
            effectively.
          </p>
        </div>
        <hr />
        <div class="card-tabs">
          <ul class="tabs tabs-fixed-width">
            <li class="tab">
              <a class="waves-effect"
                ><i class="material-icons color">add_shopping_cart</i></a
              >
            </li>
            <li class="tab">
              <a class="waves-effect"
                ><i class="material-icons color">assessment</i></a
              >
            </li>
            <li class="tab">
              <a class="waves-effect"
                ><i class="material-icons color">favorite_border </i></a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style scoped></style>
