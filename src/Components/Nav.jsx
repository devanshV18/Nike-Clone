import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import {navLinks} from '../Constants';

const Nav = () => {
  return (
    <>
<header className = "padding-x py-8 absolute z-10 w-full" >
    <nav classNmae = "flex justify-between items-center max-container">
        <a href="/">
            <img 
            src={headerLogo}  
            alt='Logo' 
            width={130} 
            height={29}
            />
        </a>
        <ul classNmae = "flex justify-center items-center gap-16 max-lg:hidden">
            {
                navLinks.map((item) => (
                    <li key={item.label}>
                        <a href={item.href} 
                        classNmae="font-montserrat leading-normal 
                        text-lg 
                        text-slate-blue"
                        >
                            {item.label}
                        </a>
                    </li>
                ))
            }
        </ul>
    </nav>
</header> 
    
        
        <div>
            <img src={hamburger} width={25} height={25}/>
        </div>
        </>
  )
}

export default Nav
