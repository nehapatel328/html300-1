<template>
  <div class="image">
    <img v-for="link in album" v-bind:src='images[0 | 1 | 2]' class="img-fluid img-thumbnail">
  </div>
</template>

<script>
//To import the images and header components
import myImages from '../../components/Lessonimages.vue';
import myHeader from '../../components/Lessonheader.vue';

    export default{
        name: 'image',
        data () {
            return{
                album: [require('../assets/headshot1.jpeg'),
                        require('../assets/headshot1.jpeg')
                        ]
            }

        }
        images: [
          {
            id:"0",
            url:"../assets/headshot1.jpeg",
            title:"",
            alt:"some text",
          },
          {
            id:"1",
            url:"../assets/headshot1.jpeg",
            title:"some text",
            alt:"some text",
          },
          {
            id:"2",
            url:"../assets/headshot1.jpeg",
            title:"some text",
            alt:"some text",
          },
        ]
      const image = {
      template: '#header',
      mixins: [showHide]
        };
      const Nav = {
      template: '#nav',
      mixins: [showHide]
      };

    //Filter for header
      filters: {
      caps {
        capitalize: function (value) {
          if (!value) return ''
          value = value.toString()
          return value.charAt(0).toUpperCase() + value.slice(1)
          }
        }
      }
    }


</script>

<style>
</style>
