import {createRouter, createWebHistory } from 'vue-router'
import HomeComp from './pages/HomeComp.vue'
import DcHeroes from './pages/DcHeroes.vue'
import CalendarComp from './pages/CalendarComp.vue'
import MarkedComp from './pages/MarkedComp.vue'
import SliderComp from './pages/SliderComp.vue'
import CalculatorComp from './pages/CalculatorComp.vue'
import ReuseableModal from './pages/ReuseableModal.vue'

const routes = [
    {path:'/', component: HomeComp},
    {path:'/dc-heroes', component: DcHeroes},
    {path:'/calendar', component: CalendarComp},
    {path:'/marked', component: MarkedComp},
    {path:'/slider', component: SliderComp},
    {path:'/calculator', component: CalculatorComp},
    {path:'/reuseable-modal', component: ReuseableModal},
]
const router = createRouter({
    history: createWebHistory(),
    routes
});



export default router;
