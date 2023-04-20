<template>
    <div class="board">

   <BoardItem :indexOfSlot="index"  v-for="(item,index) in formattedArray" >
       {{item ? item:''}}
      
   </BoardItem>
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

            }

        },
        mounted() {
            this.fillFormattedArray()
        },
        watch:{
            exampleArray:{
                handler: function (val, oldVal) {
                    this.checkIsEndGame(val)
                },
                deep: true

            }

        }




    }
</script>

<style scoped>

@import "Board.scss";
</style>