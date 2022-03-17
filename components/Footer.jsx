import HeartIcon from '../assets/images/HeartIcon'

export default () => {
	return (
		<footer className="border-t border-t-almond-white/20 p-16 backdrop-blur-lg">
			<div className="text-center font-heading text-xs uppercase">
				<p>&copy; 2022 LazyCodeLab. All Rights Reserved</p>
				<p className="flex justify-center">
					Made with
					<HeartIcon className="mx-1 inline h-3 w-3 fill-current hover:text-red-500" />
					in India
				</p>
			</div>
		</footer>
	)
}
