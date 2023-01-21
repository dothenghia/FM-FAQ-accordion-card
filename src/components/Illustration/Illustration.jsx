
import './Illustration.css'
import illustrationDesktop from '../../assets/images/illustration-woman-online-desktop.svg'
import boxDesktop from '../../assets/images/illustration-box-desktop.svg'

const Illustration = () => {
  return (
    <div id='illustration'>
      <div className='card-bg'>
        <img className='illustration-woman' src={illustrationDesktop} alt="illustration-woman-online-desktop.svg" />
      </div>

      <img className='illustration-box' src={boxDesktop} alt="illustration-box-desktop.svg" />
    </div>
  )
}

export default Illustration