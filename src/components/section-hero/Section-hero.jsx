import "../section-hero/Section-hero.css"
export default function SectionHero() {
    return (
        <section className="container section_hero">
            <div className="hero_text">
                <h1 className="poppins-semibold">
                    Learn <br />
                    Any Foreign
                    Language
                </h1>
                <p className="poppins-regular">With our teachers who write a program for
                    each student, you will be able to make your
                    first sketch after the first lesson.
                </p>
                <button className="btn-hero btn poppins-regular">Get started</button>
            </div>
            <img src="src/assets/hero-bg.jpg" alt="" />
        </section>
    )
}
