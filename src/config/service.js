let SERVER = 'http://172.16.11.15:8087/dfwl_admin'

console.log(process.env, '-------')
if (process.env.NODE_ENV === 'production') {
  //development  production
  SERVER = '/dfwl_admin'
}

export { SERVER }
