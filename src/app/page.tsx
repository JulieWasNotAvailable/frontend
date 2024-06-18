import Image from 'next/image';
import styles from './Main.module.scss'
import ButtonCost from '@/ui/button_calc_cost';
import Card from '@/ui/catalogue_card'
import ButtonViewAll from '@/ui/button_view_all';

import Page1Section1 from '@/components/page1section1';
import Page1Section2 from '@/components/page1section2';
import Page1Section4 from '@/components/page1section4';
import Page1Section5 from '@/components/page1section5';
import Page1Section6 from '@/components/page1section6';
import Page1Section7 from '@/components/page1section7';

export default async function Page() {
  return (
  <div>
    <Page1Section1/>
    <Page1Section2/>
    <Page1Section4/>
    <Page1Section5/>
    <Page1Section6/>
    <Page1Section7/>
  </div>)
}