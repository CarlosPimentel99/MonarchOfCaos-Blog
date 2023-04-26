import { useState } from 'react';
import { styles } from './style.js';
import Head from 'next/head';

interface Formulario {
    f001titulo: string
    f001resumo: string
    f001conteudo: string
    f001idNoticia: string
}

export default function CadastroNoticia() {

    const [form, setForm] = useState<Formulario>({ f001titulo: "", f001resumo: "", f001conteudo: "", f001idNoticia: "" });

    async function criar(formulario: Formulario) {
        try {
            fetch('/api/create', {
                body: JSON.stringify(formulario),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }).then(() => setForm({ f001titulo: "", f001resumo: "", f001conteudo: "", f001idNoticia: "" }))
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = async (formulario: Formulario) => {
        try {
            criar(formulario)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Head>
                <style>{styles}</style>
            </Head>
            <div className="bg-img"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto bg-white form-container">
                        <form onSubmit={e => {
                            e.preventDefault()
                            handleSubmit(form)
                        }}>
                            <div className="form-group">
                                <label>Título</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Informe o Título"
                                    value={form.f001titulo}
                                    onChange={e => setForm({ ...form, f001titulo: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label>Resumo</label>
                                <textarea
                                    className="form-control"
                                    rows={3}
                                    placeholder="Informe o Resumo"
                                    value={form.f001resumo}
                                    onChange={e => setForm({ ...form, f001resumo: e.target.value })}
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <label>Conteúdo Completo</label>
                                <textarea
                                    className="form-control"
                                    rows={10}
                                    placeholder="Informe o Conteudo completo"
                                    value={form.f001conteudo}
                                    onChange={e => setForm({ ...form, f001conteudo: e.target.value })}
                                ></textarea>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="image-upload">Upload de Imagem:</label>
                                            <input type="file" accept='image/*' className="form-control-file" id="image-upload" name="image-upload" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn-primary buttonPersonalizado">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        </>
    );

}