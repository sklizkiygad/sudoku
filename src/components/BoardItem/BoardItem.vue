<template>
    <div class="board-item"
         :style="{borderBottom:isBorderBottom()}"
         :class="invalidSlots.includes(indexOfSlot)? 'invalid-slot':'' "
         :contenteditable="isContentEditable()"
         @input="restrictToInteger">
        <slot></slot>
    </div>
</template>

<script>
    import { mapState} from "vuex";


    export default {

        props:{
          indexItem:{
              type:Number,
              default:0
          },
            indexOfSlot:{
                type:Number,
                default:0
            }
        },
        methods:{
            restrictToInteger(e)
            {
                if(e.target.innerText){
                    e.target.innerText = e.target.innerText[0].replace(/[^\d]/g, '');
                }
               this.$store.dispatch('checkInputValue',{indexOfSlot:this.indexOfSlot, value:e.target.innerText})
            },

            isBorderBottom(){
                if(this.indexItem>=19 && this.indexItem<=27){
                    return  '3px solid'
                }
                if(this.indexItem>=46 && this.indexItem<=54){
                    return  '3px solid'
                }

            },
            isContentEditable(){
                document.getElementsByClassName("board-item")
                return true
            }

        },

        computed: mapState({
            // arrow functions can make the code very succinct!
            invalidSlots: state => state.invalidSlots,
        }),



    }

</script>

<style lang="scss">

@import "BoardItem.scss";
</style>