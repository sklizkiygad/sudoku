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




    insertInArray(state,slotData){

      state.isValidNumber={indexOfSlot:0,isValid:true}

      console.log(slotData)

      let indexOfArray=Math.ceil(+slotData.indexOfSlot /9)>=0?Math.floor(slotData.indexOfSlot/9):0,
      // indexInSubArray= (9*indexOfArray) -slotData.indexOfSlot<9? slotData.indexOfSlot-(9*indexOfArray) : 0,
      indexInSubArray= slotData.indexOfSlot-(9*indexOfArray),
      isSameNumberInColumn = false,
      isSameNumberInRow = false
      console.log(indexOfArray)
      console.log(indexInSubArray)
      state.exampleArray.forEach((item)=>{
        item.forEach((subItem,subIndex)=>{
          if(+slotData.value && subIndex === indexInSubArray && subItem == +slotData.value ){
            isSameNumberInColumn=true
          }
        })
      })

      state.exampleArray[indexOfArray].forEach((item,index)=>{

        if(+slotData.value && item == +slotData.value ){
          isSameNumberInRow=true
        }
      })

      if((isSameNumberInRow && isSameNumberInColumn) && !state.invalidSlots.includes(+slotData.indexOfSlot )){
        state.invalidSlots=[...state.invalidSlots,slotData.indexOfSlot]
      }
      else if((!isSameNumberInRow && !isSameNumberInColumn)  ){

        if(state.invalidSlots.includes(+slotData.indexOfSlot)){
          state.invalidSlots=state.invalidSlots.filter(item=> item !== +slotData.indexOfSlot)
        }
        if(+slotData.value){
          state.exampleArray[indexOfArray][indexInSubArray]=+slotData.value
        }
        else{
          state.exampleArray[indexOfArray][indexInSubArray]=0
        }


      }



    },
    setIsEndGame(state,isIt){
      state.isEndGame=isIt

    }
  },

  actions: {

  },
  modules: {
  }
})
