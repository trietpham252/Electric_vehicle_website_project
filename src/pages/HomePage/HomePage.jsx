import React from 'react'
import ElectricmotobikeComponent from '../../components/ElectricmotorbikeComponent/ElectricmotorbikeComponent'
import ElectricbicycleComponent from '../../components/ElectricbicycleComponent/ElectricbicycleComponent'
import GenuinebatteryComponent from '../../components/GenuinebatteryComponent/GenuinebatteryComponent'
import GenuinesparepartsComponent from '../../components/GenuinesparepartsComponent/Genuinespareparts'
import './Style.scss'

const HomePage = () => {
  
  return (
    <div className='home'>
      <ElectricmotobikeComponent />
      <ElectricbicycleComponent />
      <GenuinebatteryComponent />
      <GenuinesparepartsComponent />
    </div>
  )
}

export default HomePage