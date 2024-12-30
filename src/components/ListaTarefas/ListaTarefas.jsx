import { useAppContext } from '../../hooks';
import { Loading } from '../Loading';
import style from './ListaTarefas.module.css';
import { ListaTarefasItens } from "./ListaTarefasItens";

const ListaTarefas = () => {
    const { tarefas, loadingCarregar } = useAppContext();

    return (
        <ul className={style.ListaTarefas}>
            {loadingCarregar && (
                <p>
                    Carregando...
                    <Loading />
                </p>
            )}

            {loadingCarregar && !tarefas.length &&
                <h2>Não há tarefas cadastradas...</h2>
            }

            {tarefas.map(item => (
                <ListaTarefasItens
                    key={item.id}
                    id={item.id}
                    nome={item.nome}
                />
            ))}
        </ul >
    )
};

export { ListaTarefas };