<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
    <ol>
      <li v-for="(group) in result" :key="group.title">
        <h3 class="title">{{ beautify(group.title) }}</h3>
        <ol>
          <li v-for="item in group.items" :key="item.id"
              class="record"
          >
            <span>{{ tagString(item.tags) }}</span>
            <span class="notes">{{ item.notes }}</span>
            <span>￥{{ item.amount }}</span>
          </li>
        </ol>
      </li>
    </ol>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import recordTypeList from '@/constants/recordTypeList';
import intervalList from '@/constants/intervalList';
import dayjs from 'dayjs';


@Component({
  components: {Tabs},

})
export default class Statistics extends Vue {
  beautify(string: string) {
    const day = dayjs(string);
    const now = dayjs();
    if (day.isSame(now, 'day')) {
      return '今天';
    } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
      return '昨天';
    } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
      return '前天';
    } else if (day.isSame(now, 'year')) {
      return day.format('M月D日');
    } else {
      return day.format('YYYY年M月D日');
    }
  }

  tagString(tags: Tag[]) {
    return tags.length === 0 ? '无' : tags.join(',');
  }

  get recordList() {
    return (this.$store.state as RootState).recordList;
  }

  get result() {
    const {recordList} = this;
    type HashTableValue = { title: string; items: RecordItem[] }
    const hashTable: { [key: string]: HashTableValue[] } = {};
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
%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.title {
  @extend %item;
}
.record {
  background: white;
  @extend %item;
}
.notes {
  margin-right: auto;
  margin-left: 16px;
  color: #999;
}

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