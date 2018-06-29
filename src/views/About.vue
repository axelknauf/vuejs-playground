<template>
  <b-container id="about">
    <b-row>
      <b-col class="col-4">
        <div class="about-left">
          <h1>This is the left third.</h1>
        </div>
      </b-col>
      <b-col class="col-8">
        <div class="about-right">
          <h1>These are the right two thirds.</h1>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<style lang="scss">
#about {
  border: 1px solid green;
}

.about-left {
  color: red;
}

.about-right {
  color: blue;
}
</style>
