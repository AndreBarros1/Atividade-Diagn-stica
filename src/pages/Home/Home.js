import './Home.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'


function Home() {
    return (
        <div>
            <Header/>
            <main>
                <section>
                <h2>Introdução</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel
                    sapien eu nulla cursus sollicitudin. Morbi convallis orci non ipsum
                    pulvinar, a venenatis libero ultricies. Proin vitae bibendum elit.
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia curae; Phasellus tincidunt, turpis a pretium
                    elementum, erat nunc vestibulum orci, at tristique metus lorem et
                    nunc. Nullam suscipit turpis quis malesuada semper. Aenean
                    consectetur neque euismod, sollicitudin nunc nec, ultrices dui.
                </p>
                </section>
                <section>
                <h2>Sobre Nós</h2>
                <p>
                    Curabitur tincidunt, nisl non feugiat fringilla, odio orci accumsan
                    odio, et pellentesque odio risus nec erat. Suspendisse potenti.
                    Integer convallis, orci vitae volutpat dictum, augue eros consequat
                    sapien, in luctus lacus nisi in mauris. Sed malesuada libero nisi,
                    non blandit sem pellentesque a. Proin sed velit a sapien feugiat
                    tempus. Cras gravida erat quis leo auctor, at fringilla nisl
                    volutpat. Morbi sed posuere augue, eget varius augue. Integer
                    volutpat lectus id vehicula vestibulum. Aenean viverra accumsan
                    mauris, ac fermentum tortor cursus at. Vestibulum ante ipsum primis
                    in faucibus orci luctus et ultrices posuere cubilia curae; Quisque
                    dictum fermentum ligula in sodales.
                </p>
                </section>
                <section>
                <h2>Contato</h2>
                <p>
                    Etiam ac nisi velit. Sed hendrerit turpis vel sapien vehicula, sed
                    luctus dolor fringilla. Aliquam erat volutpat. Fusce sit amet risus
                    vel turpis lobortis congue. Pellentesque bibendum lacus non nisi
                    suscipit, vel varius massa gravida. Suspendisse euismod, tortor id
                    tristique fermentum, justo eros auctor leo, id tristique felis
                    lacus eu lorem. Phasellus posuere semper velit, eu iaculis sapien
                    ultricies non.
                </p>
                </section>
            </main>
            <Footer/>
      </div>
    )
}

export default Home