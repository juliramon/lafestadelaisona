const Agenda = ({title, description}) => {
	return (
		<li className="bg-white hover:bg-opacity-40 hover:backdrop-blur px-6 py-4 shadow-sm flex flex-col mb-2 hover:translate-x-6 transition-all duration-700 ease-in-out cursor-pointer">
			<h3 className="text-xl mb-0">{title}</h3>
			<span className="text-neutral-700 font-normal block">
				{description}
			</span>
		</li>
	);
};

export default Agenda;
