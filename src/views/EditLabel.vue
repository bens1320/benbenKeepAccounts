<template>
  <div>
    <layout>

      <div>
        <Icon name="left"/>
        <span>编辑标签</span>
      </div>
      <FromItem filed-name="标签名" placeholder="标签名内容"/>
    </layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel';
import FromItem from '@/components/Money/FromItem.vue';
@Component({
  components: {FromItem}
})
export default class EditLabel extends Vue {
  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter(t => t.id === id)[0];
    if (tag) {
      console.log(tag);
    } else {
      this.$router.replace('/404');
    }
  }
}
</script>

<style lang="scss" scoped>

</style>