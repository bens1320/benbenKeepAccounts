import recordListModel from '@/models/recordListModel';

export default {
  //recorde store
  recordList: recordListModel.fetch(),
  createRecord: (record: RecordItem) => { recordListModel.create(record);},
}