import { FaSearch } from "react-icons/fa";
import styles from "./Datatable.module.scss";

type TableProps = {
  data: {
    grupo: string;
    descricao: string;
    valorEnergetico: string;
    proteinas: string;
    lipideos: string;
  }[];
  onDetailClick: (item: { grupo: string; descricao: string; valorEnergetico: string; proteinas: string; lipideos: string; }) => void;
};

export default function DataTable({ data, onDetailClick }: TableProps) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Grupo</th>
          <th>Descrição</th>
          <th>Val. Energético</th>
          <th>Proteínas</th>
          <th>Lipídeos</th>
          <th>Detalhes</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.grupo}</td>
            <td>{item.descricao}</td>
            <td>{item.valorEnergetico}</td>
            <td>{item.proteinas}</td>
            <td>{item.lipideos}</td>
            <td>
              <button className={styles.detailButton} onClick={() => onDetailClick(item)}>
                <FaSearch />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}