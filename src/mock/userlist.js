let domeList = {
  status: 200,
  message: 'success',
  data: {
    total: 100,
    'rows|30': [{
      id: '@guid',
      name: '@cname',
      'age|20-30': 23,
      'job|1':['前端','后端','UI','需求']
    }]
  }
}

export default {
  '/user/list':domeList
}