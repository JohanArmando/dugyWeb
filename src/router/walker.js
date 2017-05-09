import Walker from '@/components/walker/Walker'
import HomeWalker from '@/components/walker/HomeWalker'
import ProfileWalker from '@/components/walker/account/ProfileWalker'
import PetsWalker from '@/components/walker/pets/PetsWalker'

export default {
  path: '/walker',
  name: 'Walker',
  component: Walker,
  children: [
    {
      path: 'dashboard',
      component: HomeWalker
    },
    {
      path: 'profile/:id',
      component: ProfileWalker
    },
    {
      path: 'pets',
      component: PetsWalker
    }
  ]
}
