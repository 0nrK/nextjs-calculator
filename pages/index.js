import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Calculator from '../components/Calculator/Calculator'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div className='m-12  h-2/3'>
      <Nav />
      <Calculator />
    </div>
  )
}
