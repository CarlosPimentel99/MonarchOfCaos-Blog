export const styles = `
/* Imagem de fundo */
.bg-img {
  background-image: url('/images/BannerMonarch.jpeg');
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

/* Container do formulário */
.form-container {
  margin-top: 20vh;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.5);
}

.buttonPersonalizado {
    background: linear-gradient(to right, #FF0000, #0000FF);
    border: none;
    border-radius: 20px;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    padding: 10px 20px;
    transition: background-color 0.5s ease;
    cursor: pointer;
}

.buttonPersonalizado:hover {
    background: linear-gradient(to right, #0000FF, #FF0000);
}

#image-names {
    resize: none;
  }
  
  #image-upload {
    background-color: #f2f2f2;
    padding: 10px;
    border-radius: 5px;
    border: none;
  }
  
  #image-upload:focus {
    outline: none;
    box-shadow: none;
  }
  
  .form-group label {
    font-weight: bold;
    color: #333;
  }
  
  .form-control {
    background-color: #f2f2f2;
    color: #333;
    border: none;
    border-radius: 5px;
  }
  
  .form-control:focus {
    outline: none;
    box-shadow: none;
  }
  
  @media (max-width: 767px) {
    .form-group label {
      display: block;
      margin-bottom: 10px;
    }

`