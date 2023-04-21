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

<style  lang="scss">
@import "SudokuPage.scss";
</style>