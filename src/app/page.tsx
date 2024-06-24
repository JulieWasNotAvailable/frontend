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
    {/* <Page1Section2/> */}
    <Page1Section4/>
    <Page1Section5/>
    <Page1Section6/>
    <Page1Section7/>
  </div>)
}