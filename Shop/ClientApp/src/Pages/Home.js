import React from 'react'
import PhoneList from '../components/PhoneList'
import SearchForm from '../components/SearchForm'
import './Home.css'
export default function Home() {
  return (
    <main className='main'>
      <SearchForm />
      <PhoneList />
    </main>
  )
}