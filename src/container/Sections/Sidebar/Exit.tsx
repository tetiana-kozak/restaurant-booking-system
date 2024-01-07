import { LogOut } from '../../../assets/svgSidebar/log-outsidebar';
//ico
// import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {}


export const Exit = (props: Props) => {
	const navigate = useNavigate()

	const handelLogOut = () => {  //log out logic
		console.log("Log Out");
		navigate('/sign-up')
	}

	//   useEffect(() => {
    // const handlePopstate = (event: PopStateEvent) => {
    //   // забороняє використовувати кнопку "НАЗАД" в браузері
    //   window.history.pushState(null, '', window.location.pathname)
    // }

   
    // window.addEventListener('popstate', handlePopstate)

    
    // return () => {
    //   window.removeEventListener('popstate', handlePopstate)
    // }
	//   }, [])
	
	return <div className='flex pt-[110px] gap-[16px] cursor-pointer' onClick={handelLogOut} >
		<LogOut />
	<button type="button" className="">Вихід</button>
	</div>
}