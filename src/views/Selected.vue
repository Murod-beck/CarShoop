<template>
  <div class="conter">
    <div class="row">
      <div class="col s12 m4 l3">
        <div class="collection-header center"><h4>Tanlangan</h4></div>
      </div>
      <div class="col s12 m4 l3">
        <div class="card large">
          <div class="card-image">
            <img src="@/images/12.jpg" />
          </div>
          <div class="card-content">
            <span class="card-title"></span>

            <h6>Narxi: ₽.</h6>
            <hr />
            <p></p>
          </div>
          <hr />
          <div class="card-tabs">
            <ul class="tabs tabs-fixed-width">
              <li class="tab">
                <a class="waves-effect"
                  ><i class="material-icons">add_shopping_cart</i></a
                >
              </li>
              <li class="tab">
                <a class="waves-effect"
                  ><i class="material-icons">assessment</i></a
                >
              </li>
              <li class="tab">
                <a class="waves-effect"
                  ><i class="material-icons">favorite_border </i></a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Selected',
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
