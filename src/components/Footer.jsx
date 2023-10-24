import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="footer-content">
            <h5>Insawear</h5>
            <p>
                Descubrí la moda más actual en nuestra tienda de ropa. Encontrá las últimas tendencias en moda para hombres. Comprá ropa de calidad a precios increíbles y creá tu estilo único. Envíos rápidos y devoluciones fáciles. ¡Explorá nuestra colección ahora!
            </p>
            <ul className="socials">
                <li><a href="https://facebook.com" target="_blank"><i className="fa fa-facebook"></i>Facebook</a></li>
                <li><a href="https://twitter.com" target="_blank"><i className="fa fa-twitter"></i>Twitter</a></li>
                <li><a href="https://youtube.com" target="_blank"><i className="fa fa-youtube"></i>Youtube</a></li>
                <li><a href="https://linkedin.com" target="_blank"><i className="fa fa-linkedin-square"></i>Linkedin</a></li>
            </ul>
        </div>
        <div className="footer-bottom">
            <p>Copyright &copy;2023 Insawear. Designed by <span>Lucas Insaurralde Sousa</span></p>
        </div>
    </footer>
  )
}

export default Footer