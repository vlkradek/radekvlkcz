import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

import Test from '@/utils/model';
import mongoose from 'mongoose';

export default function Home({tests}) {

    
    return (
        <>
            <header>
                <div className="row header-content">
                    <div className="header-intro">
                        <h2>
                            Webové stránky a eshopy
                            <br />
                            pro vás nebo vaší firmu
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
            <div>
                {tests.map(test=>(
                    <h1>{test.text}</h1>
                ))}
            </div>
        </>
    );
}

export const getServerSideProps = async()=>{
    try{
        console.log('fetching');
    await mongoose.connect('mongodb+srv://radekvlk:radekvlk@cluster0.pykgiln.mongodb.net/?retryWrites=true&w=majority')
    const tests = await Test.find().sort({_id: -1}).limit(1)
    console.log('fetched');

    

    return {
        props: {
            tests: JSON.parse(JSON.stringify(tests))
        }
    }
    } catch(error){
        console.log(error)
        resizeBy.json({error})
        return{
            notFound: true
        }
    }
}