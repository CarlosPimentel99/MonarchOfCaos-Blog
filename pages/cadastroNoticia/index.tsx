import { useState } from 'react';
import { styles } from './style.js';
import Head from 'next/head';
import { GetBase64 } from '@/utils/getBase64';
import { t001 } from '@prisma/client';

export type IFormulario = Omit<t001, "f001dataCriacao" | "f001idNoticia">

export default function CadastroNoticia() {

    const [form, setForm] = useState<IFormulario>({ f001titulo: "", f001resumo: "", f001conteudo: "", f001imagem: "" });

    async function criar(formulario: IFormulario) {
        try {
            fetch('/api/create', {
                body: JSON.stringify(formulario),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }).then(() => setForm({ f001titulo: "", f001resumo: "", f001conteudo: "", f001imagem: "" }))
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = async (formulario: IFormulario) => {
        try {
            criar(formulario)
        } catch (error) {
            console.log(error)
        }
    }

    const handleFileInputChange = (e: any) => {
        console.log(e.target.files[0]);

        var file = e.target.files[0];

        GetBase64(file)
            .then(result => {
                setForm({ ...form, f001imagem: result })
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <>
            <Head>
                <style>{styles}</style>
            </Head>
            <div className="bg-img"></div>
            <div className="container">
                <img width={300} height={300} src={form.f001imagem || "https://via.placeholder.com/150"}></img>
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
                                            <input type="file" accept='image/*' className="form-control-file" id="image-upload" name="image-upload" onChange={handleFileInputChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn-primary buttonPersonalizado">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        </>
    );

}