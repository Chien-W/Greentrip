let mutations = {
  //控制组件展示与否 (Comp_Name,boolean)
  controlComponentsShow({componentsShow},[name,show]){
    componentsShow[name] = show
  }
}

export default mutations