<template>
    <div class="board">
   <BoardItem :indexOfSlot="index"  v-for="(item,index) in formattedArray" >
       {{item ? item:''}}
   </BoardItem>

        <div class="board-button">


        <button class="button-arounder" @click="startAgain">Заново</button>
        </div>
    </div>
</template>

<script>
    import BoardItem from "@/components/BoardItem/BoardItem";
    import {mapState} from "vuex";
    export default {
        components:{BoardItem},
        data(){
            return{
                formattedArray:[],
            }
        },
        // computed: mapState({
        //     // arrow functions can make the code very succinct!
        //     exampleArray: state => state.exampleArray,
        // }),

        computed: mapState(['exampleArray']),
        methods:{
            fillFormattedArray(){

                this.exampleArray.forEach((item)=>{
                    item.forEach(subItem=>{
                        this.formattedArray.push(subItem)
                    })
                })

            },
            checkIsEndGame(newNumbersArray){
                let isEndGame=true
                newNumbersArray.forEach(item=>{
                    item.forEach(subItem=>{
                        if(!subItem){
                            isEndGame=false
                        }
                    })
                })
                if(isEndGame){
                    alert('победа')
                    this.$store.commit('setIsEndGame',true)
                }

            },
            startAgain(){
                this.$store.commit('resetArray')
                this.clearAllSlots()
                this.formattedArray=[]
                this.fillFormattedArray()
            },
            checkContentEditableSlots(){
                setTimeout(()=>{
                    const boardItemsList= [...document.getElementsByClassName('board-item')]
                    boardItemsList.map(item=>{
                        if(item.innerText){
                            item.style.background="#afafaf"
                            item.contentEditable=false
                        }
                    })

                },0)
            },
            clearAllSlots(){
                    const boardItemsList= [...document.getElementsByClassName('board-item')]
                    boardItemsList.map(item=>{
                        if(item.contentEditable==='true'){
                            item.innerText=''
                        }
                    })
            }


        },
        mounted() {
            this.fillFormattedArray()
            this.checkContentEditableSlots()

        },

        watch:{
            exampleArray:{
                handler: function (val, oldVal) {
                    this.checkIsEndGame(val)
                },
                deep: true

            },


        }




    }
</script>

<style lang="scss">

@import "Board.scss";
</style>