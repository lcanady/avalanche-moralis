import React,{Component} from 'react';
//import {Link} from 'react-router-dom';

class TableData extends Component{
	render(){
		return(
			<>
				
			</>
		)
	}
}
function ArrowUp(){
	return(
		<>
			<span className="bg-success ic-icon">
				<svg width={29} height={29} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
				  <path
					d="M7.99954 10.4687L21.1821 23.6513C21.7435 24.2127 22.6537 24.2127 23.2151 23.6513C23.7765 23.0899 23.7765 22.1798 23.2151 21.6184L10.0325 8.43582L13.4612 8.4441L13.4612 8.44409C14.2551 8.44598 14.9002 7.80394 14.9021 7.01004C14.904 6.21593 14.2617 5.57098 13.468 5.56905L13.4668 6.06905L13.468 5.56905L6.55703 5.55234L6.54969 5.55232L6.54737 5.55239C5.75771 5.55578 5.11953 6.19662 5.11616 6.98358L5.1161 6.98585L5.11612 6.99333L5.13282 13.9043L5.13282 13.9043C5.13475 14.6982 5.77979 15.3403 6.57378 15.3384C7.36769 15.3365 8.00975 14.6914 8.00787 13.8975L8.00787 13.8975L7.99954 10.4687Z"
					fill="white"
					stroke="white"
				  />
				</svg>
			</span>
		</>
	)
}
function ArrowDown(){
	return(
		<>
			<span className="bg-danger ic-icon">
				<svg width={29} height={29} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
				  <path
					d="M20.7529 19.1563L7.5703 5.97367C7.00891 5.41228 6.09876 5.41228 5.53737 5.97367C4.97598 6.53505 4.97598 7.44521 5.53737 8.0066L18.72 21.1892L15.2913 21.1809L15.2912 21.1809C14.4973 21.179 13.8522 21.8211 13.8503 22.615C13.8484 23.4091 14.4907 24.054 15.2844 24.056L15.2856 23.556L15.2844 24.056L22.1954 24.0727L22.2028 24.0727L22.2051 24.0726C22.9947 24.0692 23.6329 23.4284 23.6363 22.6414L23.6363 22.6391L23.6363 22.6317L23.6196 15.7207L23.6196 15.7207C23.6177 14.9268 22.9727 14.2847 22.1787 14.2866C21.3847 14.2885 20.7427 14.9336 20.7446 15.7275L20.7446 15.7275L20.7529 19.1563Z"
					fill="white"
					stroke="white"
				  />
				</svg>
			</span>
		</>
	)
}
function CoinIcon1(){
	return(
		<>
			<svg className="mr-1" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
				  d="M12.001 0C5.37358 0 0.000976562 5.3726 0.000976562 12C0.000976562 18.6274 5.37358 24 12.001 24C18.6284 24 24.001 18.6274 24.001 12C23.9934 5.37574 18.6252 0.00758581 12.001 0ZM16.2867 18.0001H9.42964C8.95618 18.0001 8.57244 17.6164 8.57244 17.1429C8.57244 17.1024 8.57532 17.0618 8.58107 17.0216L9.22613 12.5054L7.9232 12.8313C7.85519 12.8486 7.78535 12.8572 7.71524 12.8572C7.24178 12.8567 6.85857 12.4727 6.85883 11.9992C6.85935 11.6063 7.12669 11.2642 7.50781 11.1684L9.48771 10.6735L10.2952 5.0213C10.3622 4.55254 10.7964 4.22714 11.2652 4.2941C11.7339 4.36107 12.0593 4.79529 11.9923 5.26404L11.2835 10.2247L14.3646 9.4543C14.8232 9.33737 15.2896 9.61439 15.4062 10.0729C15.5232 10.5315 15.2461 10.9979 14.7876 11.1148C14.785 11.1153 14.7824 11.1161 14.7797 11.1166L11.0214 12.0562L10.4174 16.2857H16.2867C16.7602 16.2857 17.1439 16.6695 17.1439 17.1429C17.1439 17.6161 16.7602 18.0001 16.2867 18.0001Z"
				  fill="#374C98"
				/>
			</svg>
			<span className="text-black">Ripple</span>
		</>
	)
}
function CoinIcon2(){
	return(
		<>
			<svg className="mr-1" width={25} height={24} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
				  d="M12.2176 0.00189099C5.59969 -0.114662 0.120182 5.17136 0.00359729 11.7875C-0.035493 13.869 0.464451 15.8373 1.37107 17.5623H5.14363V5.75207C5.14363 5.03013 6.12501 4.80045 6.4439 5.44835L12.0016 16.6998L17.5593 5.44903C17.8782 4.80045 18.8595 5.03013 18.8595 5.75207V17.5623H22.6204C23.464 15.9594 23.966 14.1494 23.9996 12.2194C24.1162 5.60329 18.8355 0.1253 12.2176 0.00189099Z"
				  fill="#FF782C"
				/>
				<path
				  d="M17.4879 18.2479V8.6892L12.6161 18.5516C12.3856 19.0199 11.6169 19.0199 11.3864 18.5516L6.51522 8.6892V18.2479C6.51522 18.6264 6.20867 18.9335 5.82943 18.9335H2.22832C4.36183 21.9303 7.83058 23.9241 11.7856 23.9981C15.8983 24.0708 19.5686 22.0551 21.7886 18.9335H18.1737C17.7945 18.9335 17.4879 18.6264 17.4879 18.2479Z"
				  fill="#FF782C"
				/>
			</svg>
			<span className="text-black">Ethereum</span>
		</>
	)
} 
function CoinIcon3(){
	return(
		<>
			<svg className="mr-1" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M12.3811 13.8733C12.1369 13.9546 11.865 13.9546 11.6209 13.8733L9.00098 13L12.001 18L15.001 13L12.3811 13.8733Z" fill="#00ADA3"/>
				<path d="M12.001 12L15.001 10.8L12.001 5.99997L9.00098 10.8L12.001 12Z" fill="#00ADA3" />
				<path 
					d="M12.001 -3.05176e-05C5.37358 -3.05176e-05 0.000976562 5.37257 0.000976562 12C0.000976562 18.6274 5.37358 24 12.001 24C18.6284 24 24.001 18.6274 24.001 12C23.9937 	5.37571 18.6252 0.00729373 12.001 -3.05176e-05ZM17.0534 11.5262L12.7677 20.0977C12.556 20.5212 12.041 20.6928 11.6178 20.4812C11.4517 20.3983 11.3172 20.2638 11.2343 20.0977L6.94855 11.5262C6.81541 11.2589 6.83058 10.9416 6.98857 10.6881L11.2743 3.83108C11.5592 3.42981 12.115 3.33512 12.5163 3.61998C12.5982 3.67805 12.6696 3.7492 12.7276 3.83108L17.0131 10.6881C17.1714 10.9416 17.1865 11.2589 17.0534 11.5262Z"
				  fill="#00ADA3"
				/>
			  </svg>
			  <span className="text-black">David</span>
		</>
	)
}
function CoinIcon4(){
	return(
		<>
			<svg className="mr-1" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
				<path d="M16 9.50011C15.9993 8.67201 15.328 8.00092 14.5001 8H10V11H14.5001C15.328 10.9993 15.9993 10.328 16 9.50011Z" fill="#FFAB2D" />
				<path d="M10 16H14.5001C15.3285 16 16 15.3285 16 14.5001C16 13.6715 15.3285 13 14.5001 13H10V16Z" fill="#FFAB2D" />
				<path
				  d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9924 5.37574 18.6243 0.00758581 12 0ZM18.0001 14.5713C17.9978 16.4641 16.4641 17.9978 14.5716 17.9999V18.8571C14.5716 19.3305 14.1876 19.7143 13.7144 19.7143C13.2409 19.7143 12.8572 19.3305 12.8572 18.8571V17.9999H11.1431V18.8571C11.1431 19.3305 10.7591 19.7143 10.2859 19.7143C9.8124 19.7143 9.42866 19.3305 9.42866 18.8571V17.9999H6.85733C6.38387 17.9999 6.00013 17.6161 6.00013 17.1429C6.00013 16.6695 6.38387 16.2857 6.85733 16.2857H7.71427V7.71427H6.85733C6.38387 7.71427 6.00013 7.33053 6.00013 6.85707C6.00013 6.38361 6.38387 5.99987 6.85733 5.99987H9.42866V5.14293C9.42866 4.66947 9.8124 4.28573 10.2859 4.28573C10.7593 4.28573 11.1431 4.66947 11.1431 5.14293V5.99987H12.8572V5.14293C12.8572 4.66947 13.2409 4.28573 13.7144 4.28573C14.1879 4.28573 14.5716 4.66947 14.5716 5.14293V5.99987C16.4571 5.99202 17.992 7.5139 18.0001 9.39937C18.0043 10.3978 17.5714 11.3481 16.8152 12C17.5643 12.6445 17.9967 13.5828 18.0001 14.5713Z"
				  fill="#FFAB2D"
				/>
			  </svg>
			  <span className="text-black">Bitcoin</span>
		</>
	)
}
function CoinIcon5(){
	return(
		<>
			<svg className="mr-2" width={42} height={42} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M20.6335 23.1222C20.2266 23.2577 19.7734 23.2577 19.3665 23.1222L15 21.6666L20 30L25 21.6666L20.6335 23.1222Z" fill="#00ADA3"/>
				<path d="M20 20L25 18.0001L20 10L15 18.0001L20 20Z" fill="#00ADA3"/>
				<path
					d="M20 0C8.95433 0 0 8.95433 0 20C0 31.0457 8.95433 40 20 40C31.0457 40 40 31.0457 40 20C39.9878 8.95956 31.0404 0.0122071 20 0ZM28.4207 19.2105L21.2778 33.4962C20.9251 34.2021 20.0667 34.488 19.3613 34.1353C19.0845 33.9972 18.8604 33.7731 18.7222 33.4962L11.5793 19.2105C11.3574 18.7649 11.3827 18.2361 11.646 17.8136L18.7889 6.38517C19.2636 5.7164 20.1901 5.55858 20.8588 6.03335C20.9953 6.13013 21.1143 6.24872 21.2111 6.38517L28.3536 17.8136C28.6173 18.2361 28.6426 18.7649 28.4207 19.2105Z"
					fill="#00ADA3"
				/>
			</svg>
			<span className="text-black">Ethereum</span>
		</>
	)
} 
function CoinIcon6(){
	return(
		<>
			<svg className="mr-2" width={42} height={42} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M16 9.50011C15.9993 8.67201 15.328 8.00092 14.5001 8H10V11H14.5001C15.328 10.9993 15.9993 10.328 16 9.50011Z" fill="#FFAB2D"/>
				<path d="M10 16H14.5001C15.3285 16 16 15.3285 16 14.5001C16 13.6715 15.3285 13 14.5001 13H10V16Z" fill="#FFAB2D"/>
				<path
				  d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9924 5.37574 18.6243 0.00758581 12 0ZM18.0001 14.5713C17.9978 16.4641 16.4641 17.9978 14.5716 17.9999V18.8571C14.5716 19.3305 14.1876 19.7143 13.7144 19.7143C13.2409 19.7143 12.8572 19.3305 12.8572 18.8571V17.9999H11.1431V18.8571C11.1431 19.3305 10.7591 19.7143 10.2859 19.7143C9.8124 19.7143 9.42866 19.3305 9.42866 18.8571V17.9999H6.85733C6.38387 17.9999 6.00013 17.6161 6.00013 17.1429C6.00013 16.6695 6.38387 16.2857 6.85733 16.2857H7.71427V7.71427H6.85733C6.38387 7.71427 6.00013 7.33053 6.00013 6.85707C6.00013 6.38361 6.38387 5.99987 6.85733 5.99987H9.42866V5.14293C9.42866 4.66947 9.8124 4.28573 10.2859 4.28573C10.7593 4.28573 11.1431 4.66947 11.1431 5.14293V5.99987H12.8572V5.14293C12.8572 4.66947 13.2409 4.28573 13.7144 4.28573C14.1879 4.28573 14.5716 4.66947 14.5716 5.14293V5.99987C16.4571 5.99202 17.992 7.5139 18.0001 9.39937C18.0043 10.3978 17.5714 11.3481 16.8152 12C17.5643 12.6445 17.9967 13.5828 18.0001 14.5713Z"
				  fill="#FFAB2D"
				/>
			  </svg>
			  <span className="text-black">Bitcoin</span>
		</>
	)
}
function CoinIcon7(){
	return(
		<>
			<svg className="mr-2" width={42} height={42} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M12.2176 0.00189099C5.59969 -0.114662 0.120182 5.17136 0.00359729 11.7875C-0.035493 13.869 0.464451 15.8373 1.37107 17.5623H5.14363V5.75207C5.14363 5.03013 6.12501 4.80045 6.4439 5.44835L12.0016 16.6998L17.5593 5.44903C17.8782 4.80045 18.8595 5.03013 18.8595 5.75207V17.5623H22.6204C23.464 15.9594 23.966 14.1494 23.9996 12.2194C24.1162 5.60329 18.8355 0.1253 12.2176 0.00189099Z"
					fill="#FF782C"
				/>
				<path
					d="M17.4879 18.2479V8.6892L12.6161 18.5516C12.3856 19.0199 11.6169 19.0199 11.3864 18.5516L6.51522 8.6892V18.2479C6.51522 18.6264 6.20867 18.9335 5.82943 18.9335H2.22832C4.36183 21.9303 7.83058 23.9241 11.7856 23.9981C15.8983 24.0708 19.5686 22.0551 21.7886 18.9335H18.1737C17.7945 18.9335 17.4879 18.6264 17.4879 18.2479Z"
					fill="#FF782C"
				/>
			</svg>
			<span className="text-black">Monero</span>
		</>
	)
}
function CoinIcon8(){
	return(
		<>
			<svg className="mr-2" width={42} height={42} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M12.001 0C5.37358 0 0.000976562 5.3726 0.000976562 12C0.000976562 18.6274 5.37358 24 12.001 24C18.6284 24 24.001 18.6274 24.001 12C23.9934 5.37574 18.6252 0.00758581 12.001 0ZM16.2867 18.0001H9.42964C8.95618 18.0001 8.57244 17.6164 8.57244 17.1429C8.57244 17.1024 8.57532 17.0618 8.58107 17.0216L9.22613 12.5054L7.9232 12.8313C7.85519 12.8486 7.78535 12.8572 7.71524 12.8572C7.24178 12.8567 6.85857 12.4727 6.85883 11.9992C6.85935 11.6063 7.12669 11.2642 7.50781 11.1684L9.48771 10.6735L10.2952 5.0213C10.3622 4.55254 10.7964 4.22714 11.2652 4.2941C11.7339 4.36107 12.0593 4.79529 11.9923 5.26404L11.2835 10.2247L14.3646 9.4543C14.8232 9.33737 15.2896 9.61439 15.4062 10.0729C15.5232 10.5315 15.2461 10.9979 14.7876 11.1148C14.785 11.1153 14.7824 11.1161 14.7797 11.1166L11.0214 12.0562L10.4174 16.2857H16.2867C16.7602 16.2857 17.1439 16.6695 17.1439 17.1429C17.1439 17.6161 16.7602 18.0001 16.2867 18.0001Z"
				  fill="#374C98"
				/>
			</svg>
			<span className="text-black">Litecoin</span>
		</>
	)
} 

export {ArrowUp,ArrowDown, CoinIcon1, CoinIcon2, CoinIcon3, CoinIcon4, CoinIcon5,CoinIcon6,CoinIcon7,CoinIcon8}; 
export default TableData;