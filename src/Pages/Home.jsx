import React from 'react'
import PublicLayout from '../Layouts/Public/PublicLayout';
import '../Styles/Pages/Home.scss'
import * as MUI from '@mui/material'
import * as MICON from '@mui/icons-material'
import { MdArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
// import Openmenu from '../components/Openmenu'

import millify from 'millify';

import { useGetCryptosQuery } from '../Services/CryptoApi';
import CryptoCurrencies from './Subpages/CryptoCurrencies';
import CryptoNews from './Subpages/CryptoNews';

function Home() {

  const { data, isFetching } = useGetCryptosQuery(10);

  const globalStats = data?.data?.stats;
  
  return (
    <>
    {/* <MUI.Box className='openmenu'>
       <Openmenu />
    </MUI.Box> */}
    <PublicLayout>
       <>
        <MUI.Box className='home-container'>
          <MUI.Box className='home-wrapper'>
             <MUI.Typography variant='h5' className='heading'>
                Global Crypto Stats
             </MUI.Typography>
             <MUI.Grid container className='grid-container'>
               <MUI.Grid item className='grid-item' xs={12} sm={12} md={6} >
                 <div className='grid-item-title'><span className='org'>Total</span> Cryptocurrencies<MICON.CurrencyBitcoin className='currency-icon'/> </div>
                 <span> {
                   isFetching ? 'Loading...' : millify(globalStats.total)
                  }</span>
               </MUI.Grid>
               <MUI.Grid item className='grid-item' xs={12} sm={12} md={6} >
                 <div className='grid-item-title'><span className='org'>Total</span> Exchanges <MICON.CurrencyExchange className='exchange-icon'/></div>
                 <span> {
                   isFetching ? 'Loading...' : millify(globalStats.totalExchanges)
                  }</span>
               </MUI.Grid>
               <MUI.Grid item className='grid-item' xs={12} sm={12} md={6} >
                 <div className='grid-item-title'><span className='org'>Total</span> Market Cap <MICON.Timeline className='cap-icon'/></div>
                 <span> {
                   isFetching ? 'Loading...' : millify(globalStats.totalMarketCap)
                  }</span>
               </MUI.Grid>
               <MUI.Grid item className='grid-item' xs={12} sm={12} md={6} >
                 <div className='grid-item-title'><span className='org'>Total</span> <span className='twofourh'>24h</span> Volume <MICON.LocalConvenienceStore className='tf-icon'/></div>
                 <span> {
                   isFetching ? 'Loading...' : millify(globalStats.total24hVolume)
                  }</span>
               </MUI.Grid>
               <MUI.Grid item className='grid-item' xs={12} sm={12} md={6} >
                 <div className='grid-item-title'><span className='org'>Total</span> Markets <MICON.LocalGroceryStore className='market-icon' /></div>
                 <span> {
                   isFetching ? 'Loading...' : millify(globalStats.totalMarkets)
                  }</span>
               </MUI.Grid>
             </MUI.Grid>
          </MUI.Box>
        </MUI.Box>
        
        <MUI.Box className='top-ten-container'>
         <MUI.Box className='top-ten-wrapper'>
           <MUI.Typography variant='h5' className='top-ten-title'>Top <span>10</span> Cryptocurrencies in the World</MUI.Typography>
           <MUI.Box className='showmore-box'>
            <Link to='/crypto' className='top-ten-showmore'>Show more<MdArrowRight className='showmore-icon'/></Link>
           </MUI.Box>
         </MUI.Box>
        </MUI.Box>
        <MUI.Box className='currency-box'>
        <CryptoCurrencies simplified />
        </MUI.Box>
        <MUI.Box className='top-ten-container marginadjust'>
         <MUI.Box className='top-ten-wrapper'>
           <MUI.Typography variant='h5' className='top-ten-title'> <span>Latest</span> Crypto News</MUI.Typography>
           <MUI.Box className='showmore-box'>
            <Link to='/news' className='top-ten-showmore'>Show more<MdArrowRight className='showmore-icon'/></Link>
           </MUI.Box>
         </MUI.Box>
        </MUI.Box>
        <MUI.Box className='currency-box'>
          <CryptoNews simplified />
        </MUI.Box>
       </>
    </PublicLayout>
    </>
  )
}

export default Home


    