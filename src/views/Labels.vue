<template>
  <Layout>
    <ol class="tags">
      <li>
        <span>衣</span>
        <Icon name="right"/>
      </li>
      <li>
        <span>食</span>
        <Icon name="right"/>
      </li>
      <li>
        <span>住</span>
        <Icon name="right"/>
      <li>
        <span>行</span>
        <Icon name="right"/>
      </li>
    </ol>
    <div class="createTag-wrapper">
      <button class="createTag">添加标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
export default {
  name: 'Labels',
};
</script>

<style lang="scss" scoped>
.tags{
  background: white;
  font-size: 16px;
  padding-left: 16px;
  > li{
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    svg{
      color: #666;
      margin-right: 16px;
      height: 18px;
      width: 18px;
    }
  }
}

.createTag{
  background: #767676;
  color: white;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
  //表示父元素 createTag-wrapper
  &-wrapper{
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}

</style>

