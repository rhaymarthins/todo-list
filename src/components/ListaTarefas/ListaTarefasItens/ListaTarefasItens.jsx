import { useState } from 'react';
import { useAppContext } from '../../../hooks';
import { Botao, CampoTexto, Loading, TIPO_BOTAO } from '../../../components';
import style from './ListaTarefasItens.module.css';

const ListaTarefasItens = (props) => {
    const { id, nome } = props;

    const [estaEditando, setEstaEditando] = useState(false);

    const { loadingEditar, loadingDeletar, editarTarefa, removerTarefa } = useAppContext();

    const loadingEstaEditando = loadingEditar === id;
    const loadingEstaDeletando = loadingDeletar === id;

    const onBlurTarefa = (event) => {
        const nomeTarefa = event.currentTarget.value;

        editarTarefa(id, nomeTarefa);

        setEstaEditando(false);
    }

    return (
        <li className={style.ListaTarefaItens}>
            {(loadingEstaEditando || estaEditando) && (
                <CampoTexto
                    defaultValue={nome}
                    onBlur={onBlurTarefa}
                    autoFocus
                />
            )}
            {!loadingEstaEditando && !estaEditando && (
                <span onDoubleClick={() => setEstaEditando(true)}>{nome}</span>
            )}

            {loadingEstaEditando && (
                <Loading />
            )}

            <Botao
                texto={loadingEstaDeletando ? <Loading /> : '-'}
                tipo={TIPO_BOTAO.SECUNDARIO}
                onClick={() => removerTarefa(id)}
            />
        </li>
    )
};

export { ListaTarefasItens };