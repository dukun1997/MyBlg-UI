import axios from 'axios'
// import Vue from 'vue'

// 将axios挂在到vue的原型当中去
// Vue.prototype.$http = axios

// 创建axios实例
const server = axios.create({
	baseURL: 'http://localhost:4366/admin',
	timeout: 10000
})

export default server