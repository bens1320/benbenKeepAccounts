type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number; //数据类型 object | string
  createdAt?: Date; // 类 / 构造函数
}

type Tag = {
  id: string;
  name: string;
}

type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  save: () => void;
  create: (name: string) => 'success' | 'duplicated'; //联合类型
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
  remove: (id: string) => boolean;
}

//注意Window的大小写
interface Window {
  tagList: Tag[];
  createTag: (name: string) => void;
  removeTag: (id: string) => boolean;
  updateTag: TagListModel['update'];
  findTag: (id: string) => Tag | undefined;
  recordList: RecordItem[];
  createRecord: (record: RecordItem) => void;
}