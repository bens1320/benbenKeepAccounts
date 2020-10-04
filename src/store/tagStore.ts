import tagListModel from '@/models/tagListModel';
import store from '@/store/index2';

export default {
  //tag store
  tagList: tagListModel.fetch(),
  createTag: (name: string) => {
    const message = tagListModel.create(name);
    if (message === 'duplicated') {
      alert('标签名重复了');
    } else if (message === 'success') {
      alert('添加成功');
    }
  },
  removeTag: (id: string) => {
    return tagListModel.remove(id);
  },
  updateTag: (id: string, name: string) => {
    return tagListModel.update(id, name);
  },
  findTag: (id: string) => {
    return store.tagList.filter(t => t.id === id)[0];
  }
};