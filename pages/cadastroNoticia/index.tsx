import { styles } from './style.js';
import Head from 'next/head';

export default function CadastroNoticia() {
    return (
        <>
            <Head>
                <style>{styles}</style>
            </Head>
            <div className="bg-img"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto bg-white form-container">
                        <form>
                            <div className="form-group">
                                <label>Título</label>
                                <input type="text" className="form-control" id="titulo" />
                            </div>
                            <div className="form-group">
                                <label>Resumo</label>
                                <textarea className="form-control" id="resumo" rows={3}></textarea>
                            </div>
                            <div className="form-group">
                                <label>Conteúdo Completo</label>
                                <textarea className="form-control" id="conteudo" rows={10}></textarea>
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