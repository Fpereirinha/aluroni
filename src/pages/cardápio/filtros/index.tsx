import filtros from "./filtros.json";
import styles from "./Filtros.module.scss";
import classNames from "classnames";
type IOpcao = typeof filtros[0];
interface Props {
	filtro: number | null;
	setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}
export default function Filtrons({ filtro, setFiltro }: Props) {
	function selecionarFiltro(x: IOpcao) {
		if (filtro === x.id) {
			return setFiltro(null);
		}
		return setFiltro(x.id);
	}
	return (
		<div className={styles.filtros}>
			{filtros.map((opção) => (
				<button
					className={classNames(
						{ [styles.filtros__filtro]: true },
						{ [styles["filtros__filtro--ativo"]]: filtro === opção.id }
					)}
					key={opção.id}
					onClick={() => selecionarFiltro(opção)}
				>
					{opção.label}
				</button>
			))}
		</div>
	);
}
