import {
  Heading,
} from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import config from '@config/seo.json'

const Index = () => {
  return (
    <>
      <DefaultSeo {...config} />
      <Head>

      </Head>
      <Heading as="h1">Hello Mohenjo Paro</Heading>
      <DarkModeSwitch />
    </>
  )
}

export default Index
