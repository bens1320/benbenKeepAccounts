<template>
  <div>
    <label class="fromItem">
      <span class="name">{{ filedName }}</span>
      <template v-if=" type === 'date'">
        <input type="date" :value="x(value)"
               @input="onValueChanged($event.target.value)"
               :placeholder="placeholder">
      </template>
      <template v-else>
        <input type="text" :value="value"
               @input="onValueChanged($event.target.value)"
               :placeholder="placeholder">
      </template>
    </label>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import dayjs from 'dayjs';

@Component
export default class FromItem extends Vue {
  @Prop({default: ''}) readonly value!: string;

  @Prop({required: true}) filedName!: string;
  @Prop() placeholder?: string;
  @Prop() type?: string;


  onValueChanged(value: string) {
    this.$emit('update:value', value);
  }

  x(isoString: string) {
    return dayjs(isoString).format('YYYY-MM-DD');
  }
}
</script>

<style lang="scss" scoped>
.fromItem {
  //同外部div 改为block
  //display: block;
  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;

  .name {
    padding-right: 16px;
  }

  input {
    line-height: 40px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}

</style>