import {createRouter, createWebHistory } from 'vue-router'
import HomeComp from './pages/HomeComp.vue'
import DcHeroes from './pages/DcHeroes.vue'
import CalendarComp from './pages/CalendarComp.vue'
import MarkedComp from './pages/MarkedComp.vue'
import SliderComp from './pages/SliderComp.vue'
import CalculatorComp from './pages/CalculatorComp.vue'
import ReuseableModal from './pages/ReuseableModal.vue'
import store from './store/index'
import { nextTick } from 'vue'

const routes = [
    {path:'/', component: HomeComp},
    {path:'/dc-heroes', component: DcHeroes},
    {path:'/calendar', component: CalendarComp},
    {path:'/marked', component: MarkedComp},
    {path:'/slider', component: SliderComp},
    {path:'/calculator', component: CalculatorComp},
    {path:'/reuseable-modal', component: ReuseableModal, beforeEnter : (_,__,next)=>{
        if(!store.state.isLoggedIn){
            next('/')
        }else{
            next()
        }
    }},
]
const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;
