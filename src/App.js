import './App.css';
import {AiOutlineInstagram} from "react-icons/ai";
import {AiOutlineLinkedin} from "react-icons/ai";
import {FaDiscord} from "react-icons/fa";
import {BsFacebook} from "react-icons/bs";
import {FaGithubSquare} from "react-icons/fa";
import {AiFillTwitterSquare} from "react-icons/ai";

function App(){
   return (
    <div className='Footer'>

         <div className='fTopLogo'>
            <img src='HackNitrLogo2.png' alt='' width='39px' height='48px'></img>
         </div>
         
         <div className='fTopSocialLogo'>
            <a href='https://www.instagram.com/hacknitr/'><AiOutlineInstagram className='insta'/></a>
            <a href='https://www.linkedin.com/company/hacknitr/'> <AiOutlineLinkedin className='linkedin'/></a>
            <a href='https://hacknitr.tech/discord'><FaDiscord className='discord'/></a>
            <a href='https://www.facebook.com/hacknitr'><BsFacebook className='facebook'/></a>
            <a href='https://github.com/dscnitrourkela/project-oregano'><FaGithubSquare className='github'/></a>
            <a href='https://twitter.com/hacknitr'><AiFillTwitterSquare className='twitter'/></a>         
         </div>
         
         <div className='fSocialUpdates'>
           <div className='f1'>For more updates,</div>
           <div className='f2'>follow us on all social media.</div>
         </div>
         
         <div className='C1'>
            <Card src='Nitrlogo.png' title='About NIT Rourkela' content='With a total strength of around 7000 students, NIT Rourkela is one of the most coveted institutes for higher studies by future technocrats. With its lush green and humongous area, it indeed makes a pleasant campus impression.'/>
         </div>
         
         <div className='C2'> 
               <Card src='diamond_nrpehm.png' title='About Diamond Jubilee' content='Established in the year 1961, NIT Rourkela celebrates its 60th anniversary this year. Through the years of the tireless striving of its administration, students, and all stakeholders, it has become a beacon of knowledge.'/>
         </div>

         <div className='C3'>
               <div className='n1'></div>
               <div className='Rules'>
               <a href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'><p>MLH Code of Conduct</p></a>
               <a href='https://github.com/MLH/mlh-policies/tree/main/prize-terms-and-conditions'><p>Terms and Conditions</p></a>
               <a href='https://mlh.io/privacy'><p>Privacy Policy</p></a>
               <a href='https://hacknitr21.typeform.com/to/maI5lJ4t'><p>Sponsor Us</p></a>
               <a href='https://hacknitr21.typeform.com/to/o2X7YSNf'><p>Join Us</p></a>
               </div>
               <div className='n2'></div>
         </div>

         <div className='Love'>
              <p>Architected with ❤️ by HackNITR Team</p>
         </div>

         <div className='BottomLogo'>
            <div className='Null'/>
            <div className='Blogo'>
            <img src="DSC_NIT_Rourkela_Dark_Horizontal-Logo_1_3_smh3je.png" alt="" width="106px" height="30px"/>
            <img src="OpenCodelogoPossibly.png" alt="" width="36px" height="30px"/>
            <img src="GitHub_CE_2_u8jaum.png" alt="" width="80px" height="30px"/>
            <img src="Hack_Club_NIT_Rourkela_rir04e.png" alt="" width="106px" height="30px"/>
            </div>
         </div>
    </div>
   );
}


function Card({src,title,content,width,height}) {
   return (
      <div className='Card' style={{width: width, height: height}}>
               <div className='CLogo'>
                   <img src={src} alt='' width='80px' height='80px'/>
               </div>
               
               <div className='Cright'>
                  <div className='CTitle'>
                     <h4>{title}</h4>
                  </div>

                  <div className='content'>
                     <p>{content}</p>
                  </div>
               </div>
      </div>
   );
}

export default App;
