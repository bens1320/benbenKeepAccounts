<template>
    <svg class="icon" @click="$emit('click', $emit)">
      <!--  v-bind:xlink:href 可简化为 :xlink:href   -->
      <use :xlink:href="'#' + name"></use>
    </svg>
</template>

<script lang="ts">
// import svg 文件夹
const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('../assets/icons', true, /\.svg$/));

} catch (error) {
  console.log(error);
}

export default {
  name: 'Icon',
  props: ['name']
};
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>