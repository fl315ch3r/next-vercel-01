import Link from 'next/link'
import MainLayout from '../../components/layouts/MainLayout'
import DarkLayout from '../../components/layouts/DarkLayout'
import { FC, ReactElement } from 'react'

export default function Pricing() {
  return (
    <>
      <h1>Pricing Page</h1>
      <h1 className="title" >
        {/* Ir a <a href="/">Home</a> */}
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className="description" >
        Get started by editing{' '}
        <code className="code" >pages/pricing/index.js</code>
      </p>
    </>

  )
}

Pricing.getLayout = function getLayout( page: ReactElement ) {
  return (
    <MainLayout>
      <DarkLayout>

        { page }

      </DarkLayout>
    </MainLayout>
  )
}