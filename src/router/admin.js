import { requireAuth } from '../services/routes'
import Admin from '@/components/admin/Admin'
import HomeAdmin from '@/components/admin/HomeAdmin'
import SettingAdmin from '@/components/admin/account/SettingAdmin'
import ListUsers from '@/components/admin/users/ListUsers'
import EditUser from '@/components/admin/users/EditUser'
import ListPets from '@/components/admin/pets/ListPets'
import CreatePet from '@/components/admin/pets/CreatePet'
import ListPlans from '@/components/admin/plans/ListPlans'
import CreatePlan from '@/components/admin/plans/CreatePlan'
import EditPlan from '@/components/admin/plans/EditPlan'
import Calendar from '@/components/admin/calendar/Calendar'
import Stat from '@/components/admin/stat/Stat'

export default {
  path: '/admin',
  beforeEnter: requireAuth,
  name: 'Admin',
  component: Admin,
  children: [
    {
      path: 'dashboard',
      component: HomeAdmin
    },
    {
      path: 'setting',
      component: SettingAdmin
    },
    {
      path: 'users',
      component: ListUsers
    },
    {
      path: 'user/:id',
      component: EditUser
    },
    {
      path: 'pets',
      component: ListPets
    },
    {
      path: 'pet',
      component: CreatePet
    },
    {
      path: 'plans',
      component: ListPlans
    },
    {
      path: 'plan/:id',
      component: EditPlan
    },
    {
      path: 'plan',
      component: CreatePlan
    },
    {
      path: 'calendar',
      component: Calendar
    },
    {
      path: 'stats',
      component: Stat
    }
  ]
}
