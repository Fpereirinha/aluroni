import { SetStateAction } from "react";
import styles from "./buscador.module.scss";
import { CgSearch } from "react-icons/cg";

interface Props {
	busca: string;
	setBusca: React.Dispatch<SetStateAction<string>>;
}

export default function Buscador({ busca, setBusca }: Props) {
	return (
		<div className={styles.buscador}>
			<input
				type="text"
				name=""
				id=""
				value={busca}
				onChange={(evento) => setBusca(evento.target.value)}
				placeholder="Buscar"
			/>
			<CgSearch size={20} color="#4C4D5E" />
		</div>
	);
}
