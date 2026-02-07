import React from 'react'
import ProfileCard from './ProfileCard'
import InformationCard from './InformationCard'

function Profile() {
  return (
    <section className='px-4'>
      <ProfileCard />
      <InformationCard />
    </section>
  )
}

export default Profile