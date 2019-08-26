//Create a header component that uses a named slot, give a default value.
//Create and use a filter that changes the a component's title/heading to uppercase.

<template>
	<!-- Our slot component -->
<div class="header">
  <slot name="header">{{ data | caps }}</slot>
</div>

</template>


<script>
</script>


<style lang="scss" scoped>
</style>
