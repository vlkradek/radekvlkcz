import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Content from "./api/db";
import mongoose from "mongoose";
import clientPromise from "@/mongodb";



import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

let client
let db
let movies

async function init(){
    if(db) return
    try{
        client = await clientPromise
        db = await client.db()
        movies = await db.collection('contents')
    } catch (error){
        throw new Error('Failed')
    }
}

;(async()=>{
    await init()
})()

async function getMovies(){
    try{
        if(!movies) await init()
        const result = await movies
            .find({})
            .limit(20)
            .map(user => ({...user,_id:user._id.toString}))
            .toArray()
        return{movies:result}


    } catch (error){
        return {error: 'fetch failed'}
    }
}
async function fetchMovies(){
    const {movies} = await getMovies()
    if(!movies) throw new Error('Failed to fetch')
    return movies
}
export default async function Home() {
    const movies = await fetchMovies()


    // const [contentText, setText] = useState("");
    // useEffect(() => {
    //     Content.find((err, texts) => {
    //         console.log("ahoj");
    //     });
    // });
    
    return (
        <>
            <header>
                <div className="row header-content">
                    <div className="header-intro">
                        <h2>
                            {movies.map(movie => (
                                <p key={movie._id}>{movie.text}</p>
                            ))}
                        </h2>
                        <Link href="/contact">Kontaktujte mě</Link>
                    </div>
                    <Image src="/website-cut.png" width={100} height={100} />
                </div>
            </header>
            <main>
                <section className="row why-me">
                    <h3 className="sec-title">Proč zrovna já?</h3>
                    <div className="items">
                        <div className="item">
                            <i class="bx bxs-widget"></i>
                            <h4>Nejmodernější technologie</h4>
                            <p>
                                Jelikož se v tomhle oboru pohybuji pouze několik
                                let, využívám k tvorbě webových stránek ty
                                nejmodernější technologie s nejlepší
                                optimalizací, rychlostí a kompatibilitou mezi
                                zařízeními
                            </p>
                        </div>
                        <div className="item">
                            <i class="bx bx-money"></i>
                            <h4>contentText</h4>
                            <p>
                                Doba vývoje závisí především na komunikaci. Při
                                dobré domluvě a aktivní komunikaci bude váš web
                                zhotoven rychle a přesně podle vašich představ.
                            </p>
                        </div>
                        <div className="item">
                            <i class="bx bx-time-five"></i>
                            <h4>Podpora a servis</h4>
                            <p>
                                Pokud se po zprovoznění webu objeví nějaká
                                chyba, něco se vám nebude zdát nebo budete
                                potřebovat pomoc se správou webu, máte u mě
                                podporu a servis zcela zdarma!
                            </p>
                        </div>
                    </div>
                </section>
                <section className="about">
                    <div className="row">
                        <h3 className="sec-title">Co vám mohu nabídnout?</h3>
                        <b>
                            Tvorba
                            <span> webové stránky</span> nebo{" "}
                            <span>eshopu</span>
                        </b>
                        <div className="items">
                            <div className="item">
                                <i class="bx bx-devices"></i>
                                <p>Plně responzivní</p>
                            </div>
                            <div className="item">
                                <i class="bx bx-windows"></i>
                                <p>Kompatibilní s každým prohlížečem</p>
                            </div>
                            <div className="item">
                                <i class="bx bx-wind"></i>
                                <p>Rychlý a plynulý</p>
                            </div>
                            <div className="item">
                                <i class="bx bx-wind"></i>
                                <p>Optimalizace pro vyhledávání - SEO</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact-me">
                    <div className="row">
                        <h3 className="sec-title">Krok za krokem</h3>
                        <div className="progress">
                            <div className="list-item">
                                <span>1</span>
                                <div className="item-text">
                                    <h4>Konzultace vašeho přání</h4>
                                    <p>
                                        Probereme co si představujete, co chcete
                                        na webu mít a nakonci se dohodneme na
                                        předběžné částce webu
                                    </p>
                                </div>
                            </div>
                            <div className="list-item">
                                <span>2</span>
                                <div className="item-text">
                                    <h4>Předběžný návrh podoby webu</h4>
                                    <p>
                                        Ve speciálním nástroji na tvorbu designu
                                        vám zhotovím návrh, jak by mohl web
                                        vypadat
                                    </p>
                                </div>
                            </div>
                            <div className="list-item">
                                <span>3</span>
                                <div className="item-text">
                                    <h4>Konzultace designu</h4>
                                    <p>
                                        Probereme návrh webu a dohodneme se na
                                        dodatečných úpravách
                                    </p>
                                </div>
                            </div>
                            <div className="list-item">
                                <span>4</span>
                                <div className="item-text">
                                    <h4>Tvorba samotného webu</h4>
                                    <p>
                                        Tahle část trvá nejdéle. Jde o samotné
                                        kódovaní webu, které trvá většinou
                                        několik týdnů
                                    </p>
                                </div>
                            </div>
                            <div className="list-item">
                                <span>5</span>
                                <div className="item-text">
                                    <h4>Finální konzultace</h4>
                                    <p>
                                        Představím vám váš nový web, naučím vás
                                        jak s ním pracovat jako správce a
                                        probereme jeho případné nedostatky
                                    </p>
                                </div>
                            </div>
                            <div className="list-item">
                                <span>6</span>
                                <div className="item-text">
                                    <h4>Zprovoznění webu</h4>
                                    <p>
                                        Obstaráme vám doménu, web nahrajeme na
                                        server a dílo je hotové!
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <h3 className="sec-title">Kontaktujte mě</h3>
                        <form action="/send-mail">
                            <label htmlFor="name">Jméno a přijmení</label>
                            <input type="text" />
                            <label htmlFor="email">Email</label>
                            <input type="email" />
                            <label htmlFor="message">Zpráva</label>
                            <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                            ></textarea>
                            <input type="submit" value="Odeslat" />
                        </form>
                        <div className="ormail">
                            Nebo email
                            <a href="mailto:radekvlk@radekvlk.cz">radekvlk@radekvlk.cz</a>

                        </div> */}
                        <div className="container">
                            <Link href="/contact" className="btn-contact">
                                Pojďme začít!
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
