import investLogo from '../assets/investment-calculator-logo.png'

export default function Header(){
    return(
        <header id='header'>
            <img src={investLogo} alt="Logo invesment" />
            <h1>Invesment Calculator</h1>
        </header>
    )
}