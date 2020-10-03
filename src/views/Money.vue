<template>
  <Layout class-prefix="layout">
    {{record}}
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <div class="notes">
      <FromItem filed-name="备注" placeholder="请输入备注信息" @update:value="onUpdateNotes"/>
    </div>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import FromItem from '@/components/Money/FromItem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component, Watch} from 'vue-property-decorator';
import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';


window.localStorage.setItem('version', '0.0.1');

const recordList = recordListModel.fetch();
const tagList = tagListModel.fetch();

@Component({
  components: {Tags, FromItem, Types, NumberPad}
})
export default class Money extends Vue {
  tags = tagList;
  recordList: RecordItem[] = recordList;
  record: RecordItem = {
    tags: [], notes: '', type: '+', amount: 100
  };

  onUpdateNotes(value: string) {
    this.record.notes = value;
    console.log(value);
  }

  onUpdateTags(value: string[]) {
    this.record.tags = value;
    console.log(value);
  }

  saveRecord() {
    const record2 = recordListModel.clone(this.record);
    record2.createdAt = new Date();
    this.recordList.push(record2);
  }

  @Watch('recordList')
  onRecordListChange(){
    recordListModel.save(this.recordList);
  }
}

</script>

<style lang="scss">
//vue deep
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.notes{
  padding: 12px 0;
}
</style>



