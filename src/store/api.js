import $fetch from '@/request/index'

//获取当前用户签名或印章
export function apiIndex(data) {
  return $fetch({
    method: "get",
    url: "/index/index",
  })
}

