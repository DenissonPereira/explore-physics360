import { Spinner } from 'react-bootstrap'
import MinhaFoto from '../../assets/minha_foto_1.png'
import './Sobre.sass'

const Sobre = () => {
    return (
        <div>
            <main className="main_sobre">
                <article className="article_sobre">
                    <h1>Sobre o Explore Physics 360<Spinner /></h1>
                    <p>
                        O Explore Physics 360 é um projeto dinâmico concebido e desenvolvido por Denisson Pereira, com o objetivo de fornecer uma gama abrangente de calculadoras dedicadas a físicos, matemáticos, desenvolvedores e estudantes. Este projeto surge da visão de criar uma plataforma versátil que atenda às diversas necessidades de profissionais e estudiosos que buscam ferramentas robustas para realizar cálculos precisos e complexos em diversas áreas da física e matemática.
                    </p>
                    <div className="sobre_mim">
                        <img src={MinhaFoto} />
                        <p>
                            Denisson Pereira é um estudante de doutorado em física teórica e um habilidoso desenvolvedor full stack. Graduado em física e matemática, ele canaliza sua paixão pelo mundo das exatas e tecnologia em sua jornada acadêmica e profissional. Sua combinação única de conhecimentos teóricos em física e habilidades práticas em desenvolvimento de software o capacita a abordar desafios complexos com uma perspectiva abrangente. Denisson dedica-se não apenas à pesquisa avançada na área de física teórica, mas também à criação de soluções inovadoras e eficientes no campo da tecnologia, refletindo seu comprometimento com a interseção entre ciência e desenvolvimento tecnológico.
                        </p>
                    </div>
                    <p>
                        Com uma abordagem proativa para aprimoramento técnico, o Explore Physics 360 não apenas oferece uma variedade de calculadoras precisas, mas também se esforça para ser uma ferramenta aberta e adaptável, atendendo às necessidades em constante evolução da comunidade científica e educacional. Este projeto reflete o comprometimento com a excelência e a busca incessante por recursos que enriqueçam a experiência de usuários de diversas áreas do conhecimento.
                    </p>
                </article>
            </main>
        </div>
    )
}

export default Sobre