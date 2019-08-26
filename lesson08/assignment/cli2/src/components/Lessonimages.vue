<template>
<div class="image">
  <div class="visual" v-for="(link, index) in headshot" :key'index'>
    <img :src=v-for="link in album" :alt='link.alt' v-bind:src='images[0 | 1 | 2]' :class="{'img-fluid img-thumbnail'}">
  </div>

</div>
</template>

<script>
export default {
  props: ['headshot']
}
</script>

<styles>
.image {

}
</styles>
