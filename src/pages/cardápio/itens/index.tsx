import cardapio from "./itens.json";
import Item from "./item";
import styles from "./Itens.module.scss";
import { useEffect, useState } from "react";
interface Props {
	busca: string;
	filtro: number | null;
	ordenador: string;
}
export default function Itens({ filtro, ordenador, busca }: Props) {
	function ordenarPropriedadeCrescente(
		novalista: typeof cardapio,
		propiedade: "size" | "serving" | "price"
	) {
		return novalista.sort((a, b) => (a[propiedade] < b[propiedade] ? 1 : -1));
	}
	function ordenar(novalista: typeof cardapio) {
		switch (ordenador) {
		case "porcao":
			return ordenarPropriedadeCrescente(novalista, "size");
		case "qtd_pessoas":
			return ordenarPropriedadeCrescente(novalista, "serving");
		case "preco":
			return ordenarPropriedadeCrescente(novalista, "price");
		default:
			return novalista;
		}
	}
	function testaBusca(title: string) {
		const regex = new RegExp(busca, "i");
		return regex.test(title);
	}
	function testaFiltro(id: number) {
		if (filtro !== null) return filtro === id;
		return true;
	}
	const [lista, setLista] = useState<typeof cardapio>(cardapio);
	useEffect(() => {
		const novaLista = cardapio.filter(
			(item) => testaBusca(item.title) && testaFiltro(item.category.id)
		);
		setLista(ordenar(novaLista));
	}, [busca, filtro, ordenador]);
	return (
		<div className={styles.itens}>
			{lista.map((item) => (
				<Item key={item.id} {...item} />
			))}
		</div>
	);
}
