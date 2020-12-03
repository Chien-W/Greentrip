export default lazyLoading

function lazyLoading(ndArr){
  // 原生懒加载兼容测试
  // if("loading" in HTMLImageElement.prototype){
  //   ndArr.forEach(nd => {
  //     nd.src = nd.dataset.src
  //   })
  //   return
  // }
  const io = new IntersectionObserver(cb,{
    rootMargin : "0px 0px -60px 0px"
  })
  function cb(entries){
    entries.forEach(item =>{
      if(item.isIntersecting){
        item.target.src = item.target.dataset.src
        io.unobserve(item.target)
      }
    })
  }
  ndArr.forEach(nd =>{
    io.observe(nd)
  })
}