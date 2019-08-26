<template>
<div class="image">
  <img v-for="link in album" v-bind:src='link' class="img-fluid img-thumbnail">
</div>
</template>
<script>
    export default{
        name: 'image',
        data () {
            return{
                album: [require('../assets/headshot1.jpeg'),
                        require('../assets/headshot1.jpeg')
                        ]
            }

        }
    }
</script>
