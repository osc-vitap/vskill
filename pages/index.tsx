import type {NextPage} from 'next';
import {Nav} from '../components/navbar/navbar';
import {Layout} from '../components/navbar/layout';
import {Hero} from '../components/hero';
import {Trusted} from '../components/trusted';
import {Box} from '../components/styles/box';
import {Statistics} from '../components/statistics';
import {Plans} from '../components/plans';
import {Faq} from '../components/faq';
import {Trial} from '../components/trial';
import {Footer} from '../components/footer';
const Home: NextPage = () => {
   return (
      <Layout>
         <Nav />
         <Box as="main">
            <Hero />
            {/* <Statistics /> */}
            <Plans />
            <Trial />
            <Faq />
            <Trusted />
            <Footer />
         </Box>
      </Layout>
   );
};

export default Home;
