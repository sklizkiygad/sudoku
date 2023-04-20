<template>
    <div class="main-page">
        <div class="main-menu">
            <RouterLink to="/sudoku" class="button-arounder">Играть</RouterLink>
            <RouterLink to="/check" class="button-arounder">Заполнять</RouterLink>

        </div>
    </div>
</template>

<script>
    export default {
        name:"MainPage",
        data(){
            return{

            }

        }


    }
</script>

<style scoped lang="scss">
    @import "MainPage";

</style>