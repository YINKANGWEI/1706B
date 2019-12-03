import request from '../utils/request';

export function govList() {
  return request('/api/list/govList');
}

export function addGov(params) {
  console.log("parmas...", params);
  
  return request('/api/main/addGov', {
    body: JSON.stringify(params), // must match 'Content-Type' header
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    
  })  
}