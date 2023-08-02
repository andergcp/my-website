import { useState } from 'react'

// This is a react component that will be used to display a card with information about a specific experience
interface ExperienceCardProps {
	title: string
	description: string
	company: string
	startDate: string
	endDate: string
	functions: string[]
	achievements: string[]
}

const ExperienceCard = (props: ExperienceCardProps) => {
	const {
		title = '',
		description = '',
		company = '',
		startDate = '',
		endDate = '',
		functions = [],
		achievements = []
	} = props
	const [isHidden, setIsHidden] = useState(true)
	const onClickHandler = () => {
		console.log('clicked')
		setIsHidden((prev) => !prev)
	}
	return (
		<li className='flex flex-col shadow-lg md:flex-row [&>div]:p-4 md:[&>div]:p-8'>
			<div className='bg-tertiary-bg md:w-1/4'>
				<h2 className='text-lg font-semibold'>{company}</h2>
				<span className='text-sm'>
					{startDate}-{endDate}
				</span>
			</div>
			<div className='bg-main-bg md:w-3/4 [&>ul]:px-4'>
				<h3 className='font-semibold'>{title}</h3>
				<p className='text-sm'>{description}</p>
				<div className={`px-4 ${isHidden ? 'hidden' : ''}`}>
					{functions.length > 0 && (
						<>
							<br />
							<h3 className='font-semibold'>Funciones</h3>
							<ul className='list-disc'>
								{functions?.map((f: string, idx) => (
									<li key={`function${idx}`} className='text-sm'>
										{f}
									</li>
								))}
							</ul>
						</>
					)}
					{achievements.length > 0 && (
						<>
							<br />
							<h3 className='font-semibold'>Logros</h3>
							<ul className='list-disc'>
								{achievements?.map((a: string, idx) => (
									<li key={`achievement${idx}`} className='text-sm'>
										{a}
									</li>
								))}
							</ul>
						</>
					)}
				</div>
				<div className='flex justify-center pt-4 md:justify-start'>
					<button
						className={`w-2/3 rounded-full bg-titles-dark px-8 py-1 text-white opacity-95 hover:opacity-70 ${
							isHidden ? 'md:w-1/6' : 'md:w-1/5'
						}`}
						onClick={onClickHandler}
					>
						{isHidden ? 'Ver más' : 'Ver menos'}
					</button>
				</div>
			</div>
		</li>
	)
}

export default ExperienceCard
