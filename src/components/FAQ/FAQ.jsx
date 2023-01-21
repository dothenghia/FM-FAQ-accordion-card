
import './FAQ.css'
import iconArrowDown from '../../assets/images/icon-arrow-down.svg';

const data = [
	{
		id: 1,
		question: 'How many team members can I invite?',
		answer: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
	},
	{
		id: 2,
		question: 'What is the maximum file upload size?',
		answer: 'No more than 2GB. All files in your account must fit your allotted storage space.'
	},
	{
		id: 3,
		question: 'How do I reset my password?',
		answer: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
	},
	{
		id: 4,
		question: 'Can I cancel my subscription?',
		answer: "Yes! Send us a message and we'll process your request no questions asked."
	},
	{
		id: 5,
		question: 'Do you provide additional support?',
		answer: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
	},
]

function ToggleAnswer(props) {
	const activeHandle = (e) => {
		// console.log(e.target)
		// console.log(e.currentTarget)
		if (e.currentTarget.classList.contains('active')) {
			e.currentTarget.classList.remove('active')
		}
		else
		{
			let activedButtons = document.getElementsByClassName('active')
			for (let btn of activedButtons) {
				btn.classList.remove('active')
			}
	
			e.currentTarget.classList.add('active')
		}
	}

	return (
		<div className='toggle' key={props.id}>
			<button className='toggle-button' onClick={activeHandle}>
				<p className='toggle-label'>{ props.question }</p>
				<img className='toggle-icon' src={iconArrowDown}/>
			</button>

			<div className='toggle-answer'>{ props.answer }</div>
		</div>
	)
}

const FAQ = () => {
	return (
		<div className="FAQ">
			<h1 className="FAQ-heading">FAQ</h1>
			<div className='FAQ-toggle'>
				{
					data.map((item) => {
						return (
							<ToggleAnswer
								question={item.question}
								answer={item.answer}
								id={item.id}
							/>
						)
					})
				}
			</div>
		</div>
	)
}

export default FAQ