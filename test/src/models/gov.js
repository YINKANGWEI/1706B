import { govList, addGov } from '../services'

export default {

  //命名空间
  namespace: 'gov',

  //初始化数据
  state: {
    list: [], // 渲染机构列表的数组list
    type: '', //判断类型
    info: {} //将获取到的值存放到info中
  },

  //异步操作
  effects: {
    *getGovList({ payload }, { call, put }) {
      let res = yield call(govList, 1, 2)
      yield put({
        type: "changeList",
        payload: res.data.list
      })
    },
    *addGov({ payload }, { call, put, select }) {
      let { type } = yield select(state => state.gov)
      if (type === "new") {
        let res = yield call(addGov, payload);
        console.log("res..", res)
      } else if (type === "edit") {

      }
    }
  },

  //同步操作
  reducers: {
    changeList(state, { payload }) {
      return { ...state, list: payload }
    },
    goDetail(state, { payload }) {
      let { type, info } = payload
      return { ...state, type, info }
    }
  },
};
