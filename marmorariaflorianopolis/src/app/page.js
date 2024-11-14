import Image from "next/image";
import Link from "next/link";
import styles from "./globals.css";
import Styles from "./styles.modules.css"

export default function Home() {
  return (
    <section>


    <div className="barra">
      <div className="barra-logo">
        <img src="/logo.jpeg" className="logo"></img>
        </div>
        <h1 className="text-barra">Marmoraria Florianópolis</h1>
        <div className="buttons">
      <Link href={'/'} className="link-sobre"><button className="btn">HOME</button></Link>
      <Link href={'./empresa'} className="link-sobre"><button className="btn">EMPRESA</button></Link>
      <Link href={'./materiais'} className="link-serviços"><button className="btn">MATERIAIS</button></Link>
      <Link href={'./trabalhos'} className="link-trabalhos"><button className="btn">TRABALHOS</button></Link>
      <Link href={'./parceiros'} className="link-parceiros"><button className="btn">PARCEIROS</button></Link>
      <Link href={'./contatos'} className="link-contatos"><button className="btn">CONTATOS</button></Link>
      <Link href=" https://whatsapp.com/dl/."><button className="button-whatsapp">WhatsApp</button></Link>
      </div>
    </div>

    <div className="showroom">
<img src="showroom22.jpg" className="showroom-foto"></img>
    </div>

<div className="threebts">
<div className="icones">
<img src="portifolio.png" className="butum1"></img>
<h1 className="a1">PORTIFOLIO</h1>
<h2 className="a2">INSPIRE-SE</h2>
<h3 className="a3">Conheça alguns de nosso trabalhos realizados pela nossa equipe altamente qualificada.</h3>
</div>



<div className="icones">
<img src="produto.png" className="butum1"></img>
<h1 className="a1">PRODUTOS</h1>
<h2 className="a2">MELHOR QUALIDADE</h2>
<h3 className="a3">Trabalhamos com produtos de altíssima qualidade e com grande variedade de materiais.</h3>
</div>



<div className="icones">
<img src="maquinas.png" className="butum1"></img>
<h1 className="a1">MAQUINÁRIO</h1>
<h2 className="a2">E EQUIPE</h2>
<h3 className="a3">Contamos com moderno maquinário e pessoas com capacidade técnica especializada</h3>
</div>

</div>


<div className="escritas">
           <div className="imagem-clicavel">
           <Link href="https://maps.app.goo.gl/NPSJPNp6B877nH396">
           <img src="/faixada.jpg" alt="faixada"/>
           </Link>
           </div>
     <div className="text-esc">
     <h1 className="escrita-1">SUA MARMORARIA EM <br></br>FLORIANÓPOLIS</h1>
     <h2 className="escrita-2">A Marmoraria Florianópolis oferece uma grande <br></br>seleção de mármores e granitos, tanto nacionais<br></br> quanto importados, com acabamento de alta <br></br>qualidade. Seus produtos trazem mais valor aos <br></br>ambientes, incluindo opções para cozinhas, pisos, <br></br> revestimentos,lavatórios, soleiras, molduras e outros itens.</h2>
     <h3 className="escrita-3">Clique na foto para localizar nossa empresa</h3>
     </div>
     </div>


 <div className="visita">
          <img src="/visitenos.jpg" className="visita-click"></img>
   <div className="visitas-text">
          <h1 className="visita-1">VENHA NOS FAZER UMA VISITA</h1>
          <h2 className="visita-2">A Marmoraria Florianópolis está localizada em Florianópolis,<br></br> Santa Catarina, e atende toda a Grande Florianópolis e região. <br></br>Oferecemos orçamentos gratuitos e sem compromisso para <br></br> todos os tipos de clientes. Venha nos fazer uma visita!</h2>
          <Link href="https://maps.app.goo.gl/NPSJPNp6B877nH396"><button  className="visita-3"><h3>NOS VISITE</h3></button></Link>
   </div>
 </div>




  <div className="footer">
<div className="footer-inicio"></div>
<div className="footer-barra">
<div className="footer-text">

<div className="text-f">
<h1 className="f-f">MARMORARIA FLORIANÒPOLIS</h1>
<h2 className="f-f1">A Marmoraria Florianópolis está situada <br></br>em Florianópolis, no estado de Santa Catarina desde 2222.</h2>
</div>


<div className="text-f">
<h1 className="f-f">ONDE NOS ENCONTRAR</h1>
<h2 className="f-f2">Rua 123, 1234 - Centro, Florianópolis, Santa Catarina, 88000-000</h2>
<h2 className="f-f2">CEP:00000-000</h2>
</div>


<div className="text-f">
<h1 className="f-f">FALE CONOSCO</h1>
<h2 className="f-f3">Fone:(48)9999-9999</h2>
<h2 className="f-f3">WhatsApp:(48)99999-9999</h2>
<h2 className="f-f3">Email: marmorariaaaaaa@gmail.com</h2>
</div> 

</div>
</div>

<div className="footer-fim">
  <h1 className="desenvolvido">Desenvolvido em 2024 por</h1>
<Link href="https://www.instagram.com/constante.design_/?utm_source=ig_web_button_share_sheet" className="desenvolvido1">CONSTANTE</Link>
</div>

  </div>
         

      </section>          

)
}