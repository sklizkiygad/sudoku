import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/pages/MainPage/MainPage";
import SudokuPage from "@/pages/SudokuPage/SudokuPage";


const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  },

  {
    path: '/sudoku',
    name: 'sudoku',
    component: SudokuPage
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
