<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
    <div>
      type: {{ type }}
      <br>
      interval: {{ interval }}
    </div>
    <div>
      <ol>
        <li v-for="(group, index) in result" :key="index">
          <h3>{{group.title}}</h3>
          <ol>
            <li v-for="(item, index) in group.items" :key="index">
              {{item.amount}} {{item.createdAt}}
            </li>
          </ol>
        </li>
      </ol>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import recordTypeList from '@/constants/recordTypeList';
import intervalList from '@/constants/intervalList';

@Component({
  components: {Tabs},

})
export default class Statistics extends Vue {
  get recordList() {
    return (this.$store.state as RootState).recordList;
  }

  get result() {
    const {recordList} = this;
    type HashTableValue = {title: string; items: RecordItem[]}
    const hashTable: {[key: string]: HashTableValue[]} = {};
    for (let i = 0; i < recordList.length; i++) {
      const [date, ] = recordList[i].createdAt.split('T');
      hashTable[date] = hashTable[date] || {title: date, items: []};
      hashTable[date].items.push(recordList[i])
    }
    console.log(hashTable);
    return hashTable;
  }

  beforeCreate() {
    this.$store.commit('fetchRecords');
  }


  type = '-';
  interval = 'day';
  recordTypeList = recordTypeList;
  intervalList = intervalList;


}
</script>

<style lang="scss" scoped>
::v-deep {
  .type-tabs-item {
    background: white;

    &.selected {
      background: #c4c4c4;

      &::after {
        display: none;
      }
    }
  }

  .interval-tabs-item {
    height: 48px;
  }
}


</style>