import React from 'react';
import '../styles/skills.css';
//import images
import cssIMG from '../assets/skills/css.svg';
import expressIMG from '../assets/skills/express.svg';
import firebaseIMG from '../assets/skills/firebase.svg';
import gitIMG from '../assets/skills/git.svg';
import herokuIMG from '../assets/skills/heroku.svg';
import htmlIMG from '../assets/skills/html.svg';
import javascriptIMG from '../assets/skills/javascript.svg';
import jestIMG from '../assets/skills/jest.svg';
import linuxIMG from '../assets/skills/linux.svg';
import mongodbIMG from '../assets/skills/mongodb.svg';
import mongooseIMG from '../assets/skills/mongoose.png';
import nodeIMG from '../assets/skills/node.svg';
import reactIMG from '../assets/skills/react.svg';
import typescriptIMG from '../assets/skills/typescript.svg';
import vscodeIMG from '../assets/skills/vscode.svg';
import webpackIMG from '../assets/skills/webpack.svg';

export default function Skills(){
  return (
    <div className='skills' id='skills'>
      <h1 className='skills-title'>My Skills</h1>
      <ul className='skills-container'>
        <li><img src={htmlIMG} alt='HTML logo'/>HTML</li>
        <li><img src={cssIMG} alt='CSS logo'/>CSS</li>
        <li><img src={javascriptIMG} alt='JavaScript logo'/>JavaScript</li>
        <li><img src={typescriptIMG} alt='TypeScript logo'/>TypeScript</li>
        <li><img src={reactIMG} alt='React logo'/>React.js</li>
        <li><img src={webpackIMG} alt='Webpack logo'/>Webpack</li>
        <li><img src={firebaseIMG} alt='Firebase logo'/>Firebase</li>
        <li><img src={linuxIMG} alt='Linux logo'/>Linux</li>
        <li><img src={jestIMG} alt='Jest logo'/>Jest</li>
        <li><img src={vscodeIMG} alt='VSCode logo'/>VSCode</li>
        <li><img src={gitIMG} alt='Git logo'/>Git</li>
        <li><img src={nodeIMG} alt='Node.js logo'/>Node.js</li>
        <li><img src={mongodbIMG} alt='MongoDB logo'/>MongoDB</li>
        <li><img src={expressIMG} alt='Express logo'/>Express</li>
        <li><img src={mongooseIMG} alt='Mongoose logo'/>Mongoose</li>
        <li><img src={herokuIMG} alt='Heroku logo'/>Heroku</li>
      </ul>
    </div>
  );  
}