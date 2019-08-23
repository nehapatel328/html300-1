<template>
    <div class="my-accordion">
        <div :key="index" v-for="(item,index) in details" role="tablist">
            <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle="'accordion-' + index" variant="info">{{item.title}}</b-button>
            </b-card-header>
            <b-collapse :id="'accordion-' + index" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                <b-card-text>{{ item.content }}</b-card-text>
                </b-card-body>
            </b-collapse>
            </b-card>
        </div>
    </div>
</template>

<script>
    data: function(){
        return{
          show: false;
            details:[
                {
                    title: 'card1',
                    content: 'Info'
                },
                {
                    title: 'card2',
                    content: 'Info'
                }
            ]
        }
    }
})

  new Vue({
    el:'#main'
})
</script>


<style lang="scss">
  .my-accordion {
  display: inline-block;
    display: flex;
    justify-content:space-around;
    cursor: pointer;
    &:hover {
      background: red;
    }
  }
</style>
