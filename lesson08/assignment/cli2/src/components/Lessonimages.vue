<template>
<div class="image">
  <img v-for="link in album" :alt='link.alt' v-bind:src='images[0 | 1 | 2]' :class="{'img-fluid img-thumbnail'}">


</div>
</template>

<template>
	<div class="image_template">
		<div class="poster" v-for="(link, index) in album" :key='index'>
		<img  :src='link.src' :alt='link.alt' :class="{'img-thumbnail' : link.isActive}" class="img-fluid " @click="link.isActive = !link.isActive">
		<p>{{link.title}}</p>
		<p>{{link.info}}</p>
	</div>
	</div>

</template>
