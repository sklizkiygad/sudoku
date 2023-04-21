import { createStore } from 'vuex'

export default createStore({
  state: {
    exampleArray:[
      [5, 3, 0, 0, 7, 0, 0, 0, 0],
      [6, 0, 0, 1, 9, 5, 0, 0, 0],
      [0, 9, 8, 0, 0, 0, 0, 6, 0],
      [8, 0, 0, 0, 6, 0, 0, 0, 3],
      [4, 0, 0, 8, 0, 3, 0, 0, 1],
      [7, 0, 0, 0, 2, 0, 0, 0, 6],
      [0, 6, 0, 0, 0, 0, 2, 8, 0],
      [0, 0, 0, 4, 1, 9, 0, 0, 5],
      [0, 0, 0, 0, 8, 0, 0, 7, 9],
    ],
    currentArray:[],
    invalidSlots:[],
    isEndGame:false

  },
  getters: {
  },
  mutations: {

      setInvalidSlots(state,slotData){
        if(slotData.event==='add')
        if(!state.invalidSlots.includes(+slotData.indexOfSlot )){
          state.invalidSlots=[...state.invalidSlots,slotData.indexOfSlot]
        }
        else if(slotData.event==='remove') {

        }
      },


    insertInArray(state,slotData){
      state.exampleArray[slotData.indexOfArray][slotData.indexInSubArray]=+slotData.value
      // state.isValidNumber={indexOfSlot:0,isValid:true}
      // let indexOfArray=Math.ceil(+slotData.indexOfSlot /9)>=0?Math.floor(slotData.indexOfSlot/9):0,
      // indexInSubArray= slotData.indexOfSlot-(9*indexOfArray),
      // isSameNumberInColumn = false,
      // isSameNumberInRow = false
      //
      // state.exampleArray.forEach((item)=>{
      //   item.forEach((subItem,subIndex)=>{
      //     if(+slotData.value && subIndex === indexInSubArray && subItem == +slotData.value ){
      //       isSameNumberInColumn=true
      //     }
      //   })
      // })
      // state.exampleArray[indexOfArray].forEach((item,index)=>{
      //   if(+slotData.value && item == +slotData.value ){
      //     isSameNumberInRow=true
      //   }
      // })
      //
      //
      //
      // if((isSameNumberInRow || isSameNumberInColumn) && !state.invalidSlots.includes(+slotData.indexOfSlot )){
      //   state.invalidSlots=[...state.invalidSlots,slotData.indexOfSlot]
      // }
      // else if((!isSameNumberInRow && !isSameNumberInColumn)){
      //   if(state.invalidSlots.includes(+slotData.indexOfSlot)){
      //     state.invalidSlots=state.invalidSlots.filter(item=> item !== +slotData.indexOfSlot)
      //   }
      //   if(+slotData.value){
      //     state.exampleArray[indexOfArray][indexInSubArray]=+slotData.value
      //   }
      //   else{
      //     state.exampleArray[indexOfArray][indexInSubArray]=0
      //   }
      //
      //
      // }



    },
    setIsEndGame(state,isIt){
      state.isEndGame=isIt

    }
  },


  actions: {
    isSameNumberInColumn({commit, state,dispatch},slotData){
      let isSameNumberInColumn=false


      state.exampleArray.forEach((item)=>{
        item.forEach((subItem,subIndex)=>{
          if(subIndex === slotData.indexInSubArray && subItem == +slotData.value ){
            isSameNumberInColumn=true
          }
        })
      })
      return isSameNumberInColumn
    },

    isSameNumberInRow({commit, state,dispatch},slotData){
      let isSameNumberInRow=false
      state.exampleArray[slotData.indexInArray].forEach((item,index)=>{
        if(+slotData.value && item == +slotData.value ){
          isSameNumberInRow=true
        }
      })
      return isSameNumberInRow
    },

    getSquareIndexes(context,num) {
      if (+num === 1) {
        return [0,1,2];
      } else if (+num === 2) {
        return [3,4,5];
      } else {
        return [6,7,8];
      }
    },

    checkInputValue({commit, state,dispatch},slotData){
      state.isValidNumber={indexOfSlot:0,isValid:true}
      let indexOfArray=Math.ceil(+slotData.indexOfSlot /9)>=0?Math.floor(slotData.indexOfSlot/9):0,
          indexInSubArray= slotData.indexOfSlot-(9*indexOfArray)

      if(slotData.value){
        const dataForCheck={indexInArray:indexOfArray,
          indexInSubArray:indexInSubArray,
          value:slotData.value}

        let isSameNumberInColumn=false;
        let isSameNumberInRow=false;
        dispatch('isSameNumberInColumn',dataForCheck).then(res=>{
          isSameNumberInColumn=res
        })
        dispatch('isSameNumberInRow',dataForCheck).then(res=>{
          isSameNumberInRow=res
        })


        console.log(isSameNumberInRow)
        console.log(isSameNumberInColumn)
        console.log(!(isSameNumberInRow || isSameNumberInColumn))
        if(!isSameNumberInRow && !isSameNumberInColumn){
          commit('insertInArray', {indexOfArray:indexOfArray,indexInSubArray:indexInSubArray,value:+slotData.value})
        }
        else{
          commit('setInvalidSlots', {indexOfArray:indexOfArray,indexInSubArray:indexInSubArray,value:+slotData.value})
        }
      }
      else{
        commit('insertInArray', {indexOfArray:indexOfArray,indexInSubArray:indexInSubArray,value:0})
      }




      // state.exampleArray[indexOfArray].forEach((item,index)=>{
      //   if(+slotData.value && item == +slotData.value ){
      //     isSameNumberInRow=true
      //   }
      // })
      //
      //
      // if((isSameNumberInRow || isSameNumberInColumn) && !state.invalidSlots.includes(+slotData.indexOfSlot )){
      //   state.invalidSlots=[...state.invalidSlots,slotData.indexOfSlot]
      // }
      // else if((!isSameNumberInRow && !isSameNumberInColumn)){
      //   if(state.invalidSlots.includes(+slotData.indexOfSlot)){
      //     state.invalidSlots=state.invalidSlots.filter(item=> item !== +slotData.indexOfSlot)
      //   }
      //   if(+slotData.value){
      //     state.exampleArray[indexOfArray][indexInSubArray]=+slotData.value
      //   }
      //   else{
      //     state.exampleArray[indexOfArray][indexInSubArray]=0
      //   }
      // }
    },


  },
  modules: {
  }
})
