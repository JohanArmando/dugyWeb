import Client from '@/components/client/Client'
import HomeClient from '@/components/client/HomeClient'
import ProfileClient from '@/components/client/account/ProfileClient'
import PetsClient from '@/components/client/pets/PetsClient'
import CreatePetClient from '@/components/client/pets/CreatePetClient'
import EditPetClient from '@/components/client/pets/EditPetClient'

export default {
  path: '/client',
  name: 'Client',
  component: Client,
  children: [
    {
      path: 'dashboard',
      component: HomeClient
    },
    {
      path: 'profile/:id',
      component: ProfileClient
    },
    {
      path: 'pets',
      component: PetsClient
    },
    {
      path: 'pet',
      component: CreatePetClient
    },
    {
      path: 'pet/:id',
      component: EditPetClient
    }
  ]
}
