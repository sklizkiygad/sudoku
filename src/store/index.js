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

        if(slotData.event==='add' && !state.invalidSlots.includes(+slotData.indexOfSlot )){
          state.invalidSlots=[...state.invalidSlots,slotData.indexOfSlot]
        }
        else if(slotData.event==='remove' && state.invalidSlots.includes(+slotData.indexOfSlot)) {
          state.invalidSlots=state.invalidSlots.filter(item=>item !=  +slotData.indexOfSlot)
        }
      },


    insertInArray(state,slotData){
      state.exampleArray[slotData.indexOfArray][slotData.indexInSubArray]=+slotData.value
    },
    setIsEndGame(state,isIt){
      state.isEndGame=isIt

    }
  },


  actions: {
    isSameNumberInColumn({commit, state,dispatch},slotData){
      let isSameNumberInColumn=false
      state.exampleArray.forEach((item,index)=>{
        item.forEach((subItem,subIndex)=>{
          if(subIndex === slotData.indexInSubArray
              && subItem == +slotData.value
              && index !==slotData.indexOfArray
             ){
            isSameNumberInColumn=true
          }
        })
      })
      return isSameNumberInColumn
    },

    isSameNumberInRow({commit, state,dispatch},slotData){
      let isSameNumberInRow=false
      state.exampleArray[slotData.indexInArray].forEach((item,index)=>{
        if(+slotData.value && item == +slotData.value && index !==slotData.indexInSubArray){
          isSameNumberInRow=true
        }
      })
      return isSameNumberInRow
    },
    async isSameNumberInArea  ({commit, state,dispatch},slotData)  {
      let values = [],
          rows = [],
          columns = [];

      await dispatch('getSquareIndexes',slotData.indexInArray).then(res=> {
        rows = res
      })

      await dispatch('getSquareIndexes',slotData.indexInSubArray).then(res=>{
          columns=res})
          rows.forEach(row => {
            columns.forEach(column => {
              if(+slotData.indexInArray === row && +slotData.indexInSubArray === column){
                values.push(0);
              }else{
                values.push(state.exampleArray[row][column]);
              }

            });
          });

           return values.includes(+slotData.value)
    },


    getSquareIndexes(context,num) {
      if (+num === 0 || +num === 1 || +num === 2) {
        return [0,1,2];
      } else if (+num === 3 || +num === 4 || +num === 5) {
        return [3,4,5];
      } else {
        return [6,7,8];
      }
    },
    async checkCurrentValue({dispatch},dataForCheck){
      let isSameNumberInColumn=false;
      let isSameNumberInRow=false;
      let isSameNumberInArea=false;
      await dispatch('isSameNumberInColumn',dataForCheck).then(res=>{
        isSameNumberInColumn=res
      })
      await dispatch('isSameNumberInRow',dataForCheck).then(res=>{
        isSameNumberInRow=res
      })
      await dispatch('isSameNumberInArea',dataForCheck).then(res=>{
        isSameNumberInArea=res

      })


      return !isSameNumberInRow && !isSameNumberInColumn && !isSameNumberInArea
    },

    async checkInputValue({commit, state,dispatch},slotData){
      let indexOfArray=Math.ceil(+slotData.indexOfSlot /9)>=0?Math.floor(slotData.indexOfSlot/9):0,
          indexInSubArray= slotData.indexOfSlot-(9*indexOfArray)
      if(slotData.value){
        const dataForCheck={indexInArray:indexOfArray,
          indexInSubArray:indexInSubArray,
          value:slotData.value}

          let isValidSlot=false
       await dispatch('checkCurrentValue',dataForCheck).then(res=>{
         isValidSlot=res
       })


        if(isValidSlot){

          commit('setInvalidSlots', {indexOfSlot:+slotData.indexOfSlot,event:"remove"})
        }
        else{
          commit('setInvalidSlots', {indexOfSlot:+slotData.indexOfSlot,event:"add"})
        }
        commit('insertInArray', {indexOfArray:indexOfArray,indexInSubArray:indexInSubArray,value:+slotData.value})
      }
      else{
        commit('insertInArray', {indexOfArray:indexOfArray,indexInSubArray:indexInSubArray,value:0})
        commit('setInvalidSlots', {indexOfSlot:+slotData.indexOfSlot,event:"remove"})
      }
      dispatch('checkExistsInvalid')
    },

    checkExistsInvalid({commit, state,dispatch}){
      state.invalidSlots.forEach(async item=>{

        let indexOfArray=Math.ceil(+item /9)>=0?Math.floor(item/9):0,
            indexInSubArray= item-(9*indexOfArray),
        valueSlot=state.exampleArray[indexOfArray][indexInSubArray];
        const dataForCheck={
          indexInArray:indexOfArray,
          indexInSubArray:indexInSubArray,
          value:valueSlot
        }

        await dispatch('checkCurrentValue',dataForCheck).then((res)=>{
          if(res){
            console.log(item)
            commit('setInvalidSlots', {indexOfSlot:+item,event:"remove"})
          }

        })
      })
    }




  },
  modules: {
  }
})
