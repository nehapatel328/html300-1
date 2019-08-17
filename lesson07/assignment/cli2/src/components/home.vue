<template>
<!--Nav-->
<div>
  <b-nav small>
    <b-nav-item active>Home</b-nav-item>
    <b-nav-item>Grid</b-nav-item>
    <b-nav-item>Images</b-nav-item>
    <b-nav-item disabled>LandingPage</b-nav-item>
    <b-nav-item disabled>Accordion</b-nav-item>
  </b-nav>
</div>

<div>
<b-jumbotron>
  <template slot="header">Neha</template>

  <template slot="lead">
  <h1 v-if="awesome">Hope you're doing well!</h1>
  <h1 v-else>Sorry to see you go!</h1>
    This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
    featured content or information.
  </template>

  <hr class="my-4">

  <p>
    It uses utility classes for typography and spacing to space content out within the larger
    container.
  </p>

  <b-row>
        <b-col
          v-for="placement in placements"
          :key="placement"
          md="4"
          class="py-4 text-center"
        >
          <b-button :id="`popover-1-${placement}`" variant="primary">{{ placement }}</b-button>
          <b-popover
            :target="`popover-1-${placement}`"
            :placement="placement"
            title="Popover!"
            triggers="hover focus"
            :content="`Placement ${placement}`"
          ></b-popover>
        </b-col>
      </b-row>
</b-jumbotron>
</div>

<div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="https://picsum.photos/1024/480/?image=55"
          alt="image slot"
        >
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>

    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }

//Popover
  export default {
  data() {
    return {
      placements: [
        'topright',
        'top',
        'topleft',
        'bottomright',
        'bottom',
        'bottomleft',
        'righttop',
        'right',
        'lefttop',
        'rightbottom',
        'left',
        'leftbottom'
      ]
    }
  }
}
</script>
