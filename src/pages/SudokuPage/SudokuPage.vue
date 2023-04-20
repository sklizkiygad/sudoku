<template>
    <div class="sudoku-page">
        <Board/>

    </div>
</template>

<script>
    import Board from "@/components/Board/Board";



    export default {

        components:{Board},



    }
</script>

<style scoped>
@import "SudokuPage.scss";
</style>