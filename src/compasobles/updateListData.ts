export function updateListData (data: TaskItem) {
  const appStore = useAppStore()
  const listData = appStore.listData
  function updateItem (item: TaskItem) {
    const index = listData.findIndex(item => item.id === data.id)
    if (index !== -1) {
      listData[index] = data
    }
  }
  appStore.updateListData(data)
}
